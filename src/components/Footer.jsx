import React from 'react'
import "react-icons/fi";

const Footer = () => {
    return (
        <div className="text-end fs-6 text-gray p-2 position-fixed bottom-0 end-0">
            Copyright &copy; {new Date().getFullYear()} Proz.com
        </div>
    )
}

export default Footer
