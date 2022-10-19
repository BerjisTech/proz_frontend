import axios from 'axios';
import React from 'react'

const BusinessList = () => {
  // const [businesses, setBusinesses] = React.useState([]);
  const [oauth_token, setOauthToken] = React.useState('');

  React.useEffect(() => {
    axios.post('https://api.proz.com/v2/oauth/token', {
      headers: {
        'f45664cfa9e1a2b6a8e74f731b954fff13624fce': '42bf68b259e6ca758be3663db01d22ab482020c6'
      },
      method: 'POST',
      data: {
        'grant_type': 'client_credentials'
      }
    }).then((data) => {
      if (data.status === 200) {
        return data.json()
      }
      throw new Error('Something went wrong on api server!');
    }).then((data) => {
      setOauthToken(data.access_token)
    })
  }, [])
  console.log(oauth_token)

  // React.useEffect(() => {
  //   axios.get('https://api.proz.com/api/v1/businesses', {
  //     mode: 'no-cors',
  //     headers: {
  //       'Authorization': `Bearer ${oauth_token}`
  //     }
  //   })
  //     .then(res => {
  //       setBusinesses(res.data);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }, [oauth_token]);

  return (
    <div>
      <h1>Business List</h1>
      {/* {businesses.map(business => (
        <div key={business.id}>
          <h3>{business.name}</h3>
          <p>{business.description}</p>
        </div>
      ))} */}
    </div>
  )
}

export default BusinessList;
