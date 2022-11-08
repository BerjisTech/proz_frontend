import "./ProfileStats.css"

export default function ProfileStats({statsData}) {
    const sortedData = statsData.sort((a, b) => (a.points < b.points) ? 1 : -1)

    return (
        <div className="profile-stats">
            {
                sortedData.map(data => 
                    
                <div className="profile-stats-box">
                    <h3 className="profile-stats-box-title">{data.title}</h3>
                    <p className="profile-stats-box-points">{data.points}</p>
                </div>
                    )
            } 
        </div>
    )
}