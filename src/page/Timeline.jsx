import { useContext } from "react";
import { TimeLineContex } from "../context/Contex";


const Timeline = () => {
     const {timeLineData}=useContext(TimeLineContex)
     
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-xl font-bold mb-4">Time line</h1>
            {
                timeLineData.length===0?(<p>No data avaoilable</p>):(
                    timeLineData.map((user,index)=>(
                        <div key={index} className="bg-red-100 p-5 mb-4 rounded-lg shadow flex gap-4 item-center">
                            <img src={user.pictureUrl} alt={user.name} />
                            <div className="py-10 text-center">
                                <h2 className="text-xl font-Bold text-blue-500">Name:{user.name}</h2>
                                < p className="text-md text-gray-500">Call type:{user.action}</p>
                                <p className="text-md text-gray-500">Localtime:{new Date(user.time).toLocaleString()}</p>
                            </div>

                        </div>
                    ))
                )
            }
            
        </div>
    );
};

export default Timeline;