import React from 'react'
import 'react-icons/fi'
import { FiSearch } from 'react-icons/fi'

const HeaderSearch = ({ placeholder }) => {
    return (
        <div className="flex-fill">
            <form className="d-flex flex-row align-items-center justify-content-center" action='/dashboard/search' method='GET'>
                <FiSearch className="fs-3 ms-3" />
                <input type="text" placeholder={placeholder ? placeholder : "Search..."} name="searchItem" className='flex-fill border-0 py-2 px-3 outline-none focus:outline-none' />
            </form>
        </div>
    )
}

export default HeaderSearch
