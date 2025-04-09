import { GoldStar } from "../../Component/learning/GoldStar.jsx"
import Progress from '../progressbar.jsx';
import { LuClock12 } from "react-icons/lu";
import { RiUserLine } from "react-icons/ri";
import PropTypes from 'prop-types';

export const VideoCard = ({ title, topic, lecturer, duration, rating, progress, imageurl }) => {
      return (
            <>
                  <div className="bg-white rounded-lg shadow-sm w-[96%]">
                        <div className="relative grid items-center">
                              <img className="rounded-t-lg  h-60 w-full object-fill" src={imageurl} alt="" />
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

                                    <div className="w-[130px] h-10 pt-2.5"><Progress value={progress} color="green" /></div>
                              </div>

                        </div>
                  </div >

            </>
      )
}

VideoCard.propTypes = {
      title: PropTypes.string.isRequired,
      topic: PropTypes.string.isRequired,
      lecturer: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      progress: PropTypes.number.isRequired,
      imageurl: PropTypes.string.isRequired
}