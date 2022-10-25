import React from 'react'
import '.Events'
import '.ActivePolls'
import '.InternalAds'
import Events from '../Events'

const RightSideBar = () => {
    return (
        <div>
            <Events />
            <ActivePolls />
            <InternalAds />
        </div>
    )
}

export default RightSideBar
