import React from 'react'
import { Rating } from '@mui/material'
import { JobsList } from '../jobs/JobDescription'

// Business data block
// {
//     business_id: 100
//     business_link: "https://www.proz.com/business/100"
//     business_membership_expiration_date: "2023-07-05T23:59:59+00:00"
//     business_membership_package: "standard"
//     business_name: "Language & Culture Worldwide"
//     employee_is_admin: null
//     employee_title: null
//     is_employee: false
//     jobs_posted_12_months: 5
//     lwa_avg_five_year: 5
//     lwa_num_entries_five_year: 3
//     self_link: "https://api.proz.com/v2/businesses/100"
// }

const SingleBusiness = () => {
    const [jobs, setJobs] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(false)

    React.useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('https://api.proz.com/v2/job-postings', {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${process.env.REACT_APP_PROZ_OAUTH_TOKEN}`
                    }
                })
                const data = await response.json()
                setJobs(data['data'])
                setLoading(false)
            } catch (error) {
                setError(true)
                setLoading(false)
            }

        }
        fetchJobs()
    }, [])

    return (
        <div className='m-3'>
            <div className="d-flex align-items-center justify-content-start gap-3">
                <img src="https://thumbs.dreamstime.com/b/something-like-bx-logo-letter-separated-black-zigzag-line-bx-logo-letter-separated-black-zigzag-line-114234401.jpg" alt="ProZ.com" className="shadow img-fluid bg-white rounded-3 h-[100px] w-[100px]" />
                <span className='fs-3'>BusinessX</span>
            </div>
            <div className="d-flex align-items-start justify-content-start md:flex-row xs:flex-col my-3 gap-3 min-h-[100px]">
                <div className="d-flex align-items-start justify-content-start flex-col flex-fill shadow rounded-2 p-3 gap-2 h-[100%] bg-white">
                    <span className='fw-bold'>About BusinessX</span>
                    <span>
                        BusinessX was founded in November 2002. The business was born out as a translation service provider and, in order to meet our clients’ demands, gradually expanded to localization, transcription services, voice over, subtitling, copy writing,  and DTP.

                        Many clients only use the BusinessX translation module, but increasingly clients seek to benefit from 883 integrating our services into the overall package.

                        We operate from London, UK and Chisinau, Moldova with representations in Berlin, Paris, Milan and Madrid. Right from the start we have welcomed large and small clients, from corporations to one-man consultancies.
                    </span>
                </div>
                <div className="d-flex align-items-start justify-content-start flex-col gap-2 h-[100%] flex-fill flex-wrap w-full">
                    <div className="d-flex align-items-start justify-content-start flex-col gap-2 shadow rounded-2 h-full p-3 w-full bg-white">
                        <a href="https://www.thiswebsite.com" className='fw-bold text-blue-800'>https://www.thiswebsite.com</a>
                        <span className='fw-bold'>Medical</span>
                        <span className='fw-bold'>Scottsdale, US</span>
                    </div>
                    <div className="d-flex align-items-start justify-content-start gap-2 flex-wrap flex-fill w-full">
                        <div className="d-flex align-items-center justify-content-start flex-col flex-fill gap-2 shadow rounded-2 p-3 bg-white">
                            <span className='text-sm fw-bold'>Done Jobs</span>
                            <span>10</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-start flex-col flex-fill gap-2 shadow rounded-2 p-3 bg-white">
                            <span className='text-sm fw-bold'>Hired Talent</span>
                            <span>5</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex align-items-start justify-content-start flex-wrap gap-3 shadow rounded-3 p-3 bg-white">
                <div className='d-flex align-items-start justify-content-start flex-fill flex-col'>
                    <span className='d-flex align-items-center justify-content-center'>
                        <span>4.5</span>
                        <Rating value={4.5} precision={0.5} />
                        <span>(1)</span>
                    </span>
                    <span>CLEAR EXPECTATIONS AND SCOPE</span>
                </div>
                <div>
                    <a className='text-[#ffffff] bg-[#186362] btn' href="https://www.proz.com/business/100">View All Reviews</a>
                </div>
            </div>
            <div className='my-3'>
                <span className='fw-bold fs-4'>Active Jobs By BusinessX</span>
                {loading && <span>Loading...</span>}
                {error && <span>Error</span>}
                {jobs.map((job) => (
                    <JobsList key={job.id} job={job} />
                ))}
            </div>
        </div>
    )

}

export default SingleBusiness
