import React from 'react'
import { BiGlasses, BiRocket } from 'react-icons/bi'
import { FiBookOpen } from 'react-icons/fi'
import { SignupSigninLinks } from '..'
import HeaderSearch from '../search/HeaderSearch'

const UserFacingTopNavigation = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky w-screen">
            <div className="container-fluid d-flex align-items-center justify-content-center w-full py-2 shadow">
                <a href="/">
                    <img src='/images/logos/logo.png' alt="logo" className="w-20 m-3" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className='row'>
                        <div className="col-sm-4 m-0 p-0"><HeaderSearch placeholder="What are you looking for?" /></div>
                        <div className="col-sm-7 m-0 p-0">
                            <ul className="navbar-nav mb-2 mb-lg-0 flex-fill justify-content-center me-3">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle d-flex align-items-center justify-content-center" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <BiGlasses />
                                        <span className="ms-2">Terminology</span>
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li className='p-2 fw-bold'>Kudoz Help Netwrok</li>
                                        <li><a className="dropdown-item" href="/search">Term Search</a></li>
                                        <li><a className="dropdown-item" href="/kudoz/ask">Ask Question</a></li>
                                        <li><a className="dropdown-item" href="/kudoz">Answer Question</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li className='p-2 fw-bold'>Other</li>
                                        <li><a className="dropdown-item" href="/kudoz/resources">Terminology Resources</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li className='p-2 fw-bold'>Learn More About</li>
                                        <li><a className="dropdown-item" href="/about-us">ProZ Terminology</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle d-flex align-items-center justify-content-center" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <BiRocket />
                                        <span className="ms-2">Jobs &amp; Directory</span>
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
                                        <span className="ms-2">Member Activities</span>
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/prozpay">Courses</a></li>
                                        <li><a className="dropdown-item" href="/directory">Training</a></li>
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

                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle d-flex align-items-center justify-content-center" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <FiBookOpen />
                                        <span className="ms-2">Tools</span>
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/prozpay">Courses</a></li>
                                        <li><a className="dropdown-item" href="/directory">Training</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="/collaborate">Collaborative Translation</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-1 text-end m-0 p-0"><SignupSigninLinks /></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default UserFacingTopNavigation
