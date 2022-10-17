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
        name: 'John Doe',
        title: 'CEO of Company',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: 'https://picsum.photos/200/300',
        location: 'Istanbul, Turkey'
    },
    {
        id: 3,
        name: 'John Doe',
        title: 'CEO of Company',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: 'https://picsum.photos/200/300',
        location: 'Istanbul, Turkey'
    },
    {
        id: 4,
        name: 'John Doe',
        title: 'CEO of Company',
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image: 'https://picsum.photos/200/300',
        location: 'Istanbul, Turkey'
    }
]

const ReviewsCarousel = () => {
    return (
        <CCarousel
            indicators
            activeIndex={0}
            animate
            interval={5000}
            className='rounded-5 pb-5 py-2'
        >
            {reviews.map(review => (
                <CCarouselItem key={review.id}>
                    <div className="d-flex flex-column align-items-start justify-content-center">
                        <div className="text-white text-[16px]">
                            {review.review}
                        </div>
                        <div className="d-flex align-items-center justify-content-start mt-4">
                            <img src={review.image} alt="logo" className='w-[100px]' />
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
