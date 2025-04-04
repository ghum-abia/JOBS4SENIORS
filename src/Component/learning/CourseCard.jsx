import { GoldStar } from "../../Component/learning/GoldStar.jsx"
import Progress from '../progressbar.jsx';
import { FaPlay } from 'react-icons/fa';
import { LuClock12 } from "react-icons/lu";
import { RiUserLine } from "react-icons/ri";
import PropTypes from 'prop-types';

export const Card = ({ title, topic, lecturer, duration, rating, progress, imageurl }) => {
      const Play = () => {
            alert('Play button clicked');
      }
      return (
            <>
                  <div className="max-w-sm bg-white rounded-lg shadow-sm ">
                        <div className="relative grid items-center">
                              <img className="rounded-t-lg " src={imageurl} alt="" />
                              <div className="absolute justify-center flex w-full">
                                    <FaPlay className="text-[#ffffffdc] w-10 h-10" onClick={Play} />
                              </div>
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

Card.propTypes = {
      title: PropTypes.string.isRequired,
      topic: PropTypes.string.isRequired,
      lecturer: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      progress: PropTypes.number.isRequired,
      imageurl: PropTypes.string.isRequired
}