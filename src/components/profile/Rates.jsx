import React from 'react'

const Rates = ({ languages, service, price }) => {
    return (
        <div className='d-flex align-items-start justify-content-start flex-col rounded-2 border-1 p-2 flex-fill'>
            <span className='text-sm'>{languages}</span>
            <span className='fw-bold'>{service}</span>
            <span className='text-sm'>${price}</span>
        </div>
    )
}

export default Rates
