import React from 'react';
import proposalimg from '../../assets/dashboard/proposalimg.svg';
import proposalimage1 from '../../assets/dashboard/proposalimg1.svg';
import clock from '../../assets/dashboard/clock.png';
import wallet from '../../assets/dashboard/wallet.png';
import mappin from '../../assets/dashboard/mappin.png';
import { Link } from 'react-router';
import { BsBookmarkDash } from 'react-icons/bs';
import useJobStore from '../../store/useJobStore';

export default function Bookmarks() {
  const { bookmarkedJobs, removeBookmark } = useJobStore();

  if (bookmarkedJobs.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-4">Bookmarked Jobs</h2>
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
          <BsBookmarkDash size={48} className="mb-4 text-gray-300" />
          <p className="text-lg font-medium">No bookmarked jobs yet</p>
          <p className="text-sm mt-1">Bookmark jobs from the Jobs page to save them here.</p>
          <Link to="/job">
            <button className="mt-6 bg-[#15411F] text-white px-6 py-2 rounded-md text-sm font-normal hover:bg-green-900 transition-colors">
              Browse Jobs
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Bookmarked Jobs</h2>

        <ul>
          {bookmarkedJobs.map((job) => (
            <div key={job.id} className="py-4 border-b last:border-0">
              <div className="flex justify-between">
                <p className="bg-[#3096891A] text-[#309689] font-normal p-1 rounded">
                  {job.timePosted} <span>ago</span>
                </p>
                <button
                  onClick={() => removeBookmark(job.id)}
                  className="text-flag-green hover:text-red-500 transition-colors"
                  title="Remove bookmark"
                >
                  <BsBookmarkDash size={18} />
                </button>
              </div>

              <div className="flex pb-3">
                <img src={proposalimg} alt="" />
                <div className="pl-4">
                  <p className="font-semibold text-[14px] pt-2">{job.title}</p>
                  <p className="text-sm text-gray-600">{job.name}</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div className="flex pt-4">
                  <div className="flex mr-8">
                    <img src={proposalimage1} alt="" />
                    <div className="text-flag-green font-semibold ml-2 md:text-[14px]">
                      {job.category}
                    </div>
                  </div>
                  <div className="flex mr-8">
                    <img src={clock} alt="" />
                    <div className="text-flag-green font-semibold ml-2 md:text-[14px]">
                      {job.hoursPerWeek} <span>hrs/week</span>
                    </div>
                  </div>
                  <div className="flex mr-8">
                    <img src={wallet} alt="" />
                    <div className="text-flag-green font-semibold ml-2 md:text-[14px]">
                      {job.salary} <span>/hr</span>
                    </div>
                  </div>
                  <div className="flex mr-8">
                    <img src={mappin} alt="" />
                    <div className="text-flag-green font-semibold ml-2 md:text-[14px]">
                      {job.location}
                    </div>
                  </div>
                </div>

                <Link to={`/job/${job.id}`}>
                  <button className="bg-flag-green text-white font-normal text-[14px] px-4 py-2 rounded-md">
                    Job Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
