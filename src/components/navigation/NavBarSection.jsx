import { Link } from 'react-router-dom'

export default function NavBarSerction({listItems, sectionTitle, id, showMore}) {
    return (
        <div className="collapse navbar-collapse d-flex flex-column align-items-center justify-content-start navbar-section-proz" id={id}>
            {sectionTitle && (<h3>{sectionTitle}</h3>)}
                    <ul className="navbar-nav d-flex flex-column w-full align-items-start justify-content-start primaryDashboardNavigation">
                        {
                            listItems.map(item => {
                            return(
                            <li key={item.name} className="nav-item w-full py-2">
                                <Link to={item.route} role="tooltip" data-bs-tooltip="Home" className="nav-link d-flex align-items-center justify-content-start  w-full overflow-hidden text-white">
                                    {item.icon}
                                    <p>{item.name}</p>
                                </Link>
                            </li>)
                            })
                        }
                        {
                            showMore && (
                                <li className="nav-item w-full py-2">
                                    <a href="#showmore" className="nav-link d-flex align-items-center justify-content-start  w-full overflow-hidden text-white">
                                        <p>Show more</p>
                                    </a>
                                </li>
                            )
                        }

                    </ul>
                </div>
    )
}
