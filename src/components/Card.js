export default function Card(props) {
    let badgeTxt
    if (props.openSpots === 0){
        badgeTxt = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeTxt = "Online"
    }

    return (
        <div className="card">
            {
                badgeTxt &&
                <div className="card--badge">{badgeTxt}</div>
            }
            <img 
                src={`../images/${props.coverImg}`}
                className="card--image" alt="Cover Photo" 
            />

            <div className="card--stats">
                <img src="../images/star.png" className="card--star" alt="Star Rating"/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}