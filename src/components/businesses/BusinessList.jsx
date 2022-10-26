import axios from 'axios'
import React from 'react'

const BusinessList = () => {
  const [businesses, setBusinesses] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://api.proz.com/v2/businesses?ids[]=1234', {
      headers: {
        'Authorization': `Bearer f40bee2df5d8eeabd82449578150203dafc7e304`
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
    <div>
      <h1>Business List</h1>
      {
        businesses['businesses'].length > 0 ? (
          businesses['businesses'].map(business => {
            return (
              <div key={business.business_id}>
                <h2>{business.business_name}</h2>
                <p>{business.business_link}</p>
              </div>
            )
          })
        ) : (
          <p>No businesses found</p>
        )
      }
    </div>
  )
}

export default BusinessList;
