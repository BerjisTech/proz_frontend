import axios from 'axios'
import React from 'react'

// Business data block
// {
//     business_id: 100
//     business_link: "https://www.proz.com/business/100"
//     business_membership_expiration_date: "2023-07-05T23:59:59+00:00"
//     business_membership_package: "standard"
//     business_name: "Language & Culture Worldwide"
//     employee_is_admin: null
//     employee_title: null
//     is_employee: false
//     jobs_posted_12_months: 5
//     lwa_avg_five_year: 5
//     lwa_num_entries_five_year: 3
//     self_link: "https://api.proz.com/v2/businesses/100"
// }

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
        businesses['businesses'] && businesses['businesses'].length > 0 ? (
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
