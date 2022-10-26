import React from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'

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

    console.log(business)

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
