import axios from 'axios';
import React from 'react'
import { Buffer } from 'buffer'

const BusinessList = () => {
  const [businesses, setBusinesses] = React.useState([]);


  React.useEffect(() => {
    axios.get('https://api.proz.com/v2/businesses?ids[]=', {
      headers: {
        'Authorization': `Bearer e5d0cf93ab4ba99261aa9a02adeb30c3abfad5cf`
      }
    })
      .then(res => {
        setBusinesses(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div>
      <h1>Business List</h1>
      {businesses.map(business => (
        <div key={business.id}>
          <h3>{business.business_name}</h3>
          <p>{business.business_link}</p>
        </div>
      ))}
    </div>
  )
}

export default BusinessList;
