import { useState } from "react"
import { TimeLineContex } from "./Contex"

const TimelineContexProvider=({children})=>{
    const [timeLineData,setTimelineData]=useState([])

    return(
         <TimeLineContex.Provider value={{timeLineData,setTimelineData}}>
            {children}
         </TimeLineContex.Provider>
    )

}
export default TimelineContexProvider;