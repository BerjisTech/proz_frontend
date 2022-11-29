import React from 'react'

const SecondaryNavigation = ({ primary_navigation }) => {
    switch (primary_navigation) {
        case 'dashboard':
            return (
                <div className="secondary-navigation">
                    <div className="secondary-navigation__item">
                        <a href="//dashboard" className="secondary-navigation__link">
                            <span className="secondary-navigation__icon">
                                <i className="fas fa-home"></i>
                            </span>
                            <span className="secondary-navigation__text">
                                Home
                            </span>
                        </a>
                    </div>
                    <div className="secondary-navigation__item">
                        <a href="/dashboard/findwork" className="secondary-navigation__link">
                            <span className="secondary-navigation__icon">
                                <i className="fas fa-search"></i>
                            </span>
                            <span className="secondary-navigation__text">
                                Find Work
                            </span>
                        </a>
                    </div>
                    <div className="secondary-navigation__item">
                        <a href="/dashboard/applications" className="secondary-navigation__link">
                            <span className="secondary-navigation__icon">
                                <i className="fas fa-file-alt"></i>
                            </span>
                            <span className="secondary-navigation__text">
                                Applications
                            </span>
                        </a>
                    </div>
                    <div className="secondary-navigation__item">
                        <a href="/dashboard/courses" className="secondary-navigation__link">
                            <span className="secondary-navigation__icon">
                                <i className="fas fa-book"></i>
                            </span>
                            <span className="secondary-navigation__text">
                                Courses
                            </span>
                        </a>
                    </div>
                    <div className="secondary-navigation__item">
                        <a href="/dashboard/kudoz" className="secondary-navigation__link">
                            <span className="secondary-navigation__icon">
                                <i className="fas fa-thumbs-up"></i>
                            </span>
                            <span className="secondary-navigation__text">
                                KudoZ
                            </span>
                        </a>
                    </div>
                    <div className="secondary-navigation__item">
                        <a href="/dashboard/teams" className="secondary-navigation__link">
                            <span className="secondary-navigation__icon">
                                <i className="fas fa-users"></i>
                            </span>
                            <span className="secondary-navigation__text">
                                Teams
                            </span>
                        </a>
                    </div>
                    <div className="secondary-navigation__item">
                        <a href="/dashboard/contacts" className="secondary-navigation__link">
                            <span className="secondary-navigation__icon">
                                <i className="fas fa-address-book"></i>
                            </span>
                            <span className="secondary-navigation__text">
                                Contacts
                            </span>
                        </a>
                    </div>
                    <div className="secondary-navigation__item">
                        <a href="/dashboard/notifications" className="secondary-navigation__link">
                            <span className="secondary-navigation__icon">
                                <i className="fas fa-bell"></i>
                            </span>
                            <span className="secondary-navigation__text">
                                Notifications
                            </span>
                        </a>
                    </div>
                    <div className="secondary-navigation__item">
                        <a href="/dashboard/settings" className="secondary-navigation__link">
                            <span className="secondary-navigation__icon">
                                <i className="fas fa-cog"></i>
                            </span>
                            <span className="secondary-navigation__text">
                                Settings
                            </span>
                        </a>
                    </div>
                </div>
            )
        case 'findwork':
            return (
                <div className="secondary-navigation">Find Work</div>
            )
        case 'applications':
            return (
                <div className="secondary-navigation">Applications</div>
            )
        case 'courses':
            return (
                <div className="secondary-navigation">Courses</div>
            )
        case 'kudoz':
            return (
                <div className="secondary-navigation">KudoZ</div>
            )
        case 'teams':
            return (
                <div className="secondary-navigation">Teams</div>
            )
        case 'contacts':
            return (
                <div className="secondary-navigation">Contacts</div>
            )
        case 'notifications':
            return (
                <div className="secondary-navigation">Notifications</div>
            )
        case 'settings':
            return (
                <div className="secondary-navigation">Settings</div>
            )
        default:
            return (
                <div className="secondary-navigation">Home</div>
            )

    }
}

export default SecondaryNavigation
