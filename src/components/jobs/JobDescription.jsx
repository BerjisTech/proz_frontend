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

const JobDescription = ({ }) => {

    return (
        <div>
            Away
        </div>
    )
}

export default JobDescription
