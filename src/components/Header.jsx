import React from 'react'
import { MainSearch, TopUserIcons } from '../components'

const Header = () => {
    return (
        <div className="flex w-full flex-wrap mt-4 mb-8 content-center">
            <MainSearch />
            <TopUserIcons />
        </div>
    )
}

export default Header
