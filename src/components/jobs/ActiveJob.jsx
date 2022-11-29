import React from 'react'
import { ProgressBar } from 'react-bootstrap'

const ActiveJob = () => {
    return (
        <div className='col-sm-3 cursor-pointer' onClick={() => {window.location.href="#/dashboard/job/126745"}}>
            <div className='d-flex flex-col rounded-3 shadow p-2 mx-2 my-3 min-w-[300px]'>
                <span className='fw-bold'>Translate legal document</span>
                <span className='text-muted'>English to Spanish</span>
                <ProgressBar now={60} className="h-[2px] my-1" />
                <span>Client: <a href="void();" className='fw-bold'>John Doe</a></span>
            </div>
        </div>
    )
}

export default ActiveJob
