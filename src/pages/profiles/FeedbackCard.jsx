import "./FeedbackCard.css";
import { FiStar } from "react-icons/fi";

export default function FeedbackCard() {
    return (
        <div className="profile-feedback-card">
            <div className="d-flex gap-1 feedback-items">
                <h3>4.8</h3>
                <div>
                    <ul className="d-flex">
                        <li><FiStar size={20} fill={"#FDD65B"}/></li>
                        <li><FiStar size={20} fill={"#FDD65B"}/></li>
                        <li><FiStar size={20} fill={"#FDD65B"}/></li>
                        <li><FiStar size={20}/></li>
                        <li><FiStar size={20}/></li>
                    </ul>
                    <p>8 Reviews</p>
                </div>
            </div>
        </div>
    )
}
