import { Link } from "react-router";



const SingleFriend = ({ friend }) => {
    const { name,tag,daysSinceContact,pictureUrl } = friend

    return (
        <div>
            <Link to={`/userDetails/${friend.id}`}>
                <img className="w-full" src={pictureUrl} alt="friend_picture" />
                <h3>Name: {name}</h3>
                <p>{daysSinceContact}</p>
                <p>{tag}</p>

                
            </Link>
        </div>
    );
};

export default SingleFriend;