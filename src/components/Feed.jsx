import React from 'react'

const Feed = ({ feed_icon, feed_title, feed_description, feed_extra_text, feed_link }) => {
    return (
        <a href={feed_link} className='text-decoration-none d-flex align-items-center justify-content-start mb-3'>
            <img src={feed_icon} alt={feed_title} className='border-1 w-[50px] h-[50px] rounded-full img-fluid' />
            <div className='ms-3'>
                <p className='fw-bold'>{feed_title}</p>
                <div className='d-flex flex-column align-items-start justify-content-start'>
                    <span className="fs-6">{feed_description}</span>
                    <span>{feed_extra_text}</span>
                </div>
            </div>
        </a>
    )
}

export default Feed
