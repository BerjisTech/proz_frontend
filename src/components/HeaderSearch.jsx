import React from 'react'

const HeaderSearch = () => {
    return (
        <div className="flex-1">
            <form className="w-full" action='/search' method='GET'>
                <input type="text" placeholder="Search..." name="searchItem" className='rounded-2xl dark:bg-main-dark-gray dark:text-white w-full outline-none p-2' />
            </form>
        </div>
    )
}

export default HeaderSearch
