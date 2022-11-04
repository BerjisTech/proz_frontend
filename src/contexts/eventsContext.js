// Pull data from eventbrite
// https://www.eventbrite.com/platform/api#/introduction/quick-start

import React, { useState, useEffect } from 'react';

const EventsContext = React.createContext();

const EventsProvider = (props) => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    const [page] = React.useState(1)
    const url = process.env.REACT_APP_EVENTBRITE_BASE_URL

    const getEvents = async () => {
        try {
            const response = await fetch(`${url}/organizations/${process.env.REACT_APP_EVENTBRITE_ORGANIZER_ID}/events/?status=live&page=${page}`, {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${process.env.REACT_APP_EVENTBRITE_PRIVATE_TOKEN}`
                }
            })
            const data = await response.json()
            console.log(data)
            setEvents(events)
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getEvents();
    }, []);

    if (loading) {
        return <div className="text-center mt-5">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    if (error) {
        return <div className="text-center mt-5">
            {alert('Error')}
            <h1 className="text-danger">Error: {error.message}</h1>
        </div>
    }

    return (
        <EventsContext.Provider value={{ events }}>
            {props.children}
        </EventsContext.Provider>
    );
};

export { EventsContext, EventsProvider };
