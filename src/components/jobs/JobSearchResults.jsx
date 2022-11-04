import React, { useEffect } from 'react'
import 'react-icons/fi'
import { GoPrimitiveDot } from 'react-icons/go'
import { BiDotsVertical } from 'react-icons/bi'
import JobSearch from './JobSearch'

const JobSearchResults = () => {
    const [jobs, setJobs] = React.useState([])
    const fetchJobs = async () => {
        return fetch('https://api.proz.com/v2/job-postings', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.REACT_PROZ_OAUTH_TOKEN}`
            },
        }).then(
            (response) => response.json()
        ).then((data) => {
            setJobs(data['data'])
        })
    }

    useEffect(() => {
        fetchJobs()
    }, [])

    return (
        <div className="p-5">
            <JobSearch />
            <div className="d-flex align-items-center justify-content-between">
                <span className="fw-bold fs-3 my-4">{jobs.length} jobs found | sorted by recent</span>
                <BiDotsVertical className="fs-2" />
            </div>
            <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center justify-content-start">
                    <span className="text-sm d-flex align-items-center rounded py-1 pe-3 m-1">
                        <GoPrimitiveDot className="text-blue-800" />
                        Translator
                    </span>
                    <span className="text-sm d-flex align-items-center rounded py-1 pe-3 m-1">
                        <GoPrimitiveDot className="text-blue-800" />
                        ₹50Cr - ₹150Cr
                    </span>
                    <span className="text-sm d-flex align-items-center rounded py-1 pe-3 m-1">
                        <GoPrimitiveDot className="text-blue-800" />
                        Mumbai, Bengaluru,Pune
                    </span>
                </div>
                <span className="text-blue-800 cursor-pointer">See all</span>
            </div>
            <div className="shadow-lg shadow-indigo-500/40 p-3 rounded-3 pb-5">
                <span className="fw-bold text-2xl"> Applications</span>
                {jobs.length === 0 ? (
                    <div className="text-sm pt-3">No jobs found</div>
                ) : (jobs.map((job, index) => {
                    return (
                        <div id={index} className="d-flex align-items-center justify-content-start hover:shadow-xl p-3 rounded-5">
                            {/* <img src="https://m.media-amazon.com/images/M/MV5BMWFmYmRiYzMtMTQ4YS00NjA5LTliYTgtMmM3OTc4OGY3MTFkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg" className="rounded-circle" width="50" height="50" alt="avatar" /> */}
                            <div className='d-flex flex-column flex-fill ms-3'>
                                <span className="fw-bold">{job.summary}</span>
                                <span className="text-sm text-gray-600">Translation</span>
                                <span>{job.description}</span>
                            </div>
                            <div className='d-flex flex-column ms-3'>
                                <span className="text-blue-600 text-sm font-medium">Learn more »</span>
                            </div>
                        </div>
                    )
                }))}
            </div>
        </div>
    )
}


export default JobSearchResults
