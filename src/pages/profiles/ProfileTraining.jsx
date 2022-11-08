import "./ProfileTraining.css";
import { FiArrowLeft, FiArrowRight, FiCheckCircle } from "react-icons/fi";

export default function ProfileTraining() {
    return (
        <div className="profile-training">
            <h2>Training and Professional Development</h2>
            <div className="profile-training-courses">

                <div className="profile-training-course">
                    <div className="profile-training-image">
                        <img src="/images/schoolLogos/logo-pi.png" alt="" />
                    </div>
                    <div className="profile-training-description">
                        <div>
                            <h3>University of Warsaw</h3>
                            <ul>
                                <li>English <span>{<FiArrowLeft/>}{<FiArrowRight/>}</span> Czech</li>
                            </ul>
                            <p>This was my bachelor's degree, I learned everything about English to Czech translation</p>
                        </div>
                    </div>
                    <div className="profile-training-verified">
                        <p>Verified</p>
                        <FiCheckCircle />
                    </div>
                </div>

                <div className="profile-training-course">
                    <div className="profile-training-image">
                        <img src="https://pbs.twimg.com/profile_images/1151905246073053189/cZLu6vip_400x400.jpg" alt="" />
                    </div>
                    <div className="profile-training-description">
                        <div>
                            <h3>ProZ.com Training</h3>
                            <ul>
                                <li>English <span>{<FiArrowLeft/>}{<FiArrowRight/>}</span> Czech</li>
                            </ul>
                            <p>This was a subtitling course for Czech translator offered by ProZ.com, thank you guys!</p>
                        </div>
                    </div>
                    <div className="profile-training-verified">
                        <p>Verified</p>
                        <FiCheckCircle />
                    </div>
                </div>

                <div className="profile-training-course">
                    <div className="profile-training-image">
                        <img src="http://www.acta-cz.org/images/en_logo.gif" alt="" />
                    </div>
                    <div className="profile-training-description">
                        <div>
                            <h3>Association of Czech Translation Agencies</h3>
                            <ul>
                                <li>English <span>{<FiArrowLeft/>}{<FiArrowRight/>}</span> Czech</li>
                            </ul>
                            <p>Short course on how to translate pharmaceutical terms into English.</p>
                        </div>
                    </div>
                    <div className="profile-training-verified">
                        <p>Verified</p>
                        <FiCheckCircle />
                    </div>
                </div>
            </div>
            <p>Interested in more training? Click here</p>
        </div>
    )
}