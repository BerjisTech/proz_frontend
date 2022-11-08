import React from 'react'
import { BiUser } from 'react-icons/bi'
import '../general_ui_components/Header.css';
import { NavLink } from 'react-router-dom';

export function UserAccountProfileImage() {
    return (
        <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="User Profile" className="rounded-full w-[30px] h-[30px]" />
    )
}
export function UserAccountNavigationDropdown() {
    return (
        <div className="dropdown">
            <a className="dropdown-toggle text-green-800 bg-inherit border-1 rounded-full m-2 px-2 py-1 d-flex align-items-center justify-content-center" id="userAccountDropdown" href="/dashboard/*" data-bs-toggle="dropdown" aria-expanded="false">
                {window.location.href.includes('/dashboard') ? <UserAccountProfileImage /> : <BiUser />}
            </a>
            <ul className="profile-dropdown-nav dropdown-menu dropdown-menu-end my-1" aria-labelledby="userAccountDropdown">
                <li>
                    <div className="membership-text-nav px-2">Upgrade your account</div>
                    <div className="d-flex gap-2 px-2">
                        <div className="btn btn-freelance-membership">Freelance</div>
                        <div className="btn btn-business-membership">Business</div>
                    </div>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                    <NavLink className="dropdown-item" to="/profile/1231242"><div>My profile</div></NavLink>
                </li>
                <li>
                    <NavLink className="dropdown-item" to="/profile/1231242/visitors"><div>Profile visitors</div></NavLink>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li className='p-2 fw-bold'>Account</li>
                <li><a className="dropdown-item" href="/dashboard/settings">Settings</a></li>
                <li><a className="dropdown-item" href="/dashboard/settings">Support</a></li>
                <li><a className="dropdown-item" href="/dashboard/settings">Notifications</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="/dashboard/settings">Log out</a></li>
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
