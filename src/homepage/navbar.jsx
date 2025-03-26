import React from 'react'
import { useState } from 'react'
import arrowRight from '../assets/arrowright.svg'
import { Link } from "react-router";
import MobileMenu from './mobileMenu';

// import MobileMenu from './mobileMenu';

function navbar() {
 
  
   

  return (
    <div className='flex justify-between p-4 mt-[26px] mx-[10px] md:mx-[120px]   '>
          
          <div className='flex items-center'>
            
              <Link to='/'><img src="/logo.svg"  alt="" className='pr-2 -mt-2'/></Link>
              <div className='text-[#15411F] font-semibold text-[16px] '>
                <Link to='/'>
              JOBS4SENIORS
                </Link>
              </div>
          
          </div>
     
       <div className=' space-x-4 font-semibold w-[381px] justify-between items-center px-4 hidden lg:flex'  >
            <div><Link to='/'>Home</Link></div>
            <div><Link to='/Offerpage'> What we offer </Link></div>
            <div><Link to='/Faqs'> FAQs </Link></div>
       </div>
       <div className='md:flex space-x-4 text-[ #15411F] font-semibold items-center hidden  pr-4'>
            <div className='text-[#15411F]'> <Link to='/Registration'> Get Started </Link></div>
            <div className='bg-[#15411F] rounded-2xl py-4 px-6 text-white'>

                <Link to='/Login'>
                    <button className='px-[10px] flex gap-3 cursor-pointer' >
                    
                        <div className='text-white '>Sign in</div>
                        <div className=''>
                            <img  src={arrowRight} alt="" />
                        </div>
                    
                    </button>
                    </Link>
              </div>
       </div>

      



     
            <div className='lg:hidden'>
           <MobileMenu  />
            </div>
          
    </div>
  )
}

export default navbar