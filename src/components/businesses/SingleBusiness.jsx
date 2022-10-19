import React from 'react'
import axios from 'axios';

const SingleBusiness = ({business_id = 1}) => {
    const [business, setBusiness] = React.useState({});

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

    console.log(business)

    return (
        <div>
            <h1>Single Business</h1>
            <div>
                <h3>{business.business_name}</h3>
                <p>{business.business_link}</p>
            </div>
        </div>
    )

}

export default SingleBusiness
