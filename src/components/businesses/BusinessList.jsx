import axios from 'axios'
import React from 'react'

export const BusinessCard = ({ businesS_id }) => {
  return (
    <div className="card w-full">
      <div className="card-body">
        <div className='d-flex gap-3 wrap'>
          <img src={`https://picsum.photos/500/300?random=${businesS_id}`} alt="business logo" className='h-[100px] w-[100px] rounded-2' />
          <div>
            <h5 className="card-title">Random Business Name</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href={`/hire/agency/${businesS_id}`} className="card-link">Hire</a>
            <a href={`/business/${businesS_id}`} className="card-link">View Business Profile</a>
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

const BusinessList = () => {
  const [businesses, setBusinesses] = React.useState([]);
  const draftBusinesses = [
    {
      id: 1
    },
    {
      id: 2
    },
    {
      id: 3
    },
    {
      id: 4
    },
    {
      id: 5
    },
    {
      id: 6
    },
    {
      id: 7
    },
    {
      id: 8
    },
    {
      id: 9
    },
    {
      id: 10
    },
  ]

  React.useEffect(() => {
    axios.get('https://api.proz.com/v2/businesses?ids[]=1234', {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_PROZ_OAUTH_TOKEN}`
      }
    })
      .then(res => {
        setBusinesses(res.data[0]);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])
  console.log(businesses)

  return (
    <div className='d-flex flex-col gap-3 mx-3 mt-3 mb-5'>
      <div className='d-flex flex-wrap gap-3'>
        {draftBusinesses.map(business => (
          <BusinessCard key={business.id} businesS_id={business.id} />
        ))}
      </div>
    </div>
  )
}

export default BusinessList;
