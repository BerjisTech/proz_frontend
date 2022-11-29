import React from 'react'
import { Rating } from '@mui/material'

export const ShortJobDescription = ({ is_done, rating, review }) => {
    return (
        <div className='d-flex align-items-start justify-content-start flex-col gap-2 w-full border-bottom-1 hover:shadow-lg p-3 cursor-pointer'>
            <div className='d-flex align-items-center justify-content-start gap-1'>
                <span className='fw-bold'>Translate Legal Document From Korean to Cantonese</span>
            </div>
            <div className='d-flex align-items-start justify-content-start gap-1 flex-col'>
                <span className='text-muted text-xs'>Nov 9<sup>th</sup>, 2022</span>
                {is_done === true ?
                    <span className='d-flex align-items-start justify-content-start flex-col'>
                        <Rating value={rating ? rating : 0} precision={0.5} />
                        <span className='text-muted'>{review ? review : null}</span>
                    </span>
                    : <span className='text-muted'>In Progress</span>}

            </div>
        </div>
    )
}

export const LongJobDescription = (is_done, rating, review) => {
    return (
        <div className='d-flex align-items-start justify-content-start flex-col gap-2'>
            <div className='d-flex align-items-center justify-content-start gap-1'>
                <span className='fw-bold text-[30px]'>English to Spanish</span>
            </div>
            <div className='d-flex align-items-center justify-content-start gap-1'>
                <span className='text-muted'>Posted 1 day ago</span>
            </div>
            <div className='d-flex align-items-center justify-content-start gap-1'>
                <span className='text-muted'>Budget: $100</span>
            </div>
            <div className='d-flex align-items-center justify-content-start gap-1'>
                <span className='text-muted'>Job Type: Translation</span>
            </div>
            <div className='d-flex align-items-center justify-content-start gap-1'>
                <span className='text-muted'>Job ID: 123456789</span>
            </div>
            <div className='d-flex align-items-center justify-content-start gap-1'>
                <span className='text-muted'>Category: Legal</span>
            </div>
            <div className='d-flex align-items-center justify-content-start gap-1'>
                <span className='text-muted'>Subcategory: Legal</span>
            </div>
            <div className='d-flex align-items-center justify-content-start gap-1'>
                <span className='text-muted'>Job Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nunc aliquet nisl, vitae aliquet nisl nisl sit amet nisl. Sed euismod, nunc vel tincidunt lacinia, nisl nunc aliquet nisl, vitae aliquet nisl nisl sit amet nisl.</span>
            </div>
        </div>
    )
}

export const JobsList = ({ job }) => {
    return (
        <>
            <div className="job d-flex gap-2 bg-[#F6F9F8] my-3 p-3 hover:shadow-lg" key={job.id}>
                <div className='flex-fill h-full border-end-1'>
                    <div className='d-flex flex-column'>
                        <span className='fw-bold'>{job.summary ? job.summary : 'Job Title Here'}</span>
                        <div className='text-[13px] my-2'>
                            <span className='fw-bold me-1'>Company name here</span>
                            <span>Location here</span>
                        </div>
                        <p>
                            {job.description ? `${job.description.substring(0, 300)} ...` : 'Lorem Ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'}
                        </p>
                    </div>
                </div>
                <div className='h-[100] min-w-[130px]'>
                    <div className="gap-2 h-full d-flex flex-col justify-content-between align-items-end">
                        <div className='w-full d-flex align-items-center justify-content-between'>
                            <span className='text-[10px] text-gray-600'>Posted 12 days ago</span>
                            {/* <GiCancel className='text-[20px] text-gray-600' /> */}
                        </div>
                        <div className='w-full d-flex align-items-center justify-content-between'>
                            <span className='text-[12px] text-gray-600'>19 views</span>
                            <a href={`/job/${job.id}`} className='text-[12px] fw-bold px-2 py-1 rounded-2 bg-[#336666] text-white'>View</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


const JobDescription = ({ data }) => {

    return (
        <div className='d-flex flex-wrap gap-2'>
            <span className='fw-bold'>{data.title}</span>
            <span>{data.language}</span>
            <span>{data.client}</span>
            <span>{data.progress}</span>
            <span>{data.rating}</span>
            <span>{data.paid}</span>
            <span>{data.complete}</span>
            <span>{data.cancelled}</span>
            <span>{data.price}</span>
        </div>
    )
}

export default JobDescription
