import React from 'react'

const Events = () => {
    const [events, setEvents] = React.useState([]);
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
            setEvents(data['events'])
            setLoading(false)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }


    React.useEffect(() => {
        getEvents()
    }, [])

    if (loading) {
        return <div className="text-center mt-5">
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    }

    if (error) {
        return <div className="text-center mt-5">
            <h1 className="text-danger">Error: {error.message}</h1>
        </div>
    }

    return (
        <div>
            {loading ? <div className="text-center">Loading...</div> : (
                <div className='d-flex align-items-start justify-content-center gap-3 flex-column '>
                    {events.map((event) => {
                        const { id, name, description, url, start, end, logo, organization, venue, format, online_event } = event
                        return (
                            console.log(event),
                            <div className="w-full d-flex gap-3 flex-wrap algin-items-center justify-content-between hover:shadow-xl px-2 py-4" key={id}>
                                <div className='min-w-70px'>
                                    <img src={logo.url} className="img-fluid rounded-start w-[100px]" alt={name.text} />
                                </div>
                                <div className='flex-fill'>
                                    <div className="card-body showMoreTrigger">
                                        <div className=''>
                                            <span className="fs-4">{name.text}</span>
                                            <p className="">{description.text}</p>
                                        </div>
                                        <div className='showMoreBox d-none flex-column'>
                                            <p className="card-text"><small className="text-muted">Start: {start.local}</small></p>
                                            <p className="card-text"><small className="text-muted">End: {end.local}</small></p>
                                            <p className="card-text"><small className="text-muted">Venue: {online_event ? "Online Event" : venue.name}</small></p>
                                            <p className="card-text"><small className="text-muted">Organization: ProZ.com</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <a href={url} className="btn btn-primary bg-primary">View Event</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default Events
