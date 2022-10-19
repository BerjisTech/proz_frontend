import React from 'react'
import { BiGlasses, BiRocket } from 'react-icons/bi'
import { FiKey, FiSave, FiShoppingCart } from 'react-icons/fi'
import { GiCutDiamond } from 'react-icons/gi'
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
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">
                                <div className="d-flex align-items-center justify-content-center">
                                    <FiSave />
                                    <span className="ms-2">Training</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">
                                <div className="d-flex align-items-center justify-content-center">
                                    <BiGlasses />
                                    <span className="ms-2">Community</span>
                                </div>
                            </a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle d-flex align-items-center justify-content-center" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <BiRocket />
                                <span className="ms-2">Services</span>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/">Action</a></li>
                                <li><a className="dropdown-item" href="/">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle d-flex align-items-center justify-content-center" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <FiShoppingCart />
                                <span className="ms-2">Products</span>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="/">Action</a></li>
                                <li><a className="dropdown-item" href="/">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="/">Something else here</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">
                                <div className="d-flex align-items-center justify-content-center">
                                    <GiCutDiamond />
                                    <span className="ms-2">About</span>
                                </div>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                    </ul>
                </div>
                <div className='d-flex align-items-center justify-content-center'>
                    <a className="bg-white shadow rounded-full mx-2 p-2 fs-5" href="/dashboard/*">
                        <FiKey />
                    </a>
                    <span className="bg-white shadow rounded-full mx-2 p-2 fs-5 text-green-400">En</span>
                </div>
            </div>
        </nav>
    )
}

export default LandingPageNav
