import React from 'react'
import { ReviewsCarousel } from "./ReviewsCarousel";

const Signup = () => {
    return (
        <div className='row'>
            <div className='col-md-3 h-screen py-5'>
                <div className='rounded-5 bg-[#2E6969] h-full d-flex flex-column align-items-start justify-content-between py-4 px-[30px]'>
                    <img src="/images/logos/logo.png" alt="logo" className='w-30' />
                    <span className="text-white text-[50px]">Start Translating With Us</span>
                    <span className="text-white text-[25px]">Connect with world class traslators from across the globe and get context oriented translations from native speakers</span>
                    <div className='rounded-5 shadow-lg w-full p-3'>
                        <ReviewsCarousel />
                    </div>
                </div>
            </div>
            <div className='col-md-8'></div>
        </div >
    )
}

export default Signup
