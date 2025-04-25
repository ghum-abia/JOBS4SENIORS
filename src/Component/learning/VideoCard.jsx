import { useState } from "react";
import PropTypes from 'prop-types';
import { Message } from "./Message.jsx";
import avatar from "../../assets/learning/pexels-steve-1266808.jpg"
import { MdStarRate as StarRating } from "react-icons/md";
import { RatingProgress } from "../RatingProgress.jsx";

export const VideoCard = ({ title, topic, lecturer, category, /*duration,*/  rating, /*progress,*/ imageurl }) => {
      const [selection, setSelection] = useState("overview");
      const [newMessage, setNewMessage] = useState('')
      let handleSelection = (e) => {
            let selection = e.target.id;
            setSelection(selection);
      }; ``
      let time = "2hrs ago"
      let user = "Chukwuemeka Azor";
      let message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel egestas dolor, nec dignissim metus. Donec augue elit, rhoncus ac sodales id, porttitor vitae est. Donec laoreet rutrum libero sed pharetra."
      return (
            <>
                  <div className="bg-transparent rounded-t-4xl  w-[100%] h-full">
                        <div className=" rounded-t-4xl bg-black">
                              { }
                              <video src="/tst.mp4" className="rounded-t-2xl  h-70 w-full object-contain" controls/>
                        </div>
                        <div className=" py-2 grid gap-3">
                              <div className="text-black font-bold">{title} - {topic}</div>
                              <div className="flex justify-between text-sm text-grayish font-bold w-60">
                                    <span className="capitalize">{lecturer}</span>|
                                    <span className="capitalize" >{category}</span>|
                                    <span className="text-green-400" >Follow+</span>
                                    <span className="flex"><StarRating className="text-yellow-500" size={19} />{rating}</span>
                              </div>

                        </div>

                        {/**tabs */}
                        <div className="flex gap-7 cursor-pointer">
                              <p
                                    onClick={handleSelection} id="overview"
                                    className={selection === "overview"
                                          ? "text-grayish capitalize text-sm border-b-1 border-green-400 font-bold"
                                          : "text-grayish capitalize text-sm font-bold"
                                    }
                              >
                                    Overview
                              </p>
                              <p
                                    onClick={handleSelection} id="discussions"
                                    className={selection === "discussions"
                                          ? "text-grayish capitalize text-sm border-b-1 border-green-400 font-bold"
                                          : "text-grayish capitalize text-sm font-bold"
                                    }
                              >
                                    Discussion
                              </p>
                              <p
                                    onClick={handleSelection} id="review"
                                    className={selection === "review"
                                          ? "text-grayish capitalize text-sm border-b-1 border-green-400 font-bold"
                                          : "text-grayish capitalize text-sm font-bold"
                                    }
                              >
                                    Review
                              </p>
                        </div>


                        {/**oveview content */}
                        {selection === 'overview' ?
                              <div className='py-4 grid gap-2' >
                                    <div >
                                          <h1 className="font-bold text-lg">Course Description</h1>
                                          <p className="text-sm text-grayish">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>

                                    <div >
                                          <h1 className="font-bold text-lg">Course Outcomes</h1>
                                          <ul className="list-disc pl-5 grid grid-cols-2 gap-1 text-sm text-gray-600">
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                                <li>Lorem ipsum dolor sit amet</li>
                                          </ul>

                                    </div>

                                    <div>
                                          <h1 className="font-bold text-lg">Audience</h1>
                                          <p className="text-sm text-grayish">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    </div>
                              </div> : ''
                        }
                        {/**oveview content */}


                        {/**discussions content */}
                        {selection === 'discussions' ?
                              <div className="py-4 grid gap-6" >

                                    <Message user={user} time={time} message={message} avatar={avatar} />
                                    <Message user={user} time={time} message={message} avatar={avatar} />
                                    <div className="flex justify-between mt-3">
                                          <input type="" name="newMessage" placeholder="Type Message . . ." onChange={(e) => setNewMessage(e.target.value)} value={newMessage} className="bg-white w-[87%] px-5 rounded-md focus:ring-flag-green focus:ring-1" />
                                          <button className="capitalize bg-flag-green text-white hover:opacity-90 px-3 py-2 rounded-md active:bg-white active:text-flag-green active:ring-flag-green active:ring-1"> send</button>
                                    </div>


                              </div> : ""
                        }
                        {/**discussions content */}

                        {/**review content */}
                        {selection === 'review' ?

                              <div className="py-4 grid gap-3" >
                                    <div className="space-y-1">
                                          <div className="py-6 flex  gap-10">
                                                <div className="w-1/4 text-center">
                                                      <h3 className="text-lg font-extrabold text-gray-700 mb-2">Average Rating</h3>

                                                      <div className=" bg-yellow-100 p-3 rounded-lg flex flex-col items-center justify-center">
                                                            <div className="text-2xl font-extrabold mb-1">4.4</div>
                                                            <div className="flex text-yellow-500">
                                                                  <StarRating className="fill-current" size={19} />
                                                                  <StarRating className="fill-current" size={19} />
                                                                  <StarRating className="fill-current" size={19} />
                                                                  <StarRating className="fill-current" size={19} />
                                                                  <StarRating className="text-gray-300" size={19} />
                                                            </div>
                                                            <div className="text-gray-500 mt-2">Rating</div>
                                                      </div>
                                                </div>
                                                <div className="w-[70%] pl-8">
                                                      <h3 className="text-lg font-extrabold text-gray-700 mb-4">Detailed Rating</h3>

                                                      <div className="space-y-3">
                                                            <div className="flex items-center">
                                                                  <span className="w-8 text-gray-500 text-sm">57%</span>
                                                                  <div className="flex text-yellow-500 mr-3">
                                                                        <StarRating className="fill-current" size={19} />
                                                                        <StarRating className="fill-current" size={19} />
                                                                        <StarRating className="fill-current" size={19} />
                                                                        <StarRating className="fill-current" size={19} />
                                                                        <StarRating className="fill-current" size={19} />
                                                                  </div>
                                                                  <RatingProgress value="57" />
                                                            </div>

                                                            <div className="flex items-center">
                                                                  <span className="w-8 text-gray-500 text-sm">26%</span>
                                                                  <div className="flex text-yellow-500 mr-3">
                                                                        <StarRating className="fill-current" size={19} />
                                                                        <StarRating className="fill-current" size={19} />
                                                                        <StarRating className="fill-current" size={19} />
                                                                        <StarRating className="fill-current" size={19} />
                                                                        <StarRating className="text-gray-300" size={19} />
                                                                  </div>
                                                                  <RatingProgress value="26" />
                                                            </div>

                                                            <div className="flex items-center">
                                                                  <span className="w-8 text-gray-500 text-sm">12%</span>
                                                                  <div className="flex text-yellow-500 mr-3">
                                                                        <StarRating className="fill-current" size={19} />
                                                                        <StarRating className="fill-current" size={19} />
                                                                        <StarRating className="fill-current" size={19} />
                                                                        <StarRating className="text-gray-300" size={19} />
                                                                        <StarRating className="text-gray-300" size={19} />
                                                                  </div>
                                                                  <RatingProgress value="12" />
                                                            </div>

                                                            <div className="flex items-center">
                                                                  <span className="w-8 text-gray-500 text-sm">3%</span>
                                                                  <div className="flex text-yellow-500 mr-3">
                                                                        <StarRating className="fill-current" size={19} />
                                                                        <StarRating className="fill-current" size={19} />
                                                                        <StarRating className="text-gray-300" size={19} />
                                                                        <StarRating className="text-gray-300" size={19} />
                                                                        <StarRating className="text-gray-300" size={19} />
                                                                  </div>
                                                                  <RatingProgress value="3" />
                                                            </div>

                                                            <div className="flex items-center">
                                                                  <span className="w-8 text-gray-500 text-sm">2%</span>
                                                                  <div className="flex text-yellow-500 mr-3">
                                                                        <StarRating className="fill-current" size={19} />
                                                                        <StarRating className="text-gray-300" size={19} />
                                                                        <StarRating className="text-gray-300" size={19} />
                                                                        <StarRating className="text-gray-300" size={19} />
                                                                        <StarRating className="text-gray-300" size={19} />
                                                                  </div>                                                                  

                                                                        <RatingProgress value="2"/>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>



                              </div> : ""
                        }
                        {/**review content */}

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
      category: PropTypes.number.isRequired,
      imageurl: PropTypes.string.isRequired
}