import React from 'react'
import { FiSettings, FiHome, FiMessageCircle, FiThumbsUp, FiBookOpen, FiShoppingCart, FiPieChart } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Spacer from '../extra_ui_tools/Spacer'
import "./Navbar.css"
import NavBarSerction from './NavBarSection'

// let primary_nav_dom = document.querySelector('.primaryDashboardNavigation')
// let secondary_nav_dom = document.querySelector('.secondaryDashboardNavigation')
// // secondary_nav_dom.classList.toggle('hidden')
// primary_nav_dom.addEventListener('click', (e) => {
//     e.preventDefault()
//     secondary_nav_dom.classList.toggle('hidden')
// })

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg min-vh-100 m-0 p-0 d-flex overflow-x-hidden">
            <div className="m-0 p-0 h-screen d-flex flex-column w-[50px] flex-nowrap sticky  overflow-y-auto overflow-x-hidden" id="navBarWrapper">
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
                <NavBarSerction listItems={[
                    {name: "Home", route: "/dashboard", icon: <FiHome className="app__sidebar-icon" />},
                    {name: "Jobs", route: "/dashboard/findwork", icon: <FiPieChart className="app__sidebar-icon" />},
                    {name: "Courses", route: "/dashboard/courses", icon: <FiShoppingCart className="app__sidebar-icon" />},
                    {name: "Terms", route: "/dashboard/kudoz", icon: <FiBookOpen className="app__sidebar-icon" />},
                    {name: "Blue Board", route: "/dashboard/blueboard", icon: <FiThumbsUp className="app__sidebar-icon" />},
                    {name: "ProZ*Pay", route: "/dashboard/kudoz", icon: <FiMessageCircle className="app__sidebar-icon" />}
                    ]}
                    id={"sideBarNav"}/>
                <NavBarSerction listItems={[
                    {name: "Interpret", route: "/marketplace/interpreting"},
                    {name: "Donate words", route: "/marketplace/donate"},
                    {name: "Translate", route: "/marketplace/translate"},
                    {name: "Subtitle", route: "/marketplace/subtitle"}
                    ]}
                    sectionTitle="Marketplace"
                    showMore={true}
                    />
                <NavBarSerction listItems={[
                    {name: "Forums", route: "/networking/forum"},
                    {name: "Meetups", route: "/networking/meetups"},
                    {name: "Mentoring", route: "/networking/mentoring"},
                    {name: "Gatherings", route: "/networking/gatherings"}
                    ]}
                    sectionTitle="Networking"
                    />
                <NavBarSerction listItems={[
                    {name: "Invoicing", route: "/tools/invoicing"},
                    {name: "Widgets", route: "/tools/widgets"},
                    {name: "CafeTran", route: "/tools/cafetran"},
                    {name: "Community Rates", route: "/tools/community-rates"}
                    ]}
                    sectionTitle="Tools"
                    showMore={true}
                    />
                <ul className="navbar-nav d-flex flex-column w-full align-items-start justify-content-start">
                    <li className="nav-item w-full text-center py-2">
                        <Link to="/dashboard/settings" className="nav-link w-full d-flex align-items-center justify-content-center overflow-hidden text-white">
                            <FiSettings className="app__sidebar-icon" />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
