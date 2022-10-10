import React from 'react'

const MainSearch = () => {
    return (
        <div className="flex-1">
            <form className="w-full">
                <input type="text" placeholder="Search..." name="searchItem" className='rounded-2xl dark:bg-main-dark-gray dark:text-white w-full outline-none p-2' />
            </form>
        </div>
    )
}

export default MainSearch
