import React from 'react'
import { FiBell } from 'react-icons/fi'

const Notifications = () => {
    return (
        <div>
            <a className="dropdown-toggle text-green-800 bg-inherit mx-2 d-flex align-items-center justify-content-center" id="notificationsDropdown" href="/dashboard/*" data-bs-toggle="dropdown" aria-expanded="false">
                <FiBell className="text-xl text-orange-400" />
            </a>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="notificationsDropdown">
                <li className='px-2 text-[12px] text-green-800'><a className="dropdown-item" href="/dashboard/notifications/1">New Job received</a></li>
                <li className='px-2 text-[12px] text-blue-800'><a className="dropdown-item" href="/dashboard/notifications/1">Your question has been answered</a></li>
                <li className='px-2 text-[12px] text-red-800'><a className="dropdown-item" href="/dashboard/notifications/1">Kudoz rceived</a></li>
                <li className='px-2 text-[12px] text-green-800'><a className="dropdown-item" href="/dashboard/notifications/1">New Payment Received</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li className='p-2 fw-bold'><a className="dropdown-item" href="/dashboard/notifications">View all notifications</a></li>
            </ul>
        </div>
    )
}

export default Notifications
