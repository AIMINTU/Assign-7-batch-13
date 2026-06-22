import { useContext } from "react";
import { NavLink } from "react-router";
import { TimeLineContex } from "../../context/Contex";
import logob from '../../assets/logo.png'
import himg from '../../assets/Vector.png'
import timg from '../../assets/Clock.png'
import cimg from '../../assets/ChartLine.png'


const NavBar = () => {
  const { timeLineData } = useContext(TimeLineContex)

  return (
    <div className="w-4xl mx-auto py-5 flex justify-between">
      <img src={logob} alt="logo" />

      <div className=" flex gap-5">

        <div className="flex items-center gap-1">
          <img className="text-amber-400" src={himg}></img>
          <NavLink to={"/"} className={({ isActive }) => isActive ? ' text-blue-700' : ""}> Home</NavLink>
        </div>

        <div className="flex items-center gap-1">
          <img className="text-gray-400" src={timg} alt="" />
          <NavLink to={"/timeline"} className={({ isActive }) => isActive ? 'flex items-center gap-1 text-blue-500' : ""}> Timeline({timeLineData.length})</NavLink>
        </div>

        <div className="flex items-center gap-1">
          <img className="text-gray-400" src={cimg} alt="chart-image" />

          <NavLink to={"/status"} className={({ isActive }) => isActive ? ' text-blue-700' : ""}>Status({timeLineData.length})</NavLink>
        </div>

      </div>
    </div>
  );
};

export default NavBar;