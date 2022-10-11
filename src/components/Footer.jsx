import React from 'react'
import "react-icons/fi";

const Footer = () => {
    return (
        <div className="text-end text-xs text-gray p-2 bg-transparent">
            Copyright &copy; {new Date().getFullYear()} Proz.com
        </div>
    )
}

export default Footer
