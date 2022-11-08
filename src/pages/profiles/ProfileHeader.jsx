export default function ProfileHeader({
    name,
    member,
    tagline,
    nativeLanguage,
    location,
    imageLink,
    memberStartDate,
    certifiedPro,
    profileTags
    }) {
    return(
        <div className="">
            <div className="d-flex flex-column">
                <div className="profile-header-presentation position-relative d-flex">
                    <div>
                        <img src={imageLink} className="profile-header-picture" alt={imageLink} />
                    </div>
                    <div className="profile-header-badges">
                        <div className="d-flex">
                            <h1>{name}</h1>
                            {
                                member &&

                                <img src="/images/icons/Membership-Std.svg" className="membership-ribbon" alt="Membership-Std" />
                            }
                        </div>
                        <div>
                            <p>{tagline}</p>
                        </div>
                        <div className="profile-header-tags d-flex gap-1">
                            {
                                certifiedPro &&

                                <div className="cpn-pill">
                                    <div className="d-flex cpn-pill-items">
                                        <p>Certified PRO</p>
                                        <img src="/images/icons/CPN-@600ppi.png" className="membership-ribbon" alt="Membership-Std" />
                                    </div>
                                </div>
                            }
                            {
                                profileTags.map(e =>

                                <div className="cpn-pill">
                                    <div className="d-flex cpn-pill-items">
                                        <p>#</p>
                                        <p>{e}</p>
                                    </div>
                                </div>

                                    )
                            }
                        </div>
                        <div className="d-flex gap-1 align-items-center">
                                <p>{nativeLanguage.name}</p>
                                {
                                    nativeLanguage.verified &&

                                    <img src="/images/icons/native_verified.gif" className="native-icon" alt="native_verified" />
                                }
                        </div>
                        <div className="member-since">
                            <p>Member since {memberStartDate}</p>
                        </div>
                        <div className="profile-badges-bottom d-flex gap-5">
                            <div className="d-flex gap-1 profile-header-location">
                                <img src="/images/icons/location-sign-svgrepo-com.svg" className="location-icon" alt="location-sign-svgrepo-com" />
                                <p>{location.city}, {location.region}, {location.country}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
