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
                                    <tr className='bg-white hover:shadow hover:h-[50px] align-items-center vertical-middle' key={blueboard.id}>
                                        <td className='text-[16px] fw-bold'>{blueboard.name}</td>
                                        <td>{blueboard.web_url}</td>
                                        <td>{blueboard.country}</td>
                                        <td><a href={`/business/${blueboard.business_id}`} className='nav-link'>View Business</a></td>
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
