import React from 'react'
import { HeaderSearch, TopUserIcons } from '../../components'
import "./Header.css"

const Header = () => {
    return (
        <div className="d-flex flex-wrap shadow-sm pb-1 align-items-center justify-content-center sticky top-0 bg-white" id="header-navigation">
            <HeaderSearch />
            <TopUserIcons />
        </div>
    )
}

export default Header
