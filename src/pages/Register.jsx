import React from 'react'

export default function Register() {
  return (
    <div className=' border-3 border-black-500 w-[400px] block m-auto'>
        <h1 className='text-center mt-4 font-bold text-2xl'>Register</h1>
        <form action="post" className='p-4'>
            <div>
            <label htmlFor="username" className='block'>Username</label>
            <input type="text" placeholder='Enter your Username' className='border-2 border-black-400 p-2 w-[100%]' />
            </div>
            <div className='mt-2'>
            <label htmlFor="password" className='block'>Password</label>
            <input type="password" placeholder='Enter your Username' className='border-2 border-black-400 p-2 w-[100%]' />
            </div>
            <div className='flex items-center gap-2 mt-2'>
                <input type="checkbox" name="terms_and_condition" id="" />
                <label htmlFor="terms_and_condition">I agree and <span className='text-[#007bff]'>Terms and Condition</span></label>
            </div>
            <div className='bg-blue-400 text-center mt-2 text-white p-2'>
                <button type='submit'>Sign Up</button>
            </div>
        </form>
    </div>
  )
}
