import React from 'react'
import { HeaderSearch, TopUserIcons } from '../components'

const Header = () => {
    return (
        <div className="flex w-full flex-wrap mt-4 shadow-md pb-3 content-center sticky top-0 bg-white">
            <HeaderSearch />
            <TopUserIcons />
        </div>
    )
}

export default Header
