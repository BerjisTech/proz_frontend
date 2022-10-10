import React from 'react'
import { HeaderSearch, TopUserIcons } from '../components'

const Header = () => {
    return (
        <div className="flex w-full flex-wrap mt-4 mb-8 content-center">
            <HeaderSearch />
            <TopUserIcons />
        </div>
    )
}

export default Header
