import React from 'react'
import 'react-icons/fi'
import { FiSearch } from 'react-icons/fi'

const HeaderSearch = () => {
    return (
        <div className="flex-fill">
            <form className="d-flex flex-row align-items-center justify-content-center ms-5" action='/search' method='GET'>
                <FiSearch className="fs-3 me-3 text-gray-400" />
                <input type="text" placeholder="Search..." name="searchItem" className='flex-fill border-0 bg-gray-100 rounded-5 bg-gray py-2 px-5' />
            </form>
        </div>
    )
}

export default HeaderSearch
