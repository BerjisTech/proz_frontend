import { FiMessageCircle } from 'react-icons/fi';
import './MessageIcon.css';
import { Link } from 'react-router-dom';

export default function MessageIcon() {
    return(
        <Link to="/dashboard/messages">
            <FiMessageCircle/>
        </Link>
        
    )
}