import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router';
import Navbar from '../homepage/navbar';
import image6 from '../assets/Registration/image6.png';
import Footer from '../homepage/footer';
import bg1 from '../assets/Registration/bg.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { IoEyeSharp } from 'react-icons/io5';
import { BsEyeSlashFill } from 'react-icons/bs';

function Registration() {
  const [Role, setRole] = useState("user");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const toggleConfirm = () => setShowConfirm(!showConfirm);
  const togglePassword = () => setShowPassword(!showPassword);

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
        .max(15, 'Must be 15 characters or less')
        .required('*Required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('*Required'),
    }),
    onSubmit: (values) => {
      const userData = { ...values, Role };

      // Get existing users from session storage
      let users = JSON.parse(sessionStorage.getItem("users")) || [];
      users.push(userData);
      sessionStorage.setItem("users", JSON.stringify(users));
      toast.success('SiginIn Successful!!');
      
                setInterval(() => {
                  window.location = './Login';
                }, 2000);
    },
  });

  return (
    <div>
      <Navbar />
      <div>
        <div className='flex justify-between p-4 mt-[26px]'>
          <ToastContainer />
          <div><img src={bg1} alt='' /></div>
        </div>
        <div className='mb-10 -mt-40 md:pl-[100px] md:flex grid place-content-center'>
          <div className='hidden md:grid'>
            <img className='h-[600px]' src={image6} alt='' />
          </div>
          <div className='md:w-[512px] w-full p-3 text-center md:pr-[100px]'>
            <h2 className='text-[#15411F] font-bold text-[16px] md:text-[32px]'>Create your account</h2>
            <div className='flex text-center pt-10'>
              <div
                onClick={() => setRole("user")}
                className={`w-[50%] p-[15px] text-[16px] md:text-[20px] cursor-pointer ${
                  Role === "user" ? "bg-[#E8EEEB] text-[#15411F] border-b-2" : "bg-gray-300 text-black"
                }`}
              >
                Sign up as user
              </div>
              <div
                onClick={() => setRole("recruiter")}
                className={`w-[50%] p-[15px] text-[16px] md:text-[20px] cursor-pointer ${
                  Role === "recruiter" ? "bg-[#E8EEEB] text-[#15411F] border-b-2" : "bg-gray-300 text-black"
                }`}
              >
                Sign up as recruiter
              </div>
            </div>
            <form onSubmit={formik.handleSubmit} className='pt-10'>
              <input
                className='border-2 h-10 p-3 rounded-xl w-full mb-4'
                id='firstname'
                name='firstname'
                placeholder='Full name (Surname first)'
                type='text'
                {...formik.getFieldProps('firstname')}
              />
              {formik.touched.firstname && formik.errors.firstname && <div>{formik.errors.firstname}</div>}

              <input
                className='border-2 h-10 p-3 rounded-xl w-full mb-4'
                id='email'
                name='email'
                placeholder='Your Email address'
                type='email'
                {...formik.getFieldProps('email')}
              />
              {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>}

              <div className='relative mb-4'>
                <input
                  className='border-2 h-10 p-3 rounded-xl w-full'
                  id='password'
                  name='password'
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Your Password'
                  {...formik.getFieldProps('password')}
                />
                <span onClick={togglePassword} className='absolute right-3 top-2 cursor-pointer'>
                  {showPassword ? <IoEyeSharp /> : <BsEyeSlashFill />}
                </span>
              </div>
              {formik.touched.password && formik.errors.password && <div>{formik.errors.password}</div>}

              <div className='relative mb-4'>
                <input
                  className='border-2 h-10 p-3 rounded-xl w-full'
                  id='confirmPassword'
                  name='confirmPassword'
                  type={showConfirm ? 'text' : 'password'}
                  placeholder='Confirm Password'
                  {...formik.getFieldProps('confirmPassword')}
                />
                <span onClick={toggleConfirm} className='absolute right-3 top-2 cursor-pointer'>
                  {showConfirm ? <IoEyeSharp /> : <BsEyeSlashFill />}
                </span>
              </div>
              {formik.touched.confirmPassword && formik.errors.confirmPassword && <div>{formik.errors.confirmPassword}</div>}

              <button type='submit' className='h-10 mt-5 bg-[#15411F] text-white w-full rounded'>Register</button>
            </form>
            <p className='pt-3'>Already have an account? <Link to='/Login' className='text-[#15411F]'>Sign in</Link></p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Registration;
