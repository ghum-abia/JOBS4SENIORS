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


import './App.css'


function App() {


  return (
  
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
              <Route path="/Job" element={<Job />} />

            </Routes>
        </BrowserRouter>

      

      </div>
   
  );
}

export default App
