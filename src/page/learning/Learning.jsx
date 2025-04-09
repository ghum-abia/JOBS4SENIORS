import Navbar from "../../Component/DashboardNavbar.jsx";
import LeftSidebar from "../../Component/DashboardSidebar.jsx";
import { Card } from "../../Component/learning/CourseCard.jsx";

const Learning = () => {
      let videos = [
            {
                  id: 1,
                  imageurl: 'https://media.istockphoto.com/id/1320658267/photo/asian-college-student-is-making-a-presentation-in-front-of-projector-screen.jpg?s=1024x1024&w=is&k=20&c=9nTStY-6pBwo5zpBAQhbngYbNhccYYOSG_nNbcVQOFQ=',
                  title: 'Audit Law Forensics',
                  topic: 'A Standard Operating Procedure',
                  name: 'Roy Davis',
                  duration: '5 hrs',
                  rating: 4.4,
                  progress: 90,
            },
            {
                  id: 2,
                  imageurl: 'https://media.istockphoto.com/id/1320658267/photo/asian-college-student-is-making-a-presentation-in-front-of-projector-screen.jpg?s=1024x1024&w=is&k=20&c=9nTStY-6pBwo5zpBAQhbngYbNhccYYOSG_nNbcVQOFQ=',
                  title: 'Audit Law Forensics',
                  topic: 'A Standard Operating Procedure',
                  name: 'Roy Davis',
                  duration: '5 hrs',
                  rating: 4.4,
                  progress: 90,
            },
            {
                  id: 3,
                  imageurl: 'https://media.istockphoto.com/id/1320658267/photo/asian-college-student-is-making-a-presentation-in-front-of-projector-screen.jpg?s=1024x1024&w=is&k=20&c=9nTStY-6pBwo5zpBAQhbngYbNhccYYOSG_nNbcVQOFQ=',
                  title: 'Audit Law Forensics',
                  topic: 'A Standard Operating Procedure',
                  name: 'Roy Davis',
                  duration: '5 hrs',
                  rating: 4.4,
                  progress: 90,
            },
            {
                  id: 4,
                  imageurl: 'https://media.istockphoto.com/id/1320658267/photo/asian-college-student-is-making-a-presentation-in-front-of-projector-screen.jpg?s=1024x1024&w=is&k=20&c=9nTStY-6pBwo5zpBAQhbngYbNhccYYOSG_nNbcVQOFQ=',
                  title: 'Audit Law Forensics',
                  topic: 'A Standard Operating Procedure',
                  name: 'Roy Davis',
                  duration: '5 hrs',
                  rating: 4.4,
                  progress: 90,
            },
            {
                  id: 5,
                  imageurl: 'https://media.istockphoto.com/id/1320658267/photo/asian-college-student-is-making-a-presentation-in-front-of-projector-screen.jpg?s=1024x1024&w=is&k=20&c=9nTStY-6pBwo5zpBAQhbngYbNhccYYOSG_nNbcVQOFQ=',
                  title: 'Audit Law Forensics',
                  topic: 'A Standard Operating Procedure',
                  name: 'Roy Davis',
                  duration: '5 hrs',
                  rating: 4.4,
                  progress: 90,
            },
            {
                  id: 6,
                  imageurl: 'https://media.istockphoto.com/id/1320658267/photo/asian-college-student-is-making-a-presentation-in-front-of-projector-screen.jpg?s=1024x1024&w=is&k=20&c=9nTStY-6pBwo5zpBAQhbngYbNhccYYOSG_nNbcVQOFQ=',
                  title: 'Audit Law Forensics',
                  topic: 'A Standard Operating Procedure',
                  name: 'Roy Davis',
                  duration: '5 hrs',
                  rating: 4.4,
                  progress: 90,
            },
            {
                  id: 7,
                  imageurl: 'https://media.istockphoto.com/id/1320658267/photo/asian-college-student-is-making-a-presentation-in-front-of-projector-screen.jpg?s=1024x1024&w=is&k=20&c=9nTStY-6pBwo5zpBAQhbngYbNhccYYOSG_nNbcVQOFQ=',
                  title: 'Audit Law Forensics',
                  topic: 'A Standard Operating Procedure',
                  name: 'Roy Davis',
                  duration: '5 hrs',
                  rating: 4.4,
                  progress: 90,
            },
            {
                  id: 8,
                  imageurl: 'https://media.istockphoto.com/id/1320658267/photo/asian-college-student-is-making-a-presentation-in-front-of-projector-screen.jpg?s=1024x1024&w=is&k=20&c=9nTStY-6pBwo5zpBAQhbngYbNhccYYOSG_nNbcVQOFQ=',
                  title: 'Audit Law Forensics',
                  topic: 'A Standard Operating Procedure',
                  name: 'Roy Davis',
                  duration: '5 hrs',
                  rating: 4.4,
                  progress: 90,
            },
            {
                  id: 9,
                  imageurl: 'https://media.istockphoto.com/id/1320658267/photo/asian-college-student-is-making-a-presentation-in-front-of-projector-screen.jpg?s=1024x1024&w=is&k=20&c=9nTStY-6pBwo5zpBAQhbngYbNhccYYOSG_nNbcVQOFQ=',
                  title: 'Audit Law Forensics',
                  topic: 'A Standard Operating Procedure',
                  name: 'Roy Davis',
                  duration: '5 hrs',
                  rating: 4.4,
                  progress: 90,
            },
            {
                  id: 10,
                  imageurl: 'https://media.istockphoto.com/id/1320658267/photo/asian-college-student-is-making-a-presentation-in-front-of-projector-screen.jpg?s=1024x1024&w=is&k=20&c=9nTStY-6pBwo5zpBAQhbngYbNhccYYOSG_nNbcVQOFQ=',
                  title: 'Audit Law Forensics',
                  topic: 'A Standard Operating Procedure',
                  name: 'Roy Davis',
                  duration: '5 hrs',
                  rating: 4.4,
                  progress: 90,
            },
            {
                  id: 11,
                  imageurl: 'https://media.istockphoto.com/id/1320658267/photo/asian-college-student-is-making-a-presentation-in-front-of-projector-screen.jpg?s=1024x1024&w=is&k=20&c=9nTStY-6pBwo5zpBAQhbngYbNhccYYOSG_nNbcVQOFQ=',
                  title: 'Audit Law Forensics',
                  topic: 'A Standard Operating Procedure',
                  name: 'Roy Davis',
                  duration: '5 hrs',
                  rating: 4.4,
                  progress: 90,
            },
            {
                  id: 12,
                  imageurl: 'https://media.istockphoto.com/id/1320658267/photo/asian-college-student-is-making-a-presentation-in-front-of-projector-screen.jpg?s=1024x1024&w=is&k=20&c=9nTStY-6pBwo5zpBAQhbngYbNhccYYOSG_nNbcVQOFQ=',
                  title: 'Audit Law Forensics',
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

                        <div className='flex flex-col lg:flex-row  justify-between   pl-30 pr-20'>
                              {/* Left Sidebar */}
                              <aside className="w-[25%] hidden lg:block relative" >
                                    <LeftSidebar />
                              </aside>
                              <div className='w-[78%] space-y-2'>

                                    <ul className="flex justify-evenly bg-white rounded-lg p-1 w-1/2">
                                          <li className="text-[#00000075] text-[14px] font-normal px-2 py-2 text-center bg-white hover:bg-flag-green hover:text-white rounded-md w-30">All Courses</li>
                                          <li className="text-[#00000075] text-[14px] font-normal bg-white px-2 py-2 text-center text  hover:bg-flag-green hover:text-white w-40 rounded-md">Enrolled Courses</li>
                                          <li className="text-[#00000075] text-[14px] font-normal bg-white px-2 py-2 text-center text bg-white rounded-md hover:bg-flag-green hover:text-white w-50">Completed Courses</li>
                                    </ul>

                                    <div className="rounded-lg grid grid-cols-3  gap-y-3 gap-x-3 " >
                                          {videos.map((video) => (
                                                <Card key={video.id} imageurl={video.imageurl} title={video.title} topic={video.topic} lecturer={video.name} duration={video.duration} rating={video.rating} progress={video.progress} />
                                          ))}
                                    </div>

                              </div>


                        </div>

                  </div >

            </>

      )
}

export default Learning;