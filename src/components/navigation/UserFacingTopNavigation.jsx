import React from 'react'
import { BiGlasses, BiRocket } from 'react-icons/bi'
import { FiBookOpen } from 'react-icons/fi'
import { GiCutDiamond, GiHelp } from 'react-icons/gi'
import HeaderSearch from '../general_ui_components/HeaderSearch'

const UserFacingTopNavigation = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky w-full">
            <div className="d-flex align-items-center justify-content-center w-full py-2 shadow">
                <img src='/images/logos/logo.png' alt="logo" className="w-20 ms-3" />
                <HeaderSearch placeholder="What are you looking for?"/>
                <ul className="navbar-nav mb-2 mb-lg-0 flex-fill justify-content-end me-3">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle d-flex align-items-center justify-content-center" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <BiGlasses />
                            <span className="ms-2">Terminology</span>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li className='p-2 fw-bold'>Kudoz Help Netwrok</li>
                            <li><a className="dropdown-item" href="/hire/freelancers">Hire Freelancers</a></li>
                            <li><a className="dropdown-item" href="/hire/agencies">Hire Agencies</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li className='p-2 fw-bold'>Other</li>
                            <li><a className="dropdown-item" href="/jobs/translate">Translating Jobs</a></li>
                            <li><a className="dropdown-item" href="/jobs/interprete">Interpretation Jobs</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li className='p-2 fw-bold'>Learn More About</li>
                        </ul>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle d-flex align-items-center justify-content-center" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <BiRocket />
                            <span className="ms-2">ProZ Services</span>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/prozpay">ProZPay&trade;</a></li>
                            <li><a className="dropdown-item" href="/directory">ProZ Directory</a></li>
                            <li><a className="dropdown-item" href="/wiwo">#Wiwo</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="/collaborate">Collaborative Translation</a></li>
                        </ul>
                    </li>

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle d-flex align-items-center justify-content-center" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <FiBookOpen />
                            <span className="ms-2">ProZ Educate&trade;</span>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="/prozpay">Courses</a></li>
                            <li><a className="dropdown-item" href="/directory">Training</a></li>
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
        </nav>
    )
}

export default UserFacingTopNavigation
