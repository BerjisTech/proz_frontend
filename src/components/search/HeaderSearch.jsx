import React from 'react'
import 'react-icons/fi'
import { FiSearch } from 'react-icons/fi'

const HeaderSearch = ({ placeholder }) => {
    return (
        <div className="">
            <form className="d-flex flex-row align-items-center justify-content-center" action='/dashboard/search' method='GET'>
                <div className='border-0 bg-gray-100 rounded-5 bg-gray py-2 px-3 d-flex flex-row align-items-center justify-content-center'>
                    <FiSearch className="fs-3 me-3 text-gray-400" />
                    <input type="text" placeholder={placeholder ? placeholder : "Search..."} name="searchItem" className="bg-gray-100"/>
                </div>
                <FiSearch className="fs-3 ms-3" />
                <input type="text" placeholder={placeholder ? placeholder : "Search..."} name="searchItem" className='flex-fill border-0 py-2 px-3 outline-none focus:outline-none' />
            </form>
        </div>
    )
}

export default HeaderSearch
