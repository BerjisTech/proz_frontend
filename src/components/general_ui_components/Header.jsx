import React from 'react'
import "./Header.css"
import { HeaderSearch } from '../../components'
import TopUserIcons from './TopUserIcons'

const Header = () => {
    return (
        <div className="d-flex flex-wrap shadow-sm align-items-center justify-content-center sticky top-0 bg-white" id="header-navigation">
            <HeaderSearch />
            <TopUserIcons />
        </div>
    )
}

export default Header
