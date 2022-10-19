import { CCarousel, CCarouselItem } from '@coreui/react'
import React from 'react'
const demo_reviews = [
    {
        id: 1,
        name: 'Emin Ari',
        title: 'Freelancer',
        review: 'I have found almost all of my clients through ProZ.com. Benefits of full membership in this site is worth every penny I paid.',
        image: '/images/screens_dashboard.png',
        location: 'Istanbul, Turkey'
    },
    {
        id: 2,
        name: 'Emin Ari',
        title: 'Freelancer',
        review: 'I have found almost all of my clients through ProZ.com. Benefits of full membership in this site is worth every penny I paid.',
        image: '/images/screens_dashboard.png',
        location: 'Istanbul, Turkey'
    },
    {
        id: 3,
        name: 'Emin Ari',
        title: 'Freelancer',
        review: 'I have found almost all of my clients through ProZ.com. Benefits of full membership in this site is worth every penny I paid.',
        image: '/images/screens_dashboard.png',
        location: 'Istanbul, Turkey'
    },
    {
        id: 4,
        name: 'Emin Ari',
        title: 'Freelancer',
        review: 'I have found almost all of my clients through ProZ.com. Benefits of full membership in this site is worth every penny I paid.',
        image: '/images/screens_dashboard.png',
        location: 'Istanbul, Turkey'
    },
    {
        id: 5,
        name: 'Emin Ari',
        title: 'Freelancer',
        review: 'I have found almost all of my clients through ProZ.com. Benefits of full membership in this site is worth every penny I paid.',
        image: '/images/screens_dashboard.png',
        location: 'Istanbul, Turkey'
    },
    {
        id: 6,
        name: 'Emin Ari',
        title: 'Freelancer',
        review: 'I have found almost all of my clients through ProZ.com. Benefits of full membership in this site is worth every penny I paid.',
        image: '/images/screens_dashboard.png',
        location: 'Istanbul, Turkey'
    }
]

const ReviewsCarousel = ({ reviews = demo_reviews }) => {
    return (
        <CCarousel
            indicators
            activeIndex={0}
            animate
            interval={5000}
            className='pb-[50px]'
        >
            {reviews.map(review => (
                <CCarouselItem key={review.id} className="pt-2 pb-3 px-2">
                    <div className="d-flex flex-column align-items-start justify-content-center rounded-5 shadow p-3">
                        <div className="text-white text-[16px]">
                            {review.review}
                        </div>
                        <div className="d-flex align-items-center justify-content-start mt-4">
                            <img src={review.image} alt="logo" className='w-[100px] rounded-full' />
                            <div className="d-flex flex-column align-items-center justify-content-center text-white ms-2">
                                {review.name}<br />
                                {review.title} <br />
                                {review.location}
                            </div>
                        </div>
                    </div>
                </CCarouselItem>
            ))}
        </CCarousel>
    )
}

export default ReviewsCarousel
