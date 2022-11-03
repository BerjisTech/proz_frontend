import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

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
                    `https://api.proz.com/v2/freelancer-matches?page=${page}&is_member=true&limit=10&featured_member=true&language_pair=eng_swa`,
                    {
                        headers: {
                            "access-control-allow-origin": "*",
                            "Authorization": `Bearer f40bee2df5d8eeabd82449578150203dafc7e304`
                        },
                        mode: 'cors',
                        method: 'GET'
                    },
                )

                const data = await response.json()
                setFreelancers(data)
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
    // console.log(freelancers['data'])

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <div>
            {
                freelancers && freelancers['data'].length > 0 ? (
                    <div>
                        <h1>Freelancers</h1>
                        <p>Page {page} of {total_pages}</p>
                        <p>Total items: {total_items}</p>
                        <div className='row mx-0 px-0'>
                            {freelancers && freelancers['data'].map((freelancer, index) => (
                                <div className='col-sm-3' key={index}>
                                    <div className='shadow m-1 p-2'>
                                        <a href={`/freelancer/${freelancer.freelancer.uuid}`}>
                                            <img src={freelancer.freelancer.image_url} alt='ProZ.com' className='img-fluid w-[50px] h-[50px] rounded-full' />
                                            <span>{freelancer.freelancer.site_name}</span>
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
                        <button onClick={() => setPage(page + 1)} disabled={page === total_pages}>Next</button>
                    </div>
                ) : (
                    <div>
                        No Freelancers Found
                    </div>
                )
            }
        </div>
    )
}

export default Freelancer
