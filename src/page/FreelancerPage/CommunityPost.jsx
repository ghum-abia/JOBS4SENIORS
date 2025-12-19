import React from 'react'
import CommunityPostlist from '../../Component/FreelancerComp/CommunityPostlist'
import { useParams } from 'react-router'


function CommunityPost() {
   
  const { slug } = useParams(); // Get the slug from the URL parameters
  console.log(slug); // Log the slug to the console (for debugging purposes)
  return (
    <div>
   
       
        <CommunityPostlist /> {/* Pass the slug as a prop to CommunityPostlist */}
        
    
    </div>
  )
}

export default CommunityPost 