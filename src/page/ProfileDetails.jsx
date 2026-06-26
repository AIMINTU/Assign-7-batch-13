
import { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { TimeLineContex } from '../context/Contex';
import { toast } from 'react-toastify';
import callimg from '../assets/call.png'
import timg from '../assets/text.png'
import vimg from '../assets/video.png'
import simg from '../assets/BellSimpleZ.png'
import Aimg from '../assets/Vector.png'
import dimg from '../assets/Trash.png'

const ProfileDetails = () => {
    const friend = useLoaderData()
    const { id } = useParams()
    const user = friend.find(friend => friend.id === parseInt(id))

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
        <div className=' container mx-auto'>


            <div className="grid grid-cols-4 gap-20 p-6">

                <div>
                    {/* User Info */}

                    <div className=' row-span-3'>
                        <div className=" border rounded-lg shadow p-4">
                            <img
                                width={300}
                                height={200}
                                src={user.pictureUrl}
                                alt=""
                                className="rounded-lg mb-3"
                            />
                            <h3 className="font-semibold">Name: {user.name}</h3>
                            <p>Bio: {user.bio}</p>
                            <p>Tag: {user.tag}</p>
                            <p>User Id: {id}</p>
                        </div>

                        {/* Snooze */}
                        <div className="flex items-center gap-2 border rounded-lg shadow p-4">
                            <img src={simg} alt="Snooze-icon" />
                            <p>Snooze 3 weeks</p>
                        </div>

                        {/* Archive */}
                        <div className="flex items-center gap-2 border rounded-lg shadow p-4">
                            <img src={Aimg} alt="Archive-icon" />
                            <p>Archive</p>
                        </div>

                        {/* Delete */}
                        <div className="flex items-center gap-2 border rounded-lg shadow p-4">
                            <img src={dimg} alt="delete-icon" />
                            <p className="text-red-500 font-semibold">Delete</p>
                        </div>
                    </div>


                    <div className="cols-span-3 gap-4 ">
                        <div className="text-center border rounded-lg shadow p-4">
                            <p className="text-2xl font-bold">{user.daysSinceContact}</p>
                            <p>Days Since Contact</p>
                        </div>

                        <div className="text-center border rounded-lg shadow p-4">
                            <p className="text-2xl font-bold">{user.goal}</p>
                            <p>Goal (Days)</p>
                        </div>

                        <div className="text-center border rounded-lg shadow p-4">
                            <p className="text-2xl font-bold">{user.nextDueDate}</p>
                            <p>Next Due</p>
                        </div>
                    </div>
                    <div>
                        {/* Relationship Goal */}
                        <div className="border rounded-lg shadow p-4">
                            <p className="font-semibold mb-2">Relationship Goal</p>
                            <div>Connect every 30 days</div>
                            <button className="mt-2 text-blue-500">Edit</button>
                        </div>
                    </div>

                    <div className='col-span-3'>

                        {/* Call */}
                        <button
                            onClick={() => handleCallData("Call", user)}
                            className="flex items-center justify-center gap-2 border rounded-lg shadow p-4 hover:bg-gray-100"
                        >
                            <img src={callimg} alt="Call" className="w-5 h-5" />
                            Call
                        </button>

                        {/* Text */}
                        <button
                            onClick={() => handleCallData("text", user)}
                            className="flex items-center justify-center gap-2 bg-blue-500 text-white rounded-lg p-4"
                        >
                            <img src={timg} alt="Text" className="w-5 h-5" />
                            Text
                        </button>

                        {/* Video Call */}
                        <button
                            onClick={() => handleCallData("video-call", user)}
                            className="flex items-center justify-center gap-2 bg-green-500 text-white rounded-lg p-4"
                        >
                            <img src={vimg} alt="Video Call" className="w-5 h-5" />
                            Video Call
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;