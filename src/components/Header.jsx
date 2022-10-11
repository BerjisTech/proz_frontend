import React from 'react'
import { HeaderSearch, TopUserIcons } from '../components'

const Header = () => {
    return (
        <div className="d-flex flex-wrap shadow-sm pb-3 align-items-center justify-content-center sticky top-0 bg-white">
            <HeaderSearch />
            <TopUserIcons />
        </div>
    )
}

export default Header
