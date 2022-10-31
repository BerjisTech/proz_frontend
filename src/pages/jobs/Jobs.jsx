import React from 'react'
import { useParams } from 'react-router-dom'
import Interprete from '../../components/jobs/Interprete'
import Tranlsate from '../../components/jobs/Tranlsate'

const Jobs = () => {
    const url_params = useParams()
    let job_type = url_params.job_type
    return (
        <div>
            {job_type === 'interprete' ? <Interprete /> : <Tranlsate />}
        </div>
    )
}

export default Jobs
