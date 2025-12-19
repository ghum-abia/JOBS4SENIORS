import Navbar from "../../Component/DashboardNavbar.jsx";
import LeftSidebar from "../../Component/DashboardSidebar.jsx";
import { Card } from "../../Component/learning/CourseCard.jsx";
import image from "/tst.mp4"

const Learning = () => {
      let videos = [
            {
                  id: 1,
                  thumbnail: { image },
                  videourl: "/tst.mp4",
                  category: 'law',
                  title: 'Audit Law Forensics',
                  topic: 'A Standard Operating Procedure',
                  name: 'Roy Davis',
                  duration: '5 hrs',
                  rating: 4.4,
                  progress: 90,
            },
            {
                  id: 2,
                  thumbnail: { image },
                  videourl: "/tst.mp4",
                  title: 'Audit Law Forensics',
                  category: 'law',
                  topic: 'A Standard Operating Procedure',
                  name: 'Roy Davis',
                  duration: '5 hrs',
                  rating: 4.4,
                  progress: 90,
            },
            {
                  id: 3,
                  thumbnail: { image },
                  videourl: "/tst.mp4",
                  title: 'Audit Law Forensics',
                  category: 'law',
                  topic: 'A Standard Operating Procedure',
                  name: 'Roy Davis',
                  duration: '5 hrs',
                  rating: 4.4,
                  progress: 90,
            },
            {
                  id: 4,
                  thumbnail: { image },
                  videourl: "/tst.mp4",
                  title: 'Audit Law Forensics',
                  category: 'law',
                  topic: 'A Standard Operating Procedure',
                  name: 'Roy Davis',
                  duration: '5 hrs',
                  rating: 4.4,
                  progress: 90,
            },
            {
                  id: 5,
                  thumbnail: { image },
                  videourl: "/tst.mp4",
                  title: 'Audit Law Forensics',
                  category: 'law',
                  topic: 'A Standard Operating Procedure',
                  name: 'Roy Davis',
                  duration: '5 hrs',
                  rating: 4.4,
                  progress: 90,
            },
            {
                  id: 6,
                  thumbnail: { image },
                  videourl: "/tst.mp4",
                  title: 'Audit Law Forensics',
                  category: 'law',
                  topic: 'A Standard Operating Procedure',
                  name: 'Roy Davis',
                  duration: '5 hrs',
                  rating: 4.4,
                  progress: 90,
            },
            {
                  id: 7,
                  thumbnail: { image },
                  videourl: "/tst.mp4",
                  title: 'Audit Law Forensics',
                  category: 'law',
                  topic: 'A Standard Operating Procedure',
                  name: 'Roy Davis',
                  duration: '5 hrs',
                  rating: 4.4,
                  progress: 90,
            },
            {
                  id: 8,
                  thumbnail: { image },
                  videourl: "/tst.mp4",
                  title: 'Audit Law Forensics',
                  category: 'law',
                  topic: 'A Standard Operating Procedure',
                  name: 'Roy Davis',
                  duration: '5 hrs',
                  rating: 4.4,
                  progress: 90,
            },
            {
                  id: 9,
                  thumbnail: { image },
                  videourl: "/tst.mp4",
                  title: 'Audit Law Forensics',
                  category: 'law',
                  topic: 'A Standard Operating Procedure',
                  name: 'Roy Davis',
                  duration: '5 hrs',
                  rating: 4.4,
                  progress: 90,
            },
            {
                  id: 10,
                  thumbnail: { image },
                  videourl: "/tst.mp4",
                  title: 'Audit Law Forensics',
                  category: 'law',
                  topic: 'A Standard Operating Procedure',
                  name: 'Roy Davis',
                  duration: '5 hrs',
                  rating: 4.4,
                  progress: 90,
            },
            {
                  id: 11,
                  thumbnail: { image },
                  videourl: "/tst.mp4",
                  title: 'Audit Law Forensics',
                  category: 'law',
                  topic: 'A Standard Operating Procedure',
                  name: 'Roy Davis',
                  duration: '5 hrs',
                  rating: 4.4,
                  progress: 90,
            },
            {
                  id: 12,
                  thumbnail: { image },
                  videourl: "/tst.mp4",
                  title: 'Audit Law Forensics',
                  category: 'law',
                  topic: 'A Standard Operating Procedure',
                  name: 'Roy Davis',
                  duration: '5 hrs',
                  rating: 4.4,
                  progress: 90,
            },
      ];
      return (
            < >
                  <div className='grid gap-4 mt-16 bg-gray-100 pb-10 h-full'>
                        <div className='hidden lg:block '>
                              < Navbar />
                        </div>
                        <div className='flex flex-col lg:flex-row justify-between px-20'>
                              {/* Left Sidebar */}
                              <aside className="w-[25%] hidden lg:block relative " >
                                    <LeftSidebar />
                              </aside>
                              <div className='w-[75%] space-y-5'>
                                    <ul className="flex justify-evenly bg-white rounded-lg w-[45%]">
                                          <li className="text-[#00000075] text-[14px] font-normal px-2 py-3 text-center bg-white hover:bg-flag-green hover:text-white rounded-md w-30">All Courses</li>
                                          <li className="text-[#00000075] text-[14px] font-normal bg-white px-2 py-3 text-center text  hover:bg-flag-green hover:text-white w-40 rounded-md">Enrolled Courses</li>
                                          <li className="text-[#00000075] text-[14px] font-normal bg-white px-2 py-3 text-center text bg-white rounded-md hover:bg-flag-green hover:text-white w-50">Completed Courses</li>
                                    </ul>

                                    <div className=" grid grid-cols-3  gap-y-3 gap-x-3 " >
                                          {videos.map((video) => (
                                                <Card key={video.id} videourl={video.videourl} thumbnail={video.thumbnail.image} title={video.title} topic={video.topic} lecturer={video.name} duration={video.duration} rating={video.rating} category={video.category} progress={video.progress} />
                                          ))}
                                    </div>

                              </div>


                        </div>

                  </div >

            </>

      )
}

export default Learning;