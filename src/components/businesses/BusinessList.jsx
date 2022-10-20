import axios from 'axios'
import React from 'react'

const BusinessList = () => {
  const [businesses, setBusinesses] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://api.proz.com/v2/businesses?ids[]=', {
      headers: {
        'Authorization': `Bearer f40bee2df5d8eeabd82449578150203dafc7e304`
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
