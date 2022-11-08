import { FiSend, FiPhone, FiFileText } from "react-icons/fi"
import "./ActionButtons.css";

export default function ActionButtons() {
    return(
        <div className="profile-header-action-items d-flex gap-2 flex-column">
            <div className="contact-button d-flex align-items-center gap-1 action-main">
                <FiFileText />
                <p>Invite to project</p>
            </div>
            <div className="contact-button d-flex align-items-center gap-1 action-secondary">
                <FiPhone />
                <p>Start a call</p>
            </div>
            <div className="contact-button d-flex align-items-center gap-1 action-secondary">
                <FiSend />
                <p>Contact user</p>
            </div>
        </div>
    )
}