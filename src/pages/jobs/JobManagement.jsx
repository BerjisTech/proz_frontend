import React from 'react'
import ActiveJob from '../../components/jobs/ActiveJob'
import PreviousJobs from '../../components/jobs/PreviousJobs'

const JobManagement = () => {
    return (
        <div className='m-2'>
            <div className=''>
                <div className='row'>
                    <div className='col-sm-12'>
                        <span>My Active Jobs</span>
                    </div>
                </div>
                <div className='row'>
                    <ActiveJob />
                    <ActiveJob />
                    <ActiveJob />
                    <ActiveJob />
                    <div className='col-sm-3 px-3'>
                        <a href="/dashboard/jobs/active">View All Active Jobs</a>
                    </div>
                </div>
            </div>
            <PreviousJobs />
        </div>
    )
}

export default JobManagement
