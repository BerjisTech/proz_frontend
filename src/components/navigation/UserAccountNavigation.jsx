import React from 'react'
import { BiUser } from 'react-icons/bi'

export function UserAccountProfileImage() {
    return (
        <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="User Profile" className="rounded-full w-[30px] h-[30px]" />
    )
}
export function UserAccountNavigationDropdown() {
    return (
        <div className="dropdown">
            <a className="dropdown-toggle text-green-800 bg-white border-1 rounded-full m-2 px-2 py-1 d-flex align-items-center justify-content-center" id="userAccountDropdown" href="/dashboard/*" data-bs-toggle="dropdown" aria-expanded="false">
                {window.location.href.includes('/dashboard') ? <UserAccountProfileImage /> : <BiUser />}
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userAccountDropdown">
                <li><a className="dropdown-item" href="/dashboard/settings">Action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li className='p-2 fw-bold'>Account Settings</li>
                <li><a className="dropdown-item" href="/dashboard/settings">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li className='p-2 fw-bold'>Profile Settings</li>
                <li><a className="dropdown-item" href="/dashboard/settings">Something else here</a></li>
            </ul>
        </div>
    )
}

const UserAccountNavigation = () => {
    return (
        <div>UserAccountNavigation</div>
    )
}

export default UserAccountNavigation
