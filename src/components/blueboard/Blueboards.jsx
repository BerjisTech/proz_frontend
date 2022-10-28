import axios from 'axios';
import React from 'react'

const Blueboards = () => {
    const [blueboards, setBlueboards] = React.useState([]);

    React.useEffect(() => {
        axios.get('https://api.proz.com/v2/blueboards', {
            headers: {
                'Authorization': `Bearer f40bee2df5d8eeabd82449578150203dafc7e304`
            }
        }).then(res => {
            setBlueboards(res.data);
        }).catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <div>
            {
                blueboards['data'] && blueboards['data'].length > 0 ? (

                    <table className='table table-responsive'>
                        <tbody>
                            {blueboards['data'].map(blueboard => {
                                return (
                                    // TR with feed
                                    <tr key={blueboard.id}>
                                        <td>
                                            <a href={`/business/${blueboard.business_id}`} className='text-decoration-none d-flex align-items-center justify-content-start mb-3'>
                                                <img src='/images/logos/proz.png' alt={blueboard.name} className='border-1 w-[50px] h-[50px] rounded-full img-fluid' />
                                                <div className='ms-3'>
                                                    <p className='fw-bold'>{blueboard.name}</p>
                                                    <div className='d-flex flex-column align-items-start justify-content-start'>
                                                        <span className="fs-6">{blueboard.web_url}</span>
                                                        <span className='text-[12px]'>{blueboard.country}</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                ) : (
                    <p className='w-full text-center'>No blueboards found</p>
                )
            }
        </div>
    )
}

export default Blueboards
