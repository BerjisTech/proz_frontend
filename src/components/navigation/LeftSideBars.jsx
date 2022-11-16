import React from 'react'
import { useLocation } from 'react-router-dom'
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
    const location = useLocation()
    let active_sidebar = location.pathname.split('/').reverse()[0]
    const left_sidebars = {
        'default': <EmptySideBar />,
        'kudoz': <KudozFilterForm />,
        'business': <BusinessFilterForm />,
        'blueboard': <BlueboardFilterForm />,
        'freelancers': <FreelancerFilterForm />
    }

    return (
        <div>
            {left_sidebars[active_sidebar]}
        </div>
    )
}

export default LeftSideBars
