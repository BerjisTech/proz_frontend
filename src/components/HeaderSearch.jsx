import React from 'react'
import 'react-icons/fi'
import { FiSearch } from 'react-icons/fi'

const HeaderSearch = () => {
    return (
        <div className="d-flex-grow">
            <form className="d-flex items-center justify-center ms-10" action='/search' method='GET'>
                <FiSearch className="text-xl me-3" />
                <input type="text" placeholder="Search..." name="searchItem" className='rounded-full bg-gray-200 dark:bg-main-dark-gray dark:text-white w-full outline-none py-2 px-5' />
            </form>
        </div>
    )
}

export default HeaderSearch
