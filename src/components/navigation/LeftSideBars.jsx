import React from 'react'
import Blueboards from '../blueboard/Blueboards'

export const KudozFilterForm = () => {
    return (
        <div>
            <h1>KudozFilterForm</h1>
        </div>
    )
}

export const BusinessFilterForm = () => {
    return (
        <div>
            <h1>BusinessFilterForm</h1>
        </div>
    )
}

export const BlueboardFilterForm = () => {
    return (
        <div>
            <h1>BlueboardFilterForm</h1>
            <Blueboards />
        </div>
    )
}

export const EmptySideBar = () => {
    return (
        <div></div>
    )
}

const LeftSideBars = () => {
    const left_sidebars = {
        'default': <EmptySideBar />,
        'kudoz': <KudozFilterForm />,
        'business': <BusinessFilterForm />,
        'blueboard': <BlueboardFilterForm />
    }

    console.log(left_sidebars)

    let active_sidebar = localStorage.getItem('active_sidebar') ? localStorage.getItem('active_sidebar') : 'default'

    console.log(active_sidebar)

    return (
        <div>
            {left_sidebars[active_sidebar]}
        </div>
    )
}

export default LeftSideBars
