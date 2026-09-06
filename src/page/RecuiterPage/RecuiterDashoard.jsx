import { useState } from 'react';
import { Link } from 'react-router';
import DashboardNavbar from '../../Component/DashboardNavbar';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaToolbox, FaUserCheck } from 'react-icons/fa6';
import { MdOutlineWorkOutline, MdNotificationsNone } from 'react-icons/md';
import { AiOutlineMessage } from 'react-icons/ai';
import { RiHome5Fill } from 'react-icons/ri';

const jobPostings = [
  {
    id: 1,
    title: 'Senior UX Designer',
    category: 'Design',
    location: 'Abuja',
    salary: '$80/hr',
    applications: 14,
    posted: '2 days ago',
    status: 'Active',
  },
  {
    id: 2,
    title: 'React Frontend Developer',
    category: 'Technology',
    location: 'Lagos',
    salary: '$90/hr',
    applications: 8,
    posted: '4 days ago',
    status: 'Active',
  },
  {
    id: 3,
    title: 'Product Manager',
    category: 'Management',
    location: 'Remote',
    salary: '$100/hr',
    applications: 21,
    posted: '1 week ago',
    status: 'Closed',
  },
];

const recentApplicants = [
  {
    id: 1,
    name: 'Udo Emmanuel',
    role: 'Freelance UX/UI Designer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    appliedFor: 'Senior UX Designer',
    time: '2 hours ago',
    status: 'New',
  },
  {
    id: 2,
    name: 'Audrey Alexander',
    role: 'Team Lead at Google',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    appliedFor: 'Product Manager',
    time: '5 hours ago',
    status: 'Reviewed',
  },
  {
    id: 3,
    name: 'Kyle Fisher',
    role: 'Product Designer',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    appliedFor: 'React Frontend Developer',
    time: 'Yesterday',
    status: 'Shortlisted',
  },
  {
    id: 4,
    name: 'Theresa Steward',
    role: 'iOS Developer',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    appliedFor: 'React Frontend Developer',
    time: 'Yesterday',
    status: 'New',
  },
];

const statusColors = {
  New: 'bg-blue-100 text-blue-700',
  Reviewed: 'bg-yellow-100 text-yellow-700',
  Shortlisted: 'bg-[#15411F]/10 text-[#15411F]',
  Rejected: 'bg-red-100 text-red-600',
};

const jobStatusColors = {
  Active: 'bg-[#15411F]/10 text-[#15411F]',
  Closed: 'bg-gray-100 text-gray-500',
};

const RecuiterDashoard = () => {
  const [activeJobTab, setActiveJobTab] = useState('active');

  const stats = [
    { label: 'Total Job Posts', value: 12, icon: <MdOutlineWorkOutline size={24} />, change: '+2 this month' },
    { label: 'Total Applicants', value: 87, icon: <FaUserCheck size={24} />, change: '+14 this week' },
    { label: 'Active Jobs', value: 8, icon: <FaToolbox size={24} />, change: '4 closing soon' },
    { label: 'New Messages', value: 5, icon: <AiOutlineMessage size={24} />, change: '3 unread' },
  ];

  const filteredJobs = activeJobTab === 'active'
    ? jobPostings.filter((j) => j.status === 'Active')
    : jobPostings.filter((j) => j.status === 'Closed');

  return (
    <div className="bg-gray-100 min-h-screen">
      <DashboardNavbar />

      <div className="pt-20 px-6 lg:px-20 pb-10">
        {/* Header */}
        <div className="flex justify-between items-center mt-6 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-[#181818]">Recruiter Dashboard</h1>
            <p className="text-sm text-gray-500 mt-1">Welcome back! Here is what is happening today.</p>
          </div>
          <button className="bg-[#15411F] text-white text-sm font-normal px-5 py-2 rounded-md hover:bg-green-900 transition-colors">
            + Post New Job
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl shadow-md p-5">
              <div className="flex items-center justify-between mb-3">
                <div className="text-[#15411F]">{stat.icon}</div>
                <span className="text-xs text-gray-400">{stat.change}</span>
              </div>
              <p className="text-3xl font-bold text-[#15411F]">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Job Postings Panel */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-bold text-[16px] text-[#181818]">Your Job Postings</h2>
                <button className="text-[#15411F] text-xs font-semibold underline">View All</button>
              </div>

              {/* Active / Closed Tabs */}
              <div className="flex border-b mb-4">
                <button
                  className={`py-2 px-4 text-sm font-medium transition-colors ${
                    activeJobTab === 'active'
                      ? 'border-b-2 border-[#15411F] text-[#15411F]'
                      : 'text-gray-500 hover:text-[#15411F]'
                  }`}
                  onClick={() => setActiveJobTab('active')}
                >
                  Active
                </button>
                <button
                  className={`py-2 px-4 text-sm font-medium transition-colors ${
                    activeJobTab === 'closed'
                      ? 'border-b-2 border-[#15411F] text-[#15411F]'
                      : 'text-gray-500 hover:text-[#15411F]'
                  }`}
                  onClick={() => setActiveJobTab('closed')}
                >
                  Closed
                </button>
              </div>

              {filteredJobs.length === 0 ? (
                <p className="text-center text-gray-400 py-8 text-sm">No {activeJobTab} jobs.</p>
              ) : (
                <div className="space-y-4">
                  {filteredJobs.map((job) => (
                    <div key={job.id} className="border border-gray-100 rounded-xl p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-[14px] text-[#181818]">{job.title}</h3>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {job.category} · {job.location} · {job.salary}
                          </p>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${jobStatusColors[job.status]}`}>
                            {job.status}
                          </span>
                          <button className="text-gray-400 hover:text-gray-600">
                            <BsThreeDotsVertical />
                          </button>
                        </div>
                      </div>
                      <div className="flex justify-between mt-3 text-xs text-gray-400">
                        <span>{job.applications} applicants</span>
                        <span>Posted {job.posted}</span>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <button className="text-xs text-[#15411F] border border-[#15411F] px-3 py-1 rounded-md hover:bg-green-50 transition-colors">
                          View Applicants
                        </button>
                        <button className="text-xs text-gray-500 border border-gray-200 px-3 py-1 rounded-md hover:bg-gray-50 transition-colors">
                          Edit Job
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Recent Applicants */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold text-[16px] text-[#181818]">Recent Applicants</h2>
              <button className="text-[#15411F] text-xs font-semibold underline">View All</button>
            </div>

            <div className="space-y-4">
              {recentApplicants.map((applicant) => (
                <div key={applicant.id} className="flex items-start gap-3">
                  <img
                    src={applicant.avatar}
                    alt={applicant.name}
                    className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-[13px] font-semibold text-[#181818] truncate">{applicant.name}</p>
                        <p className="text-[11px] text-gray-500 truncate">{applicant.role}</p>
                        <p className="text-[11px] text-[#15411F] mt-0.5">→ {applicant.appliedFor}</p>
                      </div>
                      <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium flex-shrink-0 ml-1 ${statusColors[applicant.status]}`}>
                        {applicant.status}
                      </span>
                    </div>
                    <p className="text-[10px] text-gray-400 mt-1">{applicant.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-4 w-full border border-[#15411F] text-[#15411F] text-xs font-medium py-2 rounded-md hover:bg-green-50 transition-colors">
              MANAGE ALL APPLICANTS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecuiterDashoard;