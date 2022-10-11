import React from 'react'
import 'react-icons/fi'
import { FiSearch } from 'react-icons/fi'

const HeaderSearch = () => {
    return (
        <div className="flex-1">
            <form className="flex items-center justify-center ml-10" action='/search' method='GET'>
                <FiSearch className="text-xl mr-3" />
                <input type="text" placeholder="Search..." name="searchItem" className='rounded-full bg-gray-200 dark:bg-main-dark-gray dark:text-white w-full outline-none py-2 px-5' />
            </form>
        </div>
    )
}

export default HeaderSearch
