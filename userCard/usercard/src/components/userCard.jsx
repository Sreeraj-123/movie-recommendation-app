import "../css/userCard.css"
const UserCard = (props) => {
    return(
        <div className="card">
            <h3>{props.Name}</h3>
            <p>{props.email}</p>
        </div>
    )
}

export default UserCard;