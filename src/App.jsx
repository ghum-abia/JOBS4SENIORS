import { BrowserRouter, Routes, Route } from 'react-router';

import Landingpage from './homepage/landingpage';
import Registration from './page/Registration';
import Login from './page/Login';
import Dashboard from './page/FreelancerPage/Dashboard.jsx';
import Faqs from './page/Faqs.jsx';
import Forgetpassword from './page/Forgetpassword.jsx';
import RecuiterDashoard from './page/RecuiterPage/RecuiterDashoard.jsx';
import Proposal from './page/FreelancerPage/Proposal.jsx';
import ProposalDetail from './page/FreelancerPage/ProposalDetails.jsx';
import Job from './page/FreelancerPage/Job.jsx';
import JobDetail from './page/FreelancerPage/JobDetails.jsx';
import Bookmark from './page/FreelancerPage/Bookmark.jsx';
import SendProposals from './page/FreelancerPage/SendProposal.jsx';
import Connect from './page/FreelancerPage/Connect.jsx';
import NotificationPage from './page/FreelancerPage/Notification.jsx';
import Chat from './page/FreelancerPage/Chatpage.jsx';
import Learning from './page/learning/Learning.jsx';
import Profile from './page/FreelancerPage/Profile.jsx';
import CommunityPost from './page/FreelancerPage/CommunityPost.jsx';
import CommunityLayout from './page/FreelancerPage/communityLayout.jsx';
import CommunityPostDetail from './page/FreelancerPage/CommunityDetailsPage.jsx';
import Lecture from './page/learning/Lecture.jsx';
import './App.css';

// Placeholder pages for routes that don't have a full component yet
const Placeholder = ({ name }) => (
  <div className="flex items-center justify-center h-screen bg-gray-100">
    <div className="bg-white rounded-2xl shadow-md p-10 text-center">
      <h1 className="text-2xl font-bold text-[#15411F] mb-2">{name}</h1>
      <p className="text-gray-500 text-sm">This page is under construction.</p>
    </div>
  </div>
);

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Landingpage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget/password" element={<Forgetpassword />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/offer/page" element={<Placeholder name="Offer Page" />} />

          {/* Freelancer dashboard routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/proposal/:slug" element={<ProposalDetail />} />
          <Route path="/job" element={<Job />} />
          <Route path="/job/:id" element={<JobDetail />} />
          <Route path="/send/proposal/:id" element={<SendProposals />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/notifications" element={<NotificationPage />} />
          <Route path="/messages" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard/learning" element={<Learning />} />
          <Route path="/dashboard/learning/lecture" element={<Lecture />} />
          <Route path="/settings" element={<Placeholder name="Settings" />} />
          <Route path="/insights" element={<Placeholder name="Insights" />} />

          {/* Community routes */}
          <Route path="/community" element={<CommunityLayout />}>
            <Route path=":slug" element={<CommunityPost />} />
            <Route path=":slug/post/:postId" element={<CommunityPostDetail />} />
          </Route>

          {/* Recruiter routes */}
          <Route path="/recruiter/dashoard" element={<RecuiterDashoard />} />
          <Route path="/recuiter/dashoard" element={<RecuiterDashoard />} />

          {/* 404 */}
          <Route
            path="*"
            element={<Placeholder name="404 – Page Not Found" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
