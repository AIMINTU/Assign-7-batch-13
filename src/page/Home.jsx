import { use } from "react";
import SingleFriend from "../components/friends/SingleFriend";
import { FaPlus } from "react-icons/fa";

const FriendPromise = fetch('/friends.json').then(res => res.json())


const Home = () => {
    const Friends = use(FriendPromise)
    console.log(Friends)
    return (
        <div className="w-4xl mx-auto py-5">
            <div className="text-center m-10">
                <h2 className=" text-xl font-bold">Friends to keep close in your life</h2>
                <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the
                    relationships that matter most.</p>

                <button className="flex bg-[#244D3F] ml-100 font-semibold"><span className="mt-1"><FaPlus /></span>Add a Friend</button>
            </div>
            {/* card section */}
            <div className=" grid grid-cols-4 gap-4 py-3 text-center">
                <div className="shadow">
                    <h2>12</h2>
                    <p>Total Friends</p>
                </div>
                <div className="shadow">
                    <h2>3</h2>
                    <p>On track</p>
                </div>
                <div className="shadow">
                    <h2>5</h2>
                    <p>No Attention</p>
                </div>
                <div className="shadow">
                    <h2>4</h2>
                    <p>Intractions this month</p>
                </div>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 bg-gradient-to-br from-gray-200 b-2 p-1O py-3">


                {
                    Friends.map(friend => <SingleFriend key={friend.id} friend={friend}></SingleFriend>)
                }
            </div>
        </div>
    );
};

export default Home;