import React from 'react'
import { FiSettings, FiPlusSquare, FiHome } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <aside className="app__sidebar sidebar w-60 h-full shadow-md bg-teal-800 px-1 flex-initial">
            <header className="app__sidebar-header p-5 border-b">
                <FiSettings className="app__sidebar-logo" />
            </header>
            <ul className="app__sidebar-body relative">
                <li className="raltive">
                    <Link to="/dashboard" className="flex items-center text-lg py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                        <FiHome className="app__sidebar-icon" />
                        <span className="p-3">Dashboard</span>
                    </Link>
                </li>
                <li className="relative">
                    <Link to="/findwork" className="flex items-center text-lg py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                        <FiPlusSquare className="app__sidebar-icon" />
                        <span className="p-3">Find Work</span>
                    </Link>
                </li>
                <li className="relative">
                    <Link to="/applications" className="flex items-center text-lg py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                        <FiPlusSquare className="app__sidebar-icon" />
                        <span className="p-3">Applications</span>
                    </Link>
                </li>
                <li className="relative">
                    <Link to="/courses" className="flex items-center text-lg py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                        <FiPlusSquare className="app__sidebar-icon" />
                        <span className="p-3">Courses</span>
                    </Link>
                </li>
                <li className="relative">
                    <Link to="/kudoz" className="flex items-center text-lg py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                        <FiPlusSquare className="app__sidebar-icon" />
                        <span className="p-3">Kudoz</span>
                    </Link>
                </li>
                <li className="relative">
                    <Link to="/messages" className="flex items-center text-lg py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                        <FiPlusSquare className="app__sidebar-icon" />
                        <span className="p-3">Messages</span>
                    </Link>
                </li>
                <li className="relative">
                    <Link to="/settings" className="flex items-center text-lg py-4 px-6 h-12 overflow-hidden text-white text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                        <FiPlusSquare className="app__sidebar-icon" />
                        <span className="p-3">Settings</span>
                    </Link>
                </li>
            </ul>
        </aside>
    )
}

export default Navbar
