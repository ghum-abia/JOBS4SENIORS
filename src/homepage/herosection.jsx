import React from 'react'
import arrowRight from '../assets/arrowright.svg'
import imageSide from '../assets/homepage/imageside1.svg'
import secondSlide from '../assets/homepage/imageside2.svg'
import thirdSlide from '../assets/homepage/imageside3.svg'
import forthSlide from '../assets/homepage/imageside4.svg'
import checkBox from '../assets/homepage/checkbox.svg'
import slide from '../assets/homepage/slide1.svg'
import slide2 from '../assets/homepage/slide2.svg'
import slide3 from '../assets/homepage/slide3.svg'
import slide4 from '../assets/homepage/slide4.svg'
import Orange from '../assets/homepage/orange.svg'
import image1 from '../assets/homepage/image1.png'
import image2 from '../assets/homepage/image2.svg'
import arrowrightgreen from '../assets/arrowrightgreen.svg'
import {accordionData} from './Context'
import Accordion from './accordion'
import './homepage.css'
import arrowUp from '../assets/homepage/arrowup.svg'
import imageman from '../assets/homepage/imageman.png'
import { Link } from "react-router";




function herosection() {
    


  return (
    <>
    <div className='herobg grid place-content-center justify-items-center text-center pt-[50px] p-2' id="top">
        <div className='text-[14px] text-[ #15411F] font-semibold tracking-[3px]'>WELCOME TO JOBS FOR SENIORS</div>
        <div className='font-extrabold text-[32px] md:text-[48px] text-[#333333]'>Learn <span className='text-[#E45F17]'>.</span> Connect <span className='text-[#E45F17]'>.</span> Work</div>
        <div className='font-bold text-[20px] md:text-[32px] tracking-[-1px] text-[#333333]'>. . . even after retirement</div>
        <div className='font-normal text-[18px]/9 text-[#333333]'>Turn your years of expertise into new career paths. Learn new skills, build your professional <br></br>profile, and connect with remote job opportunities designed for retired civil servants.</div>
        <div>
            <div className='flex space-x-4 text-[ #15411F] pt-6'>
                       <div className='bg-[#15411F] rounded-xl'>
                           <button className='px-[10px] flex gap-3 pt-[16px] pb-[16px] pr-[24px] pl-[24px]'>
                               <div className='text-white'><Link to='/registration'> Get started today! </Link></div>
                               <div className='pt-[2px]'>
                                   <img src={arrowRight} alt="" />
                               </div>
                           </button>
                         </div>
                  </div>
        </div>
    </div>

    <div className='grid grid-cols-2  place-content-center lg:flex pt-10 px-4 py-4'>
         <div><img src={imageSide} alt="" /></div>
         <div><img src={secondSlide} alt="" /></div>
         <div><img src={thirdSlide} alt="" /></div>
         <div><img src={forthSlide} alt="" /></div>
    </div>

    <div className=' grid lg:flex lg:flex-row lg:pl-30 pt-20 content-end'>
      

        <div className=' grid items-center place-content-center md:place-content-end pl-8'>
            <img src={imageman} alt="" />
        </div>

        <div className='lg:basis-[60vw]'>
            <div>
                <div className='font-bold lg:text-[40px] text-[20px] text-[ #333333] p-3 grid place-content-center md:place-content-start pb-3'>Who we are and why <br></br> it matters to retirees</div>

                    <div className='bg-[#EFEFEF]'>
                        <div className='lg:w-[500px] font-normal text-[18px] text-[ #333333] px-3 py-5'>Are you a retired civil servant looking for a meaningful next chapter?
                        At Jobs for Seniors, we bridge the gap between experienced professionals and new opportunities. Whether you’re seeking to learn a new skill, showcase your expertise, or find remote work, this platform is built just for you.
                        </div>
                     </div>
            </div>
            <div className='pt-15'>
                <div className='font-bold lg:text-[32px] text-[#15411F] pl-3 py-3 grid place-content-center md:place-content-start'>
                Why choose us?
                </div>
                <div className='grid gap-3'> 
                        <div className='flex space-x-4 bg-[#E5EEE7] pl-3 py-4 font-normal '>
                            <div> <img src={checkBox} alt="" /></div>
                            <div className='font-normal text-[18px] text-[ #333333]'>Access industry-relevant courses tailored for professionals.</div>
                        </div>
                        <div className='flex space-x-4 bg-[#E5EEE7] pl-3 py-4'>
                            <div> <img src={checkBox} alt="" /></div>
                            <div className='text-[18px] font-normal text-[ #333333]'>Create a professional profile and connect with recruiters.</div>
                        </div>
                        <div className='flex space-x-4 bg-[#E5EEE7] pl-3 py-4 text-[ #333333]'>
                            <div> <img src={checkBox} alt="" /></div>
                            <div className='font-normal text-[18px] text-[ #333333]'>Find remote, flexible jobs suited for your expertise.</div>
                        </div>
                </div>
            </div>
        </div>
    </div>

    <div className='lg:pt-20 pb-10 grid place-content-center'>
        <div className='grid font-bold text-[40px] place-content-center'>How it works</div>
        <div className='grid lg:grid-cols-2 justify-center place-content-center gap-5 lg:ml-55 lg:mr-55 pt-10'>
            <div className=' bg-white rounded-2xl shadow-lg'>
                <div class="relative inline-block">
                    <img src={slide} alt="" />
                    <div class="absolute inset-0 flex items-end justify-end text-white text-4xl font-bold pr-4 pb-2 opacity-50 font-bold lg:text-[70px]">1</div>
                </div>
                <div className='font-bold text-[24px] pt-6 pb-3 pl-3'> Create your profile</div>
                <div className='font-normal text-[18px] lg:w-[320px] pb-6 pl-3'>Easily set up your professional profile in minutes.</div>
            </div>
            <div className=' bg-white rounded-2xl shadow-lg'>
                <div  class="relative inline-block">
                    <img src={slide2} alt="" />
                    <div class="absolute inset-0 flex items-end justify-end text-white text-4xl font-bold pr-4 pb-2 opacity-50 font-bold lg:text-[70px]">2</div>
                </div>
                <div className='font-bold text-[24px] pt-6 pb-3 pl-3'>Learn & Get Certified</div>
                <div className='font-normal text-[18px] lg:w-[320px] pb-6 pl-3'>Access courses in business, tech, freelancing, and more.</div>
            </div>
            <div className=' bg-white rounded-2xl shadow-lg'>
                <div  class="relative inline-block">
                    <img src={slide3} alt="" />
                    <div class="absolute inset-0 flex items-end justify-end text-white text-4xl font-bold pr-4 pb-2 opacity-50 font-bold lg:text-[70px]">3</div>
                </div>
                <div className='font-bold text-[24px] pt-6 pb-3 pl-3'> Apply for Remote Jobs</div>
                <div className='font-normal text-[18px] lg:w-[320px] pb-6 pl-3'>Find projects that match your experience and skills.</div>
            </div>
            <div className=' bg-white rounded-2xl shadow-lg'>
                <div  class="relative inline-block">
                    <img src={slide4} alt="" />
                    <div class="absolute inset-0 flex items-end justify-end text-white text-4xl font-bold pr-4 pb-2 opacity-50 font-bold lg:text-[70px]">4</div>
                </div>
                <div className='font-bold text-[24px] pt-6 pb-3 pl-3'>Work & Earn</div>
                <div className='font-normal text-[18px] lg:w-[320px] pb-6 pl-3'>Enjoy flexible jobs that let you work at your pace.</div>
            </div>
        </div>
    </div> 

    <div className='grid lg:flex lg:flex-row lg:pl-30 pt-20 lg:pr-30 '>
        <div className='lg:basis-[40vw] grid place-content-center font-bold text-[48px]'>
            <div className='text-center text[#333333]'>Frequently asked Questions</div>
            <div className='grid place-content-center -mt-[50px]'>
                
                <div className=' '> <img className='h-[600px]' src={image1} alt="" /></div>

                    <div>

                    </div>

            </div>
        </div>
        <div className='lg:basis-[60vw] lg:pl-30 px-4 pt-10 '>
            <div>

                { accordionData.map(({tittle, content}) => {
                    return (

                        <Accordion tittle={tittle} content={content} />

                    )
                }

                )}
            </div> 
            <div className='flex space-x-4 text-[ #15411F] pt-6 pb-6 justify-center md:justify-start'>
                       <div className='bg-[#15411F] rounded-xl '>
                           <button className='px-[10px] flex gap-3 pt-[16px] pb-[16px] pr-[24px] pl-[24px]'>
                               <div className='text-white'><Link to='/registration'> Get started today! </Link></div>
                               <div className='pt-[2px]'>
                                   <img src={arrowRight} alt="" />
                               </div>
                           </button>
                         </div>
                  </div>
           
        </div>
        
    </div>
 
 


    <div className=" bgimage h-[500px] md:pl-[100px] pl-[50px] md:pt-[100px] pt-[50px] " >
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
    </div>



 
     <div className='bg-[#061A0A] pt-20 md:pl-[100px]'> 
                <div className='flex items-center'>
                    <img className='w-[43px] h-[30px] pr-2' src="/logowhite.svg"  alt="" />
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
             <input type="text" placeholder='Subscribe to our newsletter'  className='text-white border-none w-[484px] pl-6'/>
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

    <div className='bg-[#041608] text-[] text-[#757575] text-center text-[12px] p-2'>
    All Rights Reserved. Copyright 2025. Jobs4seniors.com
    </div>  

















    </>
  )
}

export default herosection

 