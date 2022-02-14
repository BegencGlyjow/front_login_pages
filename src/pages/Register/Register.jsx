import React, { useState } from 'react'
import {HiOutlineClipboardList, HiOutlineEye, HiOutlineEyeOff, HiOutlineMail} from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
 
const Register = () => {
  const [togglePassword, setTogglePassword] =useState(false)
  
    const handleToggle = () => setTogglePassword(!togglePassword) 

  return (
    <section className='flex justify-center mt-20 items-center'>
    <aside className='bg-slate-50 font-sans xl:p-6 p-1 rounded-xl shadow-lg'>
      <header className='font-extrabold text-2xl text-slate-800'>Create new account</header>
      <div className='flex flex-row'>
      <h1 className='text-slate-400'>Already A Member? </h1>
      <NavLink to={'/login'} className="text-sky-500 ml-2">Log In</NavLink>
      </div>
      <form className='' action="" className="mt-5">
            <div className='flex flex-row'>
              <div className='flex flex-row'>
              <input type="text" placeholder='First name' className='focus:outline-none  rounded-l-xl p-3 bg-slate-200 placeholder:text-slate-500 font-extrabold text-slate-900'/>
               <div className='bg-slate-200 rounded-r-xl mr-3'>
                <HiOutlineClipboardList size={24} className='mr-3 mt-2 text-slate-800'/>
               </div>
              </div>

              <div className='flex flex-row'>
              <input type="text" placeholder='Last Name' className='focus:outline-none rounded-l-xl p-3 bg-slate-200 placeholder:text-slate-500 font-extrabold text-slate-900'/>
               <div className='bg-slate-200 rounded-r-xl'>
                <HiOutlineClipboardList size={24} className='mr-3 mt-2 text-slate-800'/>
               </div>
              </div>
            </div>
            <div className='flex flex-row '>
            <input type="email" placeholder='Email' className='focus:outline-none w-full mt-5 rounded-l-xl p-3 bg-slate-200 placeholder:text-slate-500 font-extrabold text-slate-900'/>
            <div className='bg-slate-200 rounded-r-xl mt-5'>
                <HiOutlineMail size={24} className='mr-3 mt-2 text-slate-800'/>
               </div>
            </div>

            <div className='flex flex-row'>
            <input type={togglePassword ? 'password':'text'} placeholder='Password' className='focus:outline-none w-full mt-5 rounded-l-xl p-3 bg-slate-200 placeholder:text-slate-500 font-extrabold text-slate-900'/>
            <div className='bg-slate-200 rounded-r-xl mt-5'>
              <button type='button' onClick={handleToggle}>
              <HiOutlineEyeOff size={24} className='mr-3 mt-2 text-slate-800'/>
              <HiOutlineEye size={24}  className='mr-3 mt-2  text-slate-800'/>
              </button>
               </div>
            </div>
            <div className='flex px-28 mt-6 justify-between items-center'>
              <button className='bg-slate-200 p-3 rounded-xl hover:bg-sky-500 font-extrabold text-slate-400 hover:text-slate-50'>Change method</button>
            <button className='bg-sky-500 p-3 rounded-xl hover:bg-sky-800 font-extrabold text-slate-50'>Create account</button>
            </div>
            
      </form>
    </aside>
      
  </section>

  )
}

export default Register