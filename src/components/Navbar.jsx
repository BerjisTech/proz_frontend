import React from 'react'
import { FiSettings, FiHome, FiMessageCircle, FiThumbsUp, FiBookOpen, FiShoppingCart, FiPieChart, FiBookmark } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg min-vh-100 bg-primary m-0 p-0">
            <div className="container-fluid m-0 p-0 h-screen d-flex flex-column flex-nowrap sticky overflow-auto">
                <header className="w-full px-3 pt-3 border-bottom sticky bg-primary shadow">
                    <a className="navbar-brand m-0 p-0" href="/">
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="card bg-white p-3 rounded shadow-sm">
                                <img src="https://pbs.twimg.com/profile_images/1151905246073053189/cZLu6vip_400x400.jpg" width="30" alt="logo" />
                            </div>
                            <div className="flex-fill d-flex flex-column ps-3">
                                <span className="text-white text-xl fw-bold">Dashboard</span>
                                <span className="text-orange-300 text-lg">Professional</span>
                            </div>
                        </div>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sideBarNav" aria-controls="sideBarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </header>
                <div className="collapse navbar-collapse d-flex flex-column align-items-start justify-content-start" id="sideBarNav">
                    <ul className="navbar-nav d-flex flex-column w-full align-items-start justify-content-start">
                        <li className="nav-item w-full ps-2 py-2">
                            <Link to="/dashboard" className="nav-link d-flex align-items-center overflow-hidden text-white">
                                <FiHome className="app__sidebar-icon" />
                                <span className="px-3">Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-item w-full ps-2 py-2">
                            <Link to="/dashboard/findwork" className="nav-link d-flex align-items-center overflow-hidden text-white">
                                <FiPieChart className="app__sidebar-icon" />
                                <span className="px-3">Find Work</span>
                            </Link>
                        </li>
                        <li className="nav-item w-full ps-2 py-2">
                            <Link to="/dashboard/applications" className="nav-link d-flex align-items-center overflow-hidden text-white">
                                <FiShoppingCart className="app__sidebar-icon" />
                                <span className="px-3">Applications</span>
                            </Link>
                        </li>
                        <li className="nav-item w-full ps-2 py-2">
                            <Link to="/dashboard/courses" className="nav-link d-flex align-items-center overflow-hidden text-white">
                                <FiBookOpen className="app__sidebar-icon" />
                                <span className="px-3">Courses</span>
                            </Link>
                        </li>
                        <li className="nav-item w-full ps-2 py-2">
                            <Link to="/dashboard/kudoz" className="nav-link d-flex align-items-center overflow-hidden text-white">
                                <FiThumbsUp className="app__sidebar-icon" />
                                <span className="px-3">Kudoz</span>
                            </Link>
                        </li>
                        <li className="nav-item w-full ps-2 py-2">
                            <Link to="/dashboard/messages" className="nav-link d-flex align-items-center overflow-hidden text-white">
                                <FiMessageCircle className="app__sidebar-icon" />
                                <span className="px-3">Messages</span>
                            </Link>
                        </li>
                        <li className="nav-item w-full ps-2 py-2">
                            <Link to="/dashboard/settings" className="nav-link d-flex align-items-center overflow-hidden text-white">
                                <FiSettings className="app__sidebar-icon" />
                                <span className="px-3">Settings</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="bg-orange-300 mx-2 px-3 my-5 rounded shadow d-flex flex-column align-items-center justify-content-center">
                        <div className="card bg-white p-3 rounded shadow-sm mt-3">
                            <img src="https://pbs.twimg.com/profile_images/1151905246073053189/cZLu6vip_400x400.jpg" width="30" alt="logo" />
                        </div>
                        <span className="text-black fw-bold mt-3">Proz.com Membership</span>
                        <span className="text-white fs-6 text-center ">Get access to all features and put proz.com to work for you</span>
                        <span className="d-flex rounded bg-white my-3 btn px-4">
                            <Link to="/billing" className="d-flex align-items-center nav-link overflow-hidden text-gray">
                                <FiBookmark className="app__sidebar-icon" />
                                <span className="px-3">Go Pro</span>
                            </Link>
                        </span>
                    </div>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
