import React from 'react'
import "./Header.css"
import { HeaderSearch } from '../../components'
import TopUserIcons from '../navigation/TopUserIcons'

const Header = () => {
    return (
        <div className="d-flex flex-wrap shadow-sm pb-1 align-items-center justify-content-center sticky top-0 bg-white" id="header-navigation">
            <HeaderSearch />
            <TopUserIcons />
        </div>
    )
}

export default Header
