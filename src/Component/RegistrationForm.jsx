import React from 'react'
import { useState } from 'react';
import image6 from '../assets/Registration/image6.png'
import * as Yup from 'yup';
import { Link } from 'react-router';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import bg1 from '../assets/Registration/bg.png';
import { BsEyeSlashFill } from "react-icons/bs";
import { IoEyeSharp } from "react-icons/io5";

function RegistrationForm() {

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const toggleConfirm = () => {
        setShowConfirm(!showConfirm)
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    const formik = useFormik({
        initialValues: {
          firstname: '',
          email: '',
          password: '',
          confirmPassword: '',
        },
        validationSchema: Yup.object({
          firstname: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('*Required'),
    
          email: Yup.string().email('Invalid email address').required('*Required'),
          password: Yup.string()
            .max(15, 'Must be characters or less')
            .required('*Required'),
            confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('*Required'),
        }),
        onSubmit: (values) => {
          sessionStorage.setItem('user', JSON.stringify(values));
          toast.success('Sigin Successful!!');
          setInterval(() => {
            window.location = './login';
          }, 2000);
        },
      });
    



  return (
    <>
    <div className=''>
        {/* <div className='flex justify-between p-4 mt-[26px]'>
        <ToastContainer />
        <div className='  '>    
            <img src={bg1} alt="" /> 
        </div>
        </div> */}
        <div >
            {/* <div className='hidden md:grid'>
                <img className='h-[600px]' src={image6} alt="" />
            </div> */}
            <div >
                {/* <div className='text-[#15411F] font-bold text-[16px] md:text-[32px]'>
                Create your account
                </div> */}
                {/* <div className='flex text-center pt-10'>
                    <div className='bg-[#E8EEEB] w-[50%] p-[15px] border-b-2 border-b-[#15411F] text-[#15411F] text-[16px] md:text-[20px] content-center cursor-pointer'>Sign up as user</div>
                    <div className='w-[50%] p-[15px]   border-b-2 border-b-[#757575] text-[#757575] text-[16px] md:text-[20px] content-center cursor-pointer'>Sign up as recruiter</div>
                </div> */}

                <div className='pt-10 w-full'>
                    <form action='' onSubmit={formik.handleSubmit}>
                    <div className='mb-10'>
                        {' '}
                        <input
                        className='border-2 h-10 p-3 text-base font-normal rounded-xl text-[#00302E87] border-[#757575] w-full'
                        id='firstname'
                        name='firstname'
                        placeholder='Full name (Surname first)'
                        type='text'
                        value={formik.values.firstname}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        />
                        {formik.touched.firstname && formik.errors.firstname ? (
                        <div className='grid place-content-start'>{formik.errors.firstname}</div>
                        ) : null}
                    </div>
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
                    <div className='mb-10'>
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
                        <div>
                        {' '}
                        <div className='flex justify-between items-center'>
                        <input
                        className='border-2 h-10 p-3 text-base font-normal text-[#00302E87] border-[#757575] rounded-xl  w-full'
                        id='confirmPassword'
                        name='confirmPassword'
                        type={showConfirm ? 'text' : 'password'}
                        placeholder='Confirm Password'
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}    
                        />
                        <p onClick={toggleConfirm}  className='ml-[-5vh]  pr-[10px] text-xl cursor-pointer'>{showConfirm ? <IoEyeSharp /> : <BsEyeSlashFill /> }</p>
                        </div>
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                        <div  className='grid place-content-start'>{formik.errors.confirmPassword}</div>
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
                        className=' h-10 mt-5 text-lg font-medium text-[#F3F3F3]  bg-[#15411F] text-center w-full rounded cursor-pointer'
                        type='submit'
                    >
                        Login
                    </button>
                    </form>
                        
                   

                    </div>


                <div className='pl-4 text-[#333333]  font-bold font-normal pt-3'>
                Already have an account. <Link to='/Login  ' className='text-[#15411F]'> Sign up</Link>{' '}
            </div>
            
            </div>
        </div>
      
        </div>
        
    
    </>
  )
}

export default RegistrationForm
