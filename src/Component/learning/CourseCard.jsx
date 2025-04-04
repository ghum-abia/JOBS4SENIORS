import { GoldStar } from "../../Component/learning/GoldStar.jsx"
import Progress from '../progressbar.jsx';
import { FaPlay } from 'react-icons/fa';
import { LuClock12 } from "react-icons/lu";
import { RiUserLine } from "react-icons/ri";



export const Card = ({ title, topic, lecturer, duration, rating, progress, imageurl }) => {
      return (
            <>
                  <div className="max-w-sm bg-white rounded-lg shadow-sm ">
                        <div >
                              <img className="rounded-t-lg " src={imageurl} alt="" />
                        </div>
                        <div className="px-4 py-4 grid gap-3">
                              <div className="text-black font-bold">{title} - {topic}</div>
                              <div className="flex justify-between text-sm text-[#00000075] font-bold">
                                    <span className="flex gap-1"><RiUserLine className="mt-1 " />{lecturer}</span>
                                    <span className="flex gap-1" ><LuClock12 className="mt-1" />{duration}</span>
                                    <span className="flex"><GoldStar className="w-4 h-5react " />{rating}</span>
                              </div>
                              <div className="flex w-full justify-between">
                                    <span className="text-black text-sm">{progress}% Complete</span>
                                    <FaPlay className="absolute top-1/2 left-1/2 text-white w-10 h-10 -translate-x-1/2 -translate-y-1/2" />

                                    <div className="w-[130px] h-10 pt-2.5"><Progress value={progress} color="green" /></div>
                              </div>

                        </div>
                  </div >

            </>
      )
}