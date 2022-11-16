// MUI
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// REACT
import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
// CUSTOM SHIT
import ClearStrikeThrough from '../extra_ui_tools/ClearStrikeThrough'
import { prozLanguages } from '../Helpers';

export const FreelancerFilterForm = () => {
    const [source_language, setSourceLanguage] = React.useState('')
    const [target_language, setTargetLanguage] = React.useState('')

    const handleSourceLanguageChange = (event) => {
        setSourceLanguage(event.target.value)
    }

    const handleTargetLanguageChange = (event) => {
        setTargetLanguage(event.target.value)
    }

    console.log(prozLanguages)
    return (
        <div className=''>
            <div className='shadow rounded-2 my-2 p-2'>
                <ClearStrikeThrough striked_text="Category" />
                <div className='d-flex flex-wrap gap-2 mx-2 text-sm'>
                    <a href="?category=translation">Translators | <span className='text-muted'>35k</span></a>
                    <a href="?category=interpretation">Interpretors | <span className='text-muted'>21k</span></a>
                    <a href="?category=voice_acting">Voice Over | <span className='text-muted'>13.5k</span></a>
                    <a href="?category=localization">Localization | <span className='text-muted'>3k</span></a>
                    <a href="?category=transcription">Transcription | <span className='text-muted'>17k</span></a>
                    <a href="?category=subtitling">Subtitling | <span className='text-muted'>2.7k</span></a>
                    <a href="?category=dtp">DTP | <span className='text-muted'>1k</span></a>
                    <a href="?category=training">Training | <span className='text-muted'>19k</span></a>
                </div>
            </div>
            <div className='shadow rounded-2 my-2 p-2'>
                <ClearStrikeThrough striked_text="Language" />
                <div className='d-flex border-1 min-w-[50%]'>
                    <FormControl className="flex-fill">
                        <InputLabel id="sourceLanguageSelectLabel">From</InputLabel>
                        <Select native
                            labelId="sourceLanguageSelectLabel"
                            id="sourceLanguageSelect"
                            value={source_language}
                            label="From"
                            onChange={handleSourceLanguageChange}
                            className="border-none outline-none"
                        >
                        </Select>
                    </FormControl>
                    <FormControl className="flex-fill min-w-[50%]">
                        <InputLabel id="targetLanguageSelectLabel">To</InputLabel>
                        <Select native
                            labelId="targetLanguageSelectLabel"
                            id="targetLanguageSelect"
                            value={target_language}
                            label="To"
                            onChange={handleTargetLanguageChange}
                            className="border-none outline-none"
                        >

                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className='shadow rounded-2 my-2 p-2'>
                <ClearStrikeThrough striked_text="Expertise" />
                <div className='form-floating'>
                    <input type='text' name='skills' placeholder="Skills" className='form-control' />
                    <label htmlFor='name'>Skills</label>
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
                    <input type='text' name='languages' placeholder="Languages" className='form-control' />
                    <label htmlFor='name'>Languages</label>
                </div>
            </div>
            <div className='shadow rounded-2 my-2 p-2'>
                <ClearStrikeThrough striked_text="Credential and Software" />
                <div className='form-floating'>
                    <input type='text' name='certifications' placeholder="Certifications" className='form-control' />
                    <label htmlFor='name'>Certifications</label>
                </div>
                <div className='form-floating'>
                    <input type='text' name='testimonials' placeholder="Testimonials" className='form-control' />
                    <label htmlFor='name'>Testimonials</label>
                </div>
                <div className='form-floating'>
                    <input type='text' name='portfolio' placeholder="Portfolio" className='form-control' />
                    <label htmlFor='name'>Portfolio</label>
                </div>
                <div className='form-floating'>
                    <input type='text' name='reviews' placeholder="Reviews" className='form-control' />
                    <label htmlFor='name'>Reviews</label>
                </div>
            </div>
            <div className='shadow rounded-2 my-2 p-2'>
                <ClearStrikeThrough striked_text="Other" />
                <div className='form-floating'>
                    <input type='text' name='rate' placeholder="Rate" className='form-control' />
                    <label htmlFor='name'>Rate</label>
                </div>
                <div className='form-floating'>
                    <input type='text' name='hourly_rate' placeholder="Rate" className='form-control' />
                    <label htmlFor='name'>Hourly Rate</label>
                </div>
                <div className='form-floating'>
                    <input type='text' name='availability' placeholder="Availability" className='form-control' />
                    <label htmlFor='name'>Availability</label>
                </div>
            </div>
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
    const url_params = useSearchParams()

    let langauge_pair = url_params.langauge_pair ? url_params.langauge_pair : 'eng_esl'
    let limit = url_params.limit ? url_params.limit : 10
    let featured_member = url_params.featured_member ? url_params.featured_member : 'true'
    let is_member = url_params.is_member ? url_params.is_member : 'true'

    useEffect(() => {
        fetch(`${process.env.REACT_APP_PROZ_API_V2_URL}freelancer-matches?language_pair=${langauge_pair}&limit=${limit}&featured_member=${featured_member.current}&is_member=${is_member}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.REACT_APP_PROZ_OAUTH_TOKEN}`
            }
        }).then(response => response.json())
            .then(data => {
                setFreelancers(data['data'])
                setTotalPages(data.total_pages)
                setTotalItems(data.total_items)
                setLoading(false)
            }).catch(error => {
                setError(error)
                setLoading(false)
            })
    }, [langauge_pair,
        limit,
        featured_member,
        is_member])


    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error.message}</div>

    return (
        <div>
            {
                freelancers && freelancers.length > 0 ? (
                    localStorage.setItem('active_sidebar', 'freelancer'),
                    <div>
                        <h1>Freelancers</h1>
                        <p>Page {page} of {total_pages}</p>
                        <p>Total items: {total_items}</p>
                        <table className='table border-separate border-spacing-y-5'>
                            <tbody>
                                {freelancers && freelancers.map((freelancer, index) => (
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
