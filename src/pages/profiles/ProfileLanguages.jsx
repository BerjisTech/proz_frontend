import "./ProfileLanguages.css";
import { FiArrowLeft, FiArrowRight, FiChevronDown } from "react-icons/fi";

export default function ProfileLanguages() {
    return (
        <div className="profile-languages">
            <div>
                <h3>Working languages</h3>
            </div>
            <ul>
                <li>English <span>{<FiArrowLeft/>}{<FiArrowRight/>}</span> Czech</li>
                <li>English <span>{<FiArrowRight/>}</span> Polish</li>
                <li>English <span>{<FiArrowRight/>}</span> Slovak</li>
                <li>More <span>{<FiChevronDown />}</span></li>
            </ul>
            
        </div>
    )
}