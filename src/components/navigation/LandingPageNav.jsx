import React from 'react'
import { BiGlasses, BiRocket } from 'react-icons/bi'
import { FiBookOpen } from 'react-icons/fi'
import { GiCutDiamond, GiHelp } from 'react-icons/gi'
import SignupSigninLinks from './SignupSigninLinks'
const LandingPageNav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-[#F4F6FA] navbar-light sticky  z-[100]">
            <div className="container-fluid d-flex flex-row align-items-center justify-between">
                <a className="navbar-brand" href="/">
                    <img src="https://pbs.twimg.com/profile_images/1151905246073053189/cZLu6vip_400x400.jpg" width="30" alt="logo" className='bg-white shadow rounded-full mx-2 fs-5' />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse flex-grow flex justify-content-center align-items-center" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle d-flex align-items-center justify-content-center" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <BiGlasses />
                                <span className="ms-2">Start Translating</span>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#/hire/freelancers">Hire Freelancers</a></li>
                                <li><a className="dropdown-item" href="#/hire/agencies">Hire Agencies</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#/jobs/translate">Translating Jobs</a></li>
                                <li><a className="dropdown-item" href="#/jobs/interprete">Interpretation Jobs</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle d-flex align-items-center justify-content-center" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <BiRocket />
                                <span className="ms-2">ProZ Services</span>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#/prozpay">ProZPay&trade;</a></li>
                                <li><a className="dropdown-item" href="#/directory">ProZ Directory</a></li>
                                <li><a className="dropdown-item" href="#/wiwo">#Wiwo</a></li>
                                <li><a className="dropdown-item" href="#/blueboards">Blueboards</a></li>
                                <li><a className="dropdown-item" href="#/search">Term Search</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#/collaborate">Collaborative Translation</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle d-flex align-items-center justify-content-center" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <FiBookOpen />
                                <span className="ms-2">ProZ Educate&trade;</span>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#/courses">Courses</a></li>
                                <li><a className="dropdown-item" href="#/training">Training</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#/collaborate">Collaborative Translation</a></li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#/about-us">
                                <div className="d-flex align-items-center justify-content-center">
                                    <GiCutDiamond />
                                    <span className="ms-2">About</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-flex align-items-center justify-content-center" href="#/support">
                                <GiHelp />
                                <span className="ms-2">Help</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <SignupSigninLinks />
                </div>
            </div>
        </nav>
    )
}

export default LandingPageNav
