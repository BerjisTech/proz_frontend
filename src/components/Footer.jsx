import React from 'react'
import { FiSettings } from "react-icons/fi";

const Footer = () => {
    return (
        <div className="flex relative dark:bg-main-dark-bg">
            <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
                <FiSettings className='cursor-pointer ring-2 ring-active-element-black rounded-full w-12 h-12' />
            </div>
        </div>
    )
}

export default Footer
