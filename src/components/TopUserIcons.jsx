import React from 'react'
import 'react-icons/fi';
import { FiBell, FiChevronDown } from 'react-icons/fi';

const TopUserIcons = () => {
    return (
        <div className="d-flex align-items-center justify-content-between">
            {/* User icon */}
            <span className="p-3 d-flex align-items-center justify-content-center cursor-pointer">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png" alt='language flag' width="20" height="20" className='img img-responsive rounded-circle' />
                <span className="mx-1">Eng (US)</span>
                <FiChevronDown className="fs-3 text-gray-400" />
            </span>
            <span className="p-2 bg-gray-200 rounded-circle mx-2">
                <FiBell className="fs-3 text-orange-500" />
            </span>
            <div className="d-flex align-items-center justify-content-center me-3">
                <img src='https://pbs.twimg.com/profile_images/1151905246073053189/cZLu6vip_400x400.jpg' alt='User Icon' width="40" height="40" className='img img-responsive rounded-circle' />
                <div className="d-flex flex-column mx-3">
                    <span className="fw-bold">Benedict</span>
                    <span className="text-sm text-gray-400">translator</span>
                </div>
                <FiChevronDown />
            </div>
        </div>
    )
}

export default TopUserIcons
