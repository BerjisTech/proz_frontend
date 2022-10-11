import React from 'react'
import { FiFilter, FiMapPin, FiSearch } from 'react-icons/fi'
import { GiCancel } from 'react-icons/gi'

const SearchJobs = () => {
    return (
        <div>
            <form name="searchJobs" className="d-flex flex-row sm:flex-columnumn items-center justify-center w-full">
                <div className="d-flex grow items-center text-lg rounded relative w-full pt-3 px-2 shadow-md card m-2 cursor-pointer">
                    <FiSearch />
                    <input type="search" placeholder="Search" name="search" id="search" className="ms-2 p-3 pe-10 w-full outline-none rounded-xl font-ITC-Modern" />
                </div>
                <div className="d-flex items-center text-lg rounded relative w-full pt-3 px-2 shadow-md card m-2 cursor-pointer">
                    <FiMapPin />
                    <input type="search" placeholder="Anywhere" name="search" id="search" className="ms-2 p-3 pe-10 w-full outline-none rounded-xl font-ITC-Modern" />
                </div>
                <div className="d-flex items-center text-lg rounded relative w-full pt-3 px-2 shadow-md card m-2 cursor-pointer">
                    <FiFilter />
                    <input type="search" placeholder="Filters" name="search" id="search" className="ms-2 p-3 pe-10 w-full outline-none rounded-xl font-ITC-Modern" />
                </div>
            </form>
            <div className="d-flex">
                <span className="d-flex items-center justify-center rounded-full  bg-gray-200 p-2 m-1 cursor-pointer">
                    <GiCancel className="me-2 hover:text-red-600" />
                    Full Time
                </span>
                <span className="d-flex items-center justify-center rounded-full  bg-gray-200 p-2 m-1 cursor-pointer">
                    <GiCancel className="me-2 hover:text-red-600" />
                    Full Time
                </span>
                <span className="d-flex items-center justify-center rounded-full  bg-gray-200 p-2 m-1 cursor-pointer">
                    <GiCancel className="me-2 hover:text-red-600" />
                    Full Time
                </span>
                <span className="d-flex items-center justify-center rounded-full  bg-gray-200 p-2 m-1 cursor-pointer">
                    <GiCancel className="me-2 hover:text-red-600" />
                    Full Time
                </span>
                <span className="d-flex items-center justify-center rounded-full  bg-gray-200 p-2 m-1 cursor-pointer">
                    <GiCancel className="me-2 hover:text-red-600" />
                    Full Time
                </span>
            </div>
        </div>
    )
}

export default SearchJobs
