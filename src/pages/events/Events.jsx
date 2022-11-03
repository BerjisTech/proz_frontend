import React from 'react'

const Events = () => {
    const [events, setEvents] = React.useState([]);
    //   Get events from EventBrite API
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    const [page ] = React.useState(1)
    const [total_pages, setTotalPages] = React.useState(1)

    return (
        <div>
            <h1>Events</h1>
        </div>
    )

}

export default Events
