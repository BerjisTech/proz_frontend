import React from 'react'
import 'react-icons/fi'
import 'react-icons/gi'
import 'react-icons/bi'
import { JobsList } from './JobDescription';

const Tranlsate = () => {

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

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error</div>
  }

  return (
    <div>
      <h1>Tranlsate</h1>
      <div className="jobs">
        {jobs.map((job) => (
          <JobsList key={job.id} job={job} />
        ))}
      </div>
    </div >
  );
};

export default Tranlsate;
