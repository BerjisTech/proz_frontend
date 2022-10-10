import React from 'react'
import 'react-icons/fi';
import { FiChevronDown, FiFlag } from 'react-icons/fi';

const TopUserIcons = () => {
    return (
        <div className="flex items-center justify-between">
            {/* User icon */}
            <span className="p-3">
                <FiFlag />
            </span>
            <span className="p-3">
                <FiChevronDown />
            </span>
        </div>
    )
}

export default TopUserIcons
