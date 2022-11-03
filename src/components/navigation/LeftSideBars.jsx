import React from 'react'
import Blueboards from '../blueboard/Blueboards'
import { FreelancerFilterForm } from '../hire/Freelancer'

export function KudozFilterForm() {
    return (
        <div>
            <h1>KudozFilterForm</h1>
        </div>
    )
}

export function BusinessFilterForm() {
    return (
        <div>
            <h1>BusinessFilterForm</h1>
        </div>
    )
}

export function BlueboardFilterForm() {
    return (
        <div>
            <h1>BlueboardFilterForm</h1>
            <Blueboards />
        </div>
    )
}

export function EmptySideBar() {
    return (
        <div>
            EmptySideBar
        </div>
    )
}

const LeftSideBars = () => {
    let active_sidebar = localStorage.getItem('active_sidebar') ? localStorage.getItem('active_sidebar') : 'default'
    const left_sidebars = {
        'default': <EmptySideBar />,
        'kudoz': <KudozFilterForm />,
        'business': <BusinessFilterForm />,
        'blueboard': <BlueboardFilterForm />,
        'freelancer': <FreelancerFilterForm />
    }

    return (
        <div>
            {left_sidebars[active_sidebar]}
        </div>
    )
}

export default LeftSideBars
