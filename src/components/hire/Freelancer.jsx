import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

// User list
// [
//     {
//         "id": 2,
//         "parent_id": 1,
//         "name": "My Vendors",
//         "description": "This is a description of My Vendors list.",
//         "users": [
//             {
//                 "id": 46745,
//                 "link": "https://api.proz.com/v2/users/ad00b4f1-7b79-461d-92bd-57b4373ef1cb",
//                 "operation": "include"
//             }
//         ]
//     }
// ]
const Freelancer = () => {
    const [freelancers, setFreelancers] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    const [page, setPage] = React.useState(1)
    const [total_pages, setTotalPages] = React.useState(1)
    const [total_items, setTotalItems] = React.useState(0)

    useEffect(() => {
        const getFreelancers = async () => {
            try {
                const response = await fetch(
                    `https://api.proz.com/v2/user-list?page=${page}`,
                    {
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('access_token')}`
                        },
                        method: 'GET'
                    },
                )

                const data = await response.json()
                setFreelancers(data.items)
                setTotalPages(data.total_pages)
                setTotalItems(data.total_items)
            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        getFreelancers()
    }, [page])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <div>
            <h1>Freelancers</h1>
            <p>Page {page} of {total_pages}</p>
            <p>Total items: {total_items}</p>
            <ul>
                {freelancers.map(freelancer => (
                    <li key={freelancer.id}>
                        <a href={freelancer.link}>{freelancer.name}</a>
                    </li>
                ))}
            </ul>
            <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
            <button onClick={() => setPage(page + 1)} disabled={page === total_pages}>Next</button>
        </div>
    )
}

export default Freelancer
