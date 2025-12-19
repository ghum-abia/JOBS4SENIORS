import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import { useFormik } from 'formik';
import bg1 from '../assets/Registration/bg.png'
import image6 from '../assets/Registration/image6.png'
import { BsEyeSlashFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";
import { useNavigate } from "react-router";



function loginform() {

    const navigate = useNavigate();

     const [showPassword, setShowPassword] = useState(false);

     
        const togglePassword = () => {
            setShowPassword(!showPassword);
        }; 

    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: Yup.object({
    
    
          email: Yup.string().email('Invalid email address').required('*Required'),
          password: Yup.string()
            .max(15, 'Must be characters or less')
            .required('*Required'),
        }),
        onSubmit: (values) => {

          const { email, password } = values;
       

          let users = JSON.parse(`[
  {
    "firstname": "Admin",
    "email": "admin@gmail.com",
    "password": "123456789",
    "confirm_password": "123456789",
    "role": "user"
  },
  {
    "firstname": "Recruiter",
    "email": "recruiter@gmail.com",
    "password": "123456789",
    "confirm_password": "123456789",
    "role": "recruiter"
  }
]`) || [];

          let user = users.find(user => user.email === 'admin@gmail.com' && user.password === '123456789');
          
          if (user) {
           
            
            if (user.Role === 'user') {
              toast.success('Login Sucessful!!');
              navigate('/dashboard');
            } else if (user.Role === 'recruiter') {
              navigate('/RecruiterDashboard');
            }
          } else {
            toast.error('Wrong email or password');
          }
        


        },
      });


  return (
    <div>
        <div className='  flex justify-between '>  

                    <ToastContainer />  
                    <img src={bg1} alt="" /> 
                </div>
          <div className='mb-10 -mt-40 md:-mt-50 lg:-mt-80 md:pl-[100px] md:flex grid place-content-center '>
                    <div className='hidden md:grid'>
                        <img className='h-[600px]' src={image6} alt="" />
                    </div>
                    <div className='md:w-[512px] w-full p-3 text-center md:pr-[100px] content-center'>
                        <div className='text-[#15411F] font-bold text-[16px] mt-8 md:text-[32px]'>
                        Welcome Back
                        </div>
                    
        
                        <div className='pt-4 lg:pt-10 w-full '>
                            <form action='' onSubmit={formik.handleSubmit}>
                    
                            <div className='mb-10'>
                                {' '}
                                <input
                                className='border-2 h-10 p-3 text-base font-normal rounded-xl text-[#00302E87] border-[#757575]  w-full'
                                id='email'
                                name='email'
                                placeholder='Your Email address'
                                type='email'
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                />
                                {formik.touched.email && formik.errors.email ? (
                                <div className='grid place-content-start'>{formik.errors.email}</div>
                                ) : null}
                            </div>
                            <div className=''>
                                {' '}
                                <div className='flex justify-between items-center'>
                                <input
                                className='border-2 h-10 p-3 text-base font-normal text-[#00302E87] rounded-xl border-[#757575] w-full'
                                id='password'
                                name='password'
                                type={showPassword ? 'text' : 'password'}
                                placeholder='Your Password'
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                />
                                 <p onClick={ togglePassword} className='ml-[-5vh]  pr-[10px] text-xl cursor-pointer'>{showPassword ? <IoEyeSharp /> : <BsEyeSlashFill /> }</p>
                                 </div>
                                {formik.touched.password && formik.errors.password ? (
                                <div  className='grid place-content-start'>{formik.errors.password}</div>
                                ) : null}
                            </div>
                               
                                 <div className='flex justify-betwwen  justify-between  pt-5'>
                                                        <div>
                                                            <input type="checkbox" name="" id="" />
                                                            <label htmlFor="" className='text-[#333333] font-bold font-normal pl-2 cursor-pointer'>Remember me</label>
                                                        </div>
                                                        <div>
                                                            <div><Link to='/Forgetpassword'>Forget Password</Link></div>
                                                        </div>
                                  </div>

                            <button
                                className=' h-10 mt-2 text-lg font-medium text-[#F3F3F3]  bg-[#15411F] text-center w-full rounded cursor-pointer'
                                type='submit'
                            >
                                Login
                            </button>
                            </form>
                            </div>
        
        
                        <div className='pl-4 text-[#333333]  font-bold font-normal pt-3'>
                        Don't have an account. <Link to='/Registration ' className='text-[#15411F]'> Sign up</Link>{' '}
                    </div>
                    
                    </div>
                </div>
    </div>
  )
}

export default loginform
