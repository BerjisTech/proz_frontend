import React from 'react'
import { ReviewsCarousel, SignupForm } from "../../components";

const Signup = () => {
    return (
        <div className='row'>
            <div className='col-md-3 h-screen py-5'>
                <div className='rounded-5 bg-[#2E6969] h-full d-flex flex-column align-items-start justify-content-between py-4 px-[30px]'>
                    <img src="/images/logos/logo.png" alt="logo" className='w-30' />
                    <span className="text-white text-[50px]">Start Translating With Us</span>
                    <span className="text-white text-[25px]">Connect with world class traslators from across the globe and get context oriented translations from native speakers</span>
                    <div className='w-full p-0 m-0'>
                        <ReviewsCarousel />
                    </div>
                </div>
            </div>
            <div className='col-md-9 py-5'>
                <div className="py-4 px-[30px]">
                    <SignupForm />
                </div>
            </div>
        </div >
    )
}

export default Signup
