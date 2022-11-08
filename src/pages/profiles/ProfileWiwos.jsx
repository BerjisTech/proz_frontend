import "./ProfileWiwo.css";
import ProfileLanguages from "./ProfileLanguages";

export default function ProfileWiwos({name, date, content, blockquote, projectDetails, projectFields}) {
    return(
        <div className="profile-wiwos">
            <p className="profile-wiwos-date">{date}</p>
            <h2>{name} wiwoed:</h2>
            <div className="profile-wiwos-elements">
                <div className="profile-wiwo-content">
                    <p>
                    {content}
                    </p>
                    <blockquote>
                    {blockquote}
                    </blockquote>
                    <ul>
                        {projectDetails.map(e => <li>{e}</li>)}
                    </ul>
                    <ul>
                        <li>#</li>
                        {projectFields.map(e => <li>{e}</li>)}
                    </ul>
                </div>
                <ProfileLanguages />
            </div>
        </div>
    )
}