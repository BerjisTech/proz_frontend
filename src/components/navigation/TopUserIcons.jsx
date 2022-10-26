import React from 'react'
import 'react-icons/fi';
import { FiBell, FiChevronDown } from 'react-icons/fi';
import { LocalizationDropdown } from './LocalizationSelect';

const TopUserIcons = () => {
    return (
        <div className="flex items-center justify-between">
            {/* User icon */}
            <LocalizationDropdown />
            <span className="p-3">
                <FiBell className="text-xl text-orange-400" />
            </span>
            <div className="flex items-center justify-center mr-5">
                <img src='https://pbs.twimg.com/profile_images/1151905246073053189/cZLu6vip_400x400.jpg' alt='User Icon' className='shadow-md rounded-full h-10 w-10 object-cover object-center' />
                <div className="flex flex-col mx-3">
                    <span className="font-bold">Benedict</span>
                    <span className="text-sm text-gray-400">translator</span>
                </div>
                <FiChevronDown />
            </div>
        </div>
    )
}

export default TopUserIcons
