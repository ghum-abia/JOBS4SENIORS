import { useState } from 'react'
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
<<<<<<< HEAD
import Connect from './page/FreelancerPage/Connect.jsx';
import NotificationPage from './page/FreelancerPage/Notification.jsx'
import Chat from './page/FreelancerPage/Chatpage.jsx';
=======
import Learning from './page/learning/Learning.jsx';
>>>>>>> 3e8002c2eec268cefaa032f75724ca50b8b235db



import './App.css'


function App() {


  return (
<<<<<<< HEAD
  
      <div >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landingpage />} />
              <Route path="/registration" element={<Registration />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Dashboard" element={<Dashboard />} />
              <Route path="/RecuiterDashoard" element={<RecuiterDashoard />} />
              <Route path="/Offerpage" element={<Offerpage />} />
              <Route path="/Faqs" element={<Faqs />} />
              <Route path="/Forgetpassword" element={<Forgetpassword />} />
              <Route path="/Proposal" element={<Proposal />} />
              <Route path="/proposal/:slug" element={<ProposalDetail />} />
              <Route  path="/Job/:id" element={<JobDetail />} />
              <Route path="/SendProposal/:id" element={<SendProposals />} />
              <Route path="/Job" element={<Job />} />
              <Route path="/Bookmark" element={<Bookmark   />} />
              <Route path="/connect" element={<Connect />} />
              <Route path="/notification" element={<NotificationPage />} />
              <Route path="/messages" element={<Chat />} />
              
=======
>>>>>>> 3e8002c2eec268cefaa032f75724ca50b8b235db

    <div >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/RecuiterDashoard" element={<RecuiterDashoard />} />
          <Route path="/Offerpage" element={<Offerpage />} />
          <Route path="/Faqs" element={<Faqs />} />
          <Route path="/Forgetpassword" element={<Forgetpassword />} />
          <Route path="/Proposal" element={<Proposal />} />
          <Route path="/proposal/:slug" element={<ProposalDetail />} />
          <Route path="/Job/:id" element={<JobDetail />} />
          <Route path="/SendProposal/:id" element={<SendProposals />} />
          <Route path="/Job" element={<Job />} />
          <Route path="/Bookmark" element={<Bookmark />} />
          <Route path="/Dashboard/Learning" element={<Learning />} />


        </Routes>
      </BrowserRouter>



    </div>

  );
}

export default App
