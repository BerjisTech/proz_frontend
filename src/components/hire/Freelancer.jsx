import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ClearStrikeThrough from '../extra_ui_tools/ClearStrikeThrough'

export const FreelancerFilterForm = () => {
    return (
        <div className=''>
            <form className='form' method="GET" action="/hire/freelancers">
                <div>
                    <ClearStrikeThrough striked_text="Language" />
                    <div className='d-flex border-1'>
                        <div className='form-floating'>
                            <select type='select' name='source_language' placeholder="Name" className='form-control border-none outline-none focus:outline-none focus:border-none'>
                                <option disabled>Pick a source langauge</option>
                            </select>
                            <label htmlFor='name'>Source Language</label>
                        </div>
                        <div className='form-floating'>
                            <select type='select' name='target_language' placeholder="Location" className='form-control border-none outline-none focus:outline-none focus:border-none'>
                                <option disabled>Pick a target langauge</option>
                            </select>
                            <label htmlFor='name'>Target Language</label>
                        </div>
                    </div>
                </div>
                <div>
                    <ClearStrikeThrough striked_text="Expertise" />
                </div>
                <div>
                    <ClearStrikeThrough striked_text="Location" />
                </div>
                <div>
                    <ClearStrikeThrough striked_text="Credential and Software" />
                </div>
                <div>
                    <ClearStrikeThrough striked_text="Other" />
                </div>
                <div className='form-floating'>
                    <input type='text' name='skills' placeholder="Skills" className='form-control' />
                    <label htmlFor='name'>Skills</label>
                </div>
                <div className='form-floating'>
                    <input type='text' name='rate' placeholder="Rate" className='form-control' />
                    <label htmlFor='name'>Rate</label>
                </div>
                <div className='form-floating'>
                    <input type='text' name='availability' placeholder="Availability" className='form-control' />
                    <label htmlFor='name'>Availability</label>
                </div>
                <div className='form-floating'>
                    <input type='text' name='experience' placeholder="Experience" className='form-control' />
                    <label htmlFor='name'>Experience</label>
                </div>
                <div className='form-floating'>
                    <input type='text' name='education' placeholder="Education" className='form-control' />
                    <label htmlFor='name'>Education</label>
                </div>
                <div className='form-floating'>
                    <input type='text' name='certifications' placeholder="Certifications" className='form-control' />
                    <label htmlFor='name'>Certifications</label>
                </div>
                <div className='form-floating'>
                    <input type='text' name='languages' placeholder="Languages" className='form-control' />
                    <label htmlFor='name'>Languages</label>
                </div>
                <div className='form-floating'>
                    <input type='text' name='portfolio' placeholder="Portfolio" className='form-control' />
                    <label htmlFor='name'>Portfolio</label>
                </div>
                <div className='form-floating'>
                    <input type='text' name='testimonials' placeholder="Testimonials" className='form-control' />
                    <label htmlFor='name'>Testimonials</label>
                </div>
                <div className='form-floating'>
                    <input type='text' name='reviews' placeholder="Reviews" className='form-control' />
                    <label htmlFor='name'>Reviews</label>
                </div>
                <div className='form-floating'>
                    <input type='text' name='hourly_rate' placeholder="Rate" className='form-control' />
                    <label htmlFor='name'>Hourly Rate</label>
                </div>
            </form>
        </div>
    )
}

const Freelancer = () => {
    const [freelancers, setFreelancers] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    const [page, setPage] = React.useState(1)
    const [total_pages, setTotalPages] = React.useState(1)
    const [total_items, setTotalItems] = React.useState(0)
    const url_params = useParams()
    const langauge_pair = url_params.langauge_pair ? url_params.langauge_pair : 'eng_esl'
    const limit = url_params.limit ? url_params.limit : 10
    const offset = url_params.offset ? url_params.offset : 0
    const sort = url_params.sort ? url_params.sort : 'relevance'
    const order = url_params.order ? url_params.order : 'desc'
    const featured_member = url_params.featured_member ? url_params.featured_member : 'false'
    const is_member = url_params.is_member ? url_params.is_member : 'true'

    useEffect(() => {
        const getFreelancers = async () => {
            try {
                const response = await fetch(
                    `https://api.proz.com/v2/freelancer-matches?page=${page}&is_member=${is_member}&limit=${limit}&featured_member=${featured_member}&language_pair=${langauge_pair}`,
                    {
                        headers: {
                            "access-control-allow-origin": "*",
                            "Authorization": `Bearer f40bee2df5d8eeabd82449578150203dafc7e304`
                        },
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
    console.log(freelancers)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <div>
            {
                freelancers && freelancers['data'].length > 0 ? (
                    localStorage.setItem('active_sidebar', 'freelancer'),
                    <div>
                        <h1>Freelancers</h1>
                        <p>Page {page} of {total_pages}</p>
                        <p>Total items: {total_items}</p>
                        <table className='table border-separate border-spacing-y-5'>
                            <tbody>
                                {freelancers && freelancers['data'].map((freelancer, index) => (
                                    // console.log(freelancer),
                                    <tr key={index} className="hover:shadow">
                                        <td style={{ width: '70px' }}><img src={freelancer.freelancer.image_url} alt='ProZ.com' className='img-fluid w-[50px] h-[50px] rounded-3' /></td>
                                        <td>
                                            <div className='flex flex-col gap-2 showMoreTrigger'>
                                                <span className='fw-bold'>{freelancer.freelancer.site_name}</span>
                                                <span>{freelancer.freelancer.tagline}</span>
                                                <div className='showMoreBox flex-col gap-2 d-none ease-in duration-300'>
                                                    <span className="">
                                                        {freelancer.freelancer.skills.general_services.map((service, index) => (
                                                            index < 5 ? (
                                                                <span key={index} className="text-[12x]">{service.gen_service_name}, </span>
                                                            ) : null
                                                        ))}
                                                    </span>
                                                    <span className="d-flex align-items-center justify-content-start gap-1">
                                                        {freelancer.freelancer.skills.general_disciplines.map((discipline, index) => (
                                                            index < 5 ? (
                                                                <span key={index} className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">{discipline.disc_gen_name}</span>
                                                            ) : null
                                                        ))}
                                                    </span>
                                                    <span className="d-flex align-items-center justify-content-start gap-1">
                                                        {freelancer.freelancer.skills.language_pairs.map((language_pair, index) => (
                                                            index < 5 ? (
                                                                <span key={index} className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full">{language_pair.pair_name}</span>
                                                            ) : null
                                                        ))}
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td style={{ width: '100px' }}><a href={`/freelancer/${freelancer.freelancer.uuid}`}>View more</a></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
                        <button onClick={() => setPage(page + 1)} disabled={page === total_pages}>Next</button>
                    </div>
                ) : (
                    <div>
                        No Freelancers Found
                    </div>
                )
            }
        </div >
    )
}

export default Freelancer
