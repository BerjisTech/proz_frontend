import React from 'react'
import { FiFilter, FiMapPin, FiSearch } from 'react-icons/fi'
import { GiCancel } from 'react-icons/gi'

const JobSearch = () => {
    return (
        <div>
            <form name="jobSearch" className="d-flex flex-row sm:flex-columnumn align-items-center justify-content-center w-full">
                <div className="d-flex flex-row flex-fill align-items-center rounded-5 py-2 px-2 border-0 shadow card m-2 cursor-pointer">
                    <FiSearch className="ms-3 text-gray-400" />
                    <input type="search" placeholder="Search" name="search" id="search" className="ms-3 p-3 pe-5 border-0 bg-gray-100 flex-fill rounded-5" />
                </div>
                <div className="d-flex flex-row align-items-center rounded-5 py-2 px-2 border-0 shadow card m-2 cursor-pointer">
                    <FiMapPin className="ms-3 text-gray-400" />
                    <input type="search" placeholder="Anywhere" name="search" id="search" className="ms-3 p-3 pe-5 border-0 bg-gray-100 flex-fill rounded-5" />
                </div>
                <div className="d-flex flex-row align-items-center rounded-5 py-2 px-2 border-0 shadow card m-2 cursor-pointer">
                    <FiFilter className="ms-3 text-gray-400" />
                    <input type="search" placeholder="Filters" name="search" id="search" className="ms-3 p-3 pe-5 border-0 bg-gray-100 flex-fill rounded-5" />
                </div>
            </form>
            <div className="d-flex">
                <span className="d-flex align-items-center justify-content-center rounded-5  bg-gray-100 p-2 m-1 cursor-pointer">
                    <GiCancel className="me-2 hover:text-red-600" />
                    Full Time
                </span>
                <span className="d-flex align-items-center justify-content-center rounded-5  bg-gray-100 p-2 m-1 cursor-pointer">
                    <GiCancel className="me-2 hover:text-red-600" />
                    Full Time
                </span>
                <span className="d-flex align-items-center justify-content-center rounded-5  bg-gray-100 p-2 m-1 cursor-pointer">
                    <GiCancel className="me-2 hover:text-red-600" />
                    Full Time
                </span>
                <span className="d-flex align-items-center justify-content-center rounded-5  bg-gray-100 p-2 m-1 cursor-pointer">
                    <GiCancel className="me-2 hover:text-red-600" />
                    Full Time
                </span>
                <span className="d-flex align-items-center justify-content-center rounded-5  bg-gray-100 p-2 m-1 cursor-pointer">
                    <GiCancel className="me-2 hover:text-red-600" />
                    Full Time
                </span>
            </div>
        </div>
    )
}

export default JobSearch
