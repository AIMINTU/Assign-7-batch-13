
import { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { TimeLineContex } from '../context/Contex';
import { toast } from 'react-toastify';
import callimg from '../assets/call.png'
import timg from '../assets/text.png'
import vimg from '../assets/video.png'

const ProfileDetails = () => {
    const friend = useLoaderData()
    const { id } = useParams()
    const user = friend.find(friend => friend.id === parseInt(id))
    console.log(user)
    const { timeLineData, setTimelineData } = useContext(TimeLineContex)
    const handleCallData = (type, userDetails) => {
        const newData = {
            ...userDetails,
            action: type,
            time: new Date().toISOString()

        }
        setTimelineData([...timeLineData, newData])
        toast.success("Data load successfully")

    }

    return (
        <div className=' ml-50'>
            <img width={300} height={200} src={user.pictureUrl} alt="" />
            <h3>Name:{user.name}</h3>
            <p>Bio:{user.bio}</p>
            <p>Tag:{user.tag}</p>
            <p>User Id:{id}</p>
            <div className="flex items-center py-5 gap-4">
                <div className= 'btn btn-active btn-info w-30 text-center shadow'>
                    <img
                        src={callimg}
                        alt="Call"
                        className="w-4 h-4 items-center"
                    />
                    <p onClick={() => handleCallData("Call", user)}> call</p>
                </div>
                <button onClick={() => handleCallData("text", user)} className="btn btn-active btn-info w-30"> <img
                        src={timg}
                        alt="Call"
                        className="w-4 h-4 items-center"
                    />Text</button>
                <button onClick={() => handleCallData("video-call", user)} className="btn btn-active btn-info w-30"> <img
                        src={vimg}
                        alt="Call"
                        className="w-4 h-4 items-center"
                    />Video Call</button>
            </div>

        </div>
    );
};

export default ProfileDetails;