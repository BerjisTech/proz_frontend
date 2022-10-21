import React from 'react'
import { FiSettings, FiHome, FiMessageCircle, FiThumbsUp, FiBookOpen, FiShoppingCart, FiPieChart, FiBookmark } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Spacer from './Spacer'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg min-vh-100 bg-primary m-0 p-0">
            <div className="container-fluid m-0 p-0 h-screen d-flex flex-column flex-nowrap sticky overflow-auto">
                <header className="w-full px-3 pt-3 border-bottom sticky bg-primary shadow">
                    <a className="navbar-brand m-0 p-0" href="/">
                        <div className="d-flex align-items-center justify-content-center">
                            <div className="card bg-white p-1 rounded shadow-sm">
                                <img src="https://pbs.twimg.com/profile_images/1151905246073053189/cZLu6vip_400x400.jpg" width="30" alt="logo" />
                            </div>
                        </div>
                        <Spacer spacing='[2, 0, 0, 0]' />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sideBarNav" aria-controls="sideBarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </header>
                <div className="collapse navbar-collapse d-flex flex-column align-items-center justify-content-between" id="sideBarNav">
                    <ul className="navbar-nav d-flex flex-column w-full align-items-start justify-content-start">
                        <li className="nav-item w-full py-2">
                            <Link to="/dashboard" role="tooltip" data-bs-tooltip="Home" className="nav-link d-flex align-items-center overflow-hidden text-white">
                                <FiHome className="app__sidebar-icon" />
                            </Link>
                        </li>
                        <li className="nav-item w-full py-2">
                            <Link to="/dashboard/findwork" className="nav-link d-flex align-items-center overflow-hidden text-white">
                                <FiPieChart className="app__sidebar-icon" />
                            </Link>
                        </li>
                        <li className="nav-item w-full py-2">
                            <Link to="/dashboard/applications" className="nav-link d-flex align-items-center overflow-hidden text-white">
                                <FiShoppingCart className="app__sidebar-icon" />
                            </Link>
                        </li>
                        <li className="nav-item w-full py-2">
                            <Link to="/dashboard/courses" className="nav-link d-flex align-items-center overflow-hidden text-white">
                                <FiBookOpen className="app__sidebar-icon" />
                            </Link>
                        </li>
                        <li className="nav-item w-full py-2">
                            <Link to="/dashboard/kudoz" className="nav-link d-flex align-items-center overflow-hidden text-white">
                                <FiThumbsUp className="app__sidebar-icon" />
                            </Link>
                        </li>
                        <li className="nav-item w-full py-2">
                            <Link to="/dashboard/messages" className="nav-link d-flex align-items-center overflow-hidden text-white">
                                <FiMessageCircle className="app__sidebar-icon" />
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav d-flex flex-column w-full align-items-start justify-content-start">
                        <li className="nav-item w-full py-2">
                            <Link to="/dashboard/settings" className="nav-link d-flex align-items-center overflow-hidden text-white">
                                <FiSettings className="app__sidebar-icon" />
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
