import React from 'react'
import { BiGlasses, BiLogIn, BiRocket } from 'react-icons/bi'
import { FiKey, FiSave } from 'react-icons/fi'
import { GiCutDiamond, GiHelp } from 'react-icons/gi'
const LandingPageNav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-[#F4F6FA] navbar-light sticky">
            <div className="container-fluid d-flex flex-row align-items-center justify-between">
                <a className="navbar-brand" href="/">
                    <img src="https://pbs.twimg.com/profile_images/1151905246073053189/cZLu6vip_400x400.jpg" width="30" alt="logo" className='bg-white shadow rounded-full mx-2 fs-5' />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse flex-grow flex justify-content-center align-items-center" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle d-flex align-items-center justify-content-center" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <BiGlasses />
                                <span className="ms-2">Start Translating</span>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/hire/freelancers">Hire Freelancers</a></li>
                                <li><a className="dropdown-item" href="/hire/agencies">Hire Agencies</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/jobs/translate">Translating Jobs</a></li>
                                <li><a className="dropdown-item" href="/jobs/interprete">Interpretation Jobs</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/training">
                                <div className="d-flex align-items-center justify-content-center">
                                    <FiSave />
                                    <span className="ms-2">Training</span>
                                </div>
                            </a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle d-flex align-items-center justify-content-center" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <BiRocket />
                                <span className="ms-2">ProZ Services</span>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/prozpay">ProZPay&trade;</a></li>
                                <li><a className="dropdown-item" href="/directory">ProZ Directory</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/collaborate">Collaborative Translation</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/about-us">
                                <div className="d-flex align-items-center justify-content-center">
                                    <GiCutDiamond />
                                    <span className="ms-2">About</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-flex align-items-center justify-content-center" href="/support">
                                <GiHelp />
                                <span className="ms-2">Help</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    {window.location.href.includes('?new_user')
                        ? <span className="d-flex">
                            <a className="bg-[#ffffff] shadow-md rounded-3 mx-2 p-2 fs-5 d-flex align-items-center justify-content-center hover:shadow-green-900 hover:shadow-inner" href="/signin">
                                <BiLogIn className="me-2" />
                                Log In
                            </a>
                            <a className="shadow rounded-3 bg-[#186362] text-[#ffffff] mx-2 p-2 fs-5 d-flex align-items-center justify-content-center hover:text-[#186362] hover:bg-[#ffffff]" href="/signup">
                                <FiKey className="me-2" />
                                Get Started
                            </a>
                        </span>
                        : <span className="d-flex">
                            <ul>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle bg-white shadow rounded-full mx-2 p-2 fs-5 text-green-400 d-flex align-items-center justify-content-center" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="ms-2">En</span>
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item d-flex align-items-center justify-content-start" href="/prozpay">
                                            <img src="/images/flags/ke.svg" alt="flag" className="me-2 h-[10px]" />
                                            <span className="text-[12px]">Kiswahili (Sanifu)</span>
                                        </a></li>
                                        <li><a className="dropdown-item d-flex align-items-center justify-content-start" href="/prozpay">
                                            <img src="/images/flags/tz.svg" alt="flag" className="me-2 h-[10px]" />
                                            <span className="text-[12px]">Kiswahili (Mufti)</span>
                                        </a></li>
                                        <li><a className="dropdown-item d-flex align-items-center justify-content-start" href="/prozpay">
                                            <img src="/images/flags/gb.svg" alt="flag" className="me-2 h-[10px]" />
                                            <span className="text-[12px]">English (Standard)</span>
                                        </a></li>
                                        <li><a className="dropdown-item d-flex align-items-center justify-content-start" href="/prozpay">
                                            <img src="/images/flags/us.svg" alt="flag" className="me-2 h-[10px]" />
                                            <span className="text-[12px]">English (Simplified)</span>
                                        </a></li>
                                        <li><a className="dropdown-item d-flex align-items-center justify-content-start" href="/prozpay">
                                            <img src="/images/flags/ru.svg" alt="flag" className="me-2 h-[10px]" />
                                            <span className="text-[12px]">Русский</span>
                                        </a></li>
                                        <li><a className="dropdown-item d-flex align-items-center justify-content-start" href="/prozpay">
                                            <img src="/images/flags/cn.svg" alt="flag" className="me-2 h-[10px]" />
                                            <span className="text-[12px]">Chinese (Standard)</span>
                                        </a></li>
                                        <li><a className="dropdown-item d-flex align-items-center justify-content-start" href="/prozpay">
                                            <img src="/images/flags/tw.svg" alt="flag" className="me-2 h-[10px]" />
                                            <span className="text-[12px]">Chinese (Simplified)</span>
                                        </a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item text-[14px]" href="/collaborate">Pick another alnguage</a></li>
                                    </ul>
                                </li>
                            </ul>

                            <a className="text-green-800 bg-white shadow rounded-full mx-2 p-2 fs-5 d-flex align-items-center justify-content-center" href="/dashboard/*">
                                <FiKey className='me-2' /> Account
                            </a>
                        </span>
                    }

                </div>
            </div>
        </nav>
    )
}

export default LandingPageNav
