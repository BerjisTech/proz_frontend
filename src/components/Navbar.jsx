import React from 'react'
import { FiSettings, FiHome, FiMessageCircle, FiThumbsUp, FiBookOpen, FiShoppingCart, FiPieChart, FiBookmark } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <aside className="app__sidebar sidebar w-60 h-screen shadow-md bg-teal-800 px-1 flex-initial">
            <div className="h-screen flex flex-col sticky top-0">
                <header className="app__sidebar-header p-3 border-b">
                    <div class="flex">
                        <div className="card bg-white p-3 rounded shadow-md">
                            <img src="https://pbs.twimg.com/profile_images/1151905246073053189/cZLu6vip_400x400.jpg" width="30" alt="logo" />
                        </div>
                        <div className="flex-1 flex flex-col pl-3">
                            <span className="text-white text-xl font-bold">Dashboard</span>
                            <span className="text-orange-300 text-lg">Professional</span>
                        </div>
                    </div>
                </header>
                <ul className="app__sidebar-body relative">
                    <li className="raltive py-3">
                        <Link to="/dashboard" className="flex items-center text-lg py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                            <FiHome className="app__sidebar-icon" />
                            <span className="p-3">Dashboard</span>
                        </Link>
                    </li>
                    <li className="relative py-2">
                        <Link to="/findwork" className="flex items-center text-lg py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                            <FiPieChart className="app__sidebar-icon" />
                            <span className="p-3">Find Work</span>
                        </Link>
                    </li>
                    <li className="relative py-2">
                        <Link to="/applications" className="flex items-center text-lg py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                            <FiShoppingCart className="app__sidebar-icon" />
                            <span className="p-3">Applications</span>
                        </Link>
                    </li>
                    <li className="relative py-2">
                        <Link to="/courses" className="flex items-center text-lg py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                            <FiBookOpen className="app__sidebar-icon" />
                            <span className="p-3">Courses</span>
                        </Link>
                    </li>
                    <li className="relative py-2">
                        <Link to="/kudoz" className="flex items-center text-lg py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                            <FiThumbsUp className="app__sidebar-icon" />
                            <span className="p-3">Kudoz</span>
                        </Link>
                    </li>
                    <li className="relative py-2">
                        <Link to="/messages" className="flex items-center text-lg py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                            <FiMessageCircle className="app__sidebar-icon" />
                            <span className="p-3">Messages</span>
                        </Link>
                    </li>
                    <li className="relative py-2">
                        <Link to="/settings" className="flex items-center text-lg py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                            <FiSettings className="app__sidebar-icon" />
                            <span className="p-3">Settings</span>
                        </Link>
                    </li>
                </ul>
                <div className="bg-orange-300 mx-3 pt-5 px-3 pb-2 rounded shadow flex flex-col items-center justify-center">
                    <div className="card bg-white p-3 rounded shadow-md">
                        <img src="https://pbs.twimg.com/profile_images/1151905246073053189/cZLu6vip_400x400.jpg" width="30" alt="logo" />
                    </div>
                    <span className="text-black text-base font-bold mt-3">Proz.com Membership</span>
                    <span className="text-white text-xs text-center ">Get access to all features and put proz.com to work for you</span>
                    <span className="flex rounded bg-white my-3">
                        <Link to="/billing" className="flex items-center text-lg py-4 px-6 h-12 overflow-hidden text-gray text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                            <FiBookmark className="app__sidebar-icon" />
                            <span className="p-3">Go Pro</span>
                        </Link>
                    </span>
                </div>
            </div>
        </aside >
    )
}

export default Navbar
