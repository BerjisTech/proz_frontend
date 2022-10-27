import React from 'react'
import Blueboards from '../../components/blueboard/Blueboards';

export function BlueboardSidebarLeft() {
    return (
        <div className="d-flex flex-column align-items-start justify-content-start">
            <Blueboards />
        </div>
    )
}

const BlueboardList = () => {

    return (
        <div>
            <Blueboards />
        </div>
    )
}

localStorage.setItem('sidebarLeft', BlueboardSidebarLeft());
export default BlueboardList
