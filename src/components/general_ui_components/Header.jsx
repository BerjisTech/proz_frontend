import React from 'react'
import "./Header.css"
import { HeaderSearch } from '../../components'
import TopUserIcons from './TopUserIcons'

const Header = () => {
    return (
        <div className="d-flex flex-wrap pb-1 align-items-center justify-content-center sticky top-0 bg-white" id="header-navigation">
            <div className="py-2 flex-fill">
                <HeaderSearch />
            </div>
            <div className="position-absolute top-0 profile-bundle-nav">
                <TopUserIcons />
            </div>
        </div>

    )
}

export default Header
