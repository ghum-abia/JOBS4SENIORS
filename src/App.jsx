import { BrowserRouter, Routes, Route } from "react-router";

import Landingpage from './homepage/landingpage';
import Registration from './page/Registration';
import Login from './page/Login';
import Dashboard from './page/FreelancerPage/Dashboard.jsx';
import Offerpage from './page/offerpage.jsx';
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
import NotificationPage from './page/FreelancerPage/Notification.jsx'
import Chat from './page/FreelancerPage/Chatpage.jsx';
import Learning from './page/learning/Learning.jsx';
import Profile from './page/FreelancerPage/Profile.jsx';
import CommunityPost from './page/FreelancerPage/CommunityPost.jsx';
import CommunityLayout from './page/FreelancerPage/communityLayout.jsx';
import CommunityPostDetail from './page/FreelancerPage/CommunityDetailsPage.jsx';
import Lecture from './page/learning/Lecture.jsx';
import './App.css'


function App() {


  return (
  
   
    
    
    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/recuiter/dashoard" element={<RecuiterDashoard />} />
       { /*  <Route path="/offer" element={<Offerpage />} />
          <Route path="/faqs" element={<Faqs />} /> */}
          <Route path="/forget/password" element={<Forgetpassword />} />
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/recruiter/dashoard" element={<RecuiterDashoard />} />
          <Route path="/offer/page" element={<Offerpage />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/forgetpassword" element={<Forgetpassword />} />
          <Route path="/proposal" element={<Proposal />} />
          <Route path="/proposal/:slug" element={<ProposalDetail />} />
          <Route path="/job/:id" element={<JobDetail />} />
          <Route path="/send/proposal/:id" element={<SendProposals />} />
          <Route path="/job" element={<Job />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/dashboard/Learning" element={<Learning />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/notifications" element={<NotificationPage />} />
          <Route path="/messages" element={<Chat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard/learning/lecture" element={<Lecture />} />
          {/* <Route path="*" element={<div>404: Route Not Found</div>} /> */}
          <Route path="/community" element={<CommunityLayout />}>
              <Route path=":slug" element={<CommunityPost />} />
              <Route path="/community/:slug/post/:postId" element={<CommunityPostDetail />} />

            </Route>
        </Routes>

      </BrowserRouter>



    </div>

  );
}

export default App
