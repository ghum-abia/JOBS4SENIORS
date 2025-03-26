import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import { Link } from 'react-router';
import arrowRight from '../assets/arrowright.svg'

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (


        <div className="">
            
            <div className="relative">
                <button onClick={toggleMenu} className=' top-5 right-5 z-50'>
                {isOpen ? <FaTimes className='text-[#15411F] text-3xl' />   : <GiHamburgerMenu className='text-[#15411F] text-3xl' />}
            </button>

                {isOpen && (
                    <div onClick={toggleMenu}  className="absolute  top-5 right-0 h-screen w-screen bg-white shadow-lg rounded-md pl-10">
                        <ul className="flex flex-col p-4">
                            <li className="py-2 border-b border-gray-200">
                               <Link to='/Registration' className="text-gray-700">Home</Link>
                            </li>
                            <li className="py-2 border-b border-gray-200">
                                <Link to='/Offerpage'> What we offer </Link>
                            </li>
                            <li className="py-2 border-b border-gray-200">
                                          <div><Link to='/Faqs'> FAQs </Link></div>
                            </li>
                           
                        </ul>
                        <div className='p-4 flex justify-between items-center'>
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
                    </div>
                    
                )}
            </div>
        </div>
    );
};
export default MobileMenu;