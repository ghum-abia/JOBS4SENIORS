import React from 'react'
import arrowrightgreen from '../assets/arrowrightgreen.svg'
import arrowUp from '../assets/homepage/arrowup.svg'
import { Link } from 'react-router';


function footer() {
    return (
        <>
            {/* <div className=" bgimage md:px-[100px] pl-[50px] h-[500px] md:pt-[100px] pt-[50px] " >
        <div className='lg:w-[484px] grid sm:place-content-center sm:pt-[30px   ] '>
        
            <div className='font-bold lg:text-[40px] text-[#F5F5F5] '>
            Ready to Begin Your Next Chapter?
            </div>
            <div className='font-normal text-[20px] text-[#F5F5F5] pt-5'>
            Don’t let retirement slow you down. Keep learning, stay connected, and earn remotely with Jobs for Seniors.
Sign Up Now – It’s Free!

            </div>
            <div className='flex space-x-4 text-[ #15411F] pt-10'>
                       <div className='bg-[#F5F5F5] rounded-xl'>
                           <button className='px-[10px] flex gap-3 pt-[16px] pb-[16px] pr-[24px] pl-[24px]'>
                               <div className='text-[ #15411F]  font-normal text-[16px]'><Link to='/registration'> Get started today! </Link></div>
                               <div className='pt-[8px] text-[ #15411F]'>
                                   <img src={arrowrightgreen} alt="" />
                               </div>
                           </button>
                         </div>
            </div>
        </div>
            </div>   */}
            <div className='bg-[#061A0A] pt-20 md:pl-[100px]'>
                <div className='flex items-center'>
                    <img className='w-[43px] h-[30px] pr-2' src="/logowhite.svg" alt="" />
                    <div className='text-white font-semibold pt-2'>
                        JOBS4SENIORS
                    </div>
                </div>
            </div>
            <div className='bg-[#061A0A] grid place-content-center lg:flex lg:justify-between md:px-[100px]  pb-10'>

                <div className='w-[360px] grid content-center'>

                    <div className='text-white '>
                        Explore job opportunities, gain new skills, and build a brighter future beyond civil service.
                    </div>
                </div>
                <div className='border-2 rounded-2xl w-[484px]  content-center p-2 border-[#757575]'>
                    <form action="" className=' flex justify-between '>
                        <input type="text" placeholder='Subscribe to our newsletter' className='text-white border-none w-[484px] pl-6' />
                        <button className='bg-[#F5F5F5] rounded-xl text-[ #15411F] p-6 '>
                            Subscribe
                        </button>
                    </form>
                </div>
                <div className='grid  content-center'>
                    <a href="#top" className='flex  space-x-2'>
                        <div className='font-normal  text-[20px] text-[#F5F5F5]' >Back to up</div>
                        <div className='pt-2'>
                            <img className='w-[14px]' src={arrowUp} alt="" />
                        </div>
                    </a>
                </div>

            </div>
            <div className='bg-[#041608] text-[#757575] text-center text-[12px] p-2'>
                All Rights Reserved. Copyright 2025. Jobs4seniors.com
            </div>
        </>
    )
}

export default footer