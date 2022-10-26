import React from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'

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
const SingleBusiness = () => {
    const [business, setBusiness] = React.useState({});

    let { business_id } = useParams()

    React.useEffect(() => {
        axios.get(`https://api.proz.com/v2/businesses/${business_id}`, {
            headers: {
                'Authorization': `Bearer e5d0cf93ab4ba99261aa9a02adeb30c3abfad5cf`
            }
        }).then(res => {
            setBusiness(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [business_id])

    return (
        <div>
            {business.business_name ? (
                <div>
                    <h3>{business.business_name}</h3>
                    <p>{business.business_link}</p>
                </div>
            ) : (
                <p>No business found</p>
            )}
        </div>
    )

}

export default SingleBusiness
