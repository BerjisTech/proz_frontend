import React from 'react'
import { BiTargetLock, BiUserPin } from 'react-icons/bi'
import { ClearStrikeThrough, Spacer } from '.'

const OldLandingHero = () => {
    return (
        <div>
            <div className="row m-0 p-0">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <Spacer spacing='[4, 0, 0, 0]' />
                    <ClearStrikeThrough striked_text={`WE ARE SO MUCH MORE THAN A FREELANCE SITE`} font_size="12px" text_color="#3A727F" />
                    <div className="text-4xl font-[800] text-center mt-5">
                        Online Community and Workplace<br />
                        for <span className="text-[#A1DDCB]">Language Professionals</span>
                    </div>
                    <Spacer spacing='[5, 0, 0, 0]' />
                    <div className="d-flex align-items-center justify-content-center">
                        <a href="//jobs" >
                            <span className="fw-bolder d-flex align-items-center justify-content-center w-auto bg-[#386E7A] text-white px-3 py-2 mx-2 rounded">
                                <BiTargetLock className="me-2" /> Find Work
                            </span>
                        </a>
                        <span className="inline-block mx-3"></span>
                        <a href="//transaltors" >
                            <span className="fw-bolder d-flex align-items-center justify-content-center w-auto bg-inherit text-[#386E7A] border-[#386E7A] border-2 px-3 py-2 mx-2 rounded">
                                <BiUserPin className="me-2" /> Hire A Pro
                            </span>
                        </a>
                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
            <Spacer spacing='[4, 0, 0, 0]' />
            <div className="row m-0 p-0">
                <div className="col-md-2"></div>
                <div className="col-md-8">
                    <img src='/images/proz_services_banner.png' alt="ProZ Services Box" />
                </div>
                <div className="col-md-2"></div>
            </div>
        </div>
    )
}

export default OldLandingHero
