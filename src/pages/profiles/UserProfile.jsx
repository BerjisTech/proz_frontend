import "./UserProfile.css";
import FeedbackCard from "./FeedbackCard";
import ProfileHeader from "./ProfileHeader";
import ActionButtons from "./ActionButtons";
import ProfileWiwos from "./ProfileWiwos";
import ProfileStats from "./ProfileStats";
import ProfileTraining from "./ProfileTraining";

export default function UserProfile() {
    return (
        <div className="user-profile-frame">
            <div className="container">
                <div className="user-profile-presentation">
                    <ProfileHeader
                        name={"John Smith"}
                        tagline={"Pharmaceutical specialized | exp 10y+"}
                        nativeLanguage={{name: "Turkish", verified: true}}
                        location={{city: "La Plata", region: "Buenos Aires", country: "Argentina"}}
                        imageLink={"/images/avatars/avatar.jpg"}
                        memberStartDate={"December 2018"}
                        member={true}
                        certifiedPro={true}
                        profileTags={["Conference speaker", "Trainer", "Contest winner"]}
                    />
                    <div className="">
                        <ActionButtons />
                        <FeedbackCard />
                    </div>
                </div>
            </div>
            <div className="container secondary-information">
                <ProfileWiwos
                    name={"John Smith"}
                    date={"September 3rd at 14:44"}
                    content={"Translating a book about Bitcoin; English to Czech, approx. 30,000 words."}
                    blockquote={"Bitcoin, book, monetary assets"}
                    projectDetails={["English to Czech", "30000 words"]}
                    projectFields={["Business/Commerce (general)", "Computers: Systems"]}
                />
            </div>
            <div className="container">
                <ProfileStats 
                    statsData={[
                        {
                            title: "KudoZ terminology points",
                            points: 1528
                        },
                        {
                            title: "Words translated",
                            points: 432002
                        },
                        {
                            title: "Hours of interpretation",
                            points: 326
                        },
                        {
                            title: "BlueBoard entries",
                            points: 9
                        },
                        {
                            title: "Years of experience",
                            points: 5
                        },
                        {
                            title: "Verified identity",
                            points: "✓"
                        },
                        {
                            title: "Projects completed",
                            points: 122,
                        },
                        {
                            title: "ProZ*Pay payments",
                            points: "✓"
                        }
                    ]}
                
                />
            </div>
            <div className="container">
                <ProfileTraining />
            </div>
            <div className="container">

            </div>
        </div>
    )
}