import React from 'react'
import { useForm } from 'react-hook-form'
import {useState} from 'react'

const Signup = () => {

const { register, handleSubmit } = useForm();
const [data, setData] = useState(null);

const onSubmit = (data) => {
 
  setData(data);
  console.log(data);
};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
     <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
         <h2 className='text-3xl font-semibold mb-4'>Sign Up</h2>
      <div className="mt-4 ">
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-4 w-full flex  flex-col">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Name</label>
          <input className="border border-gray-300 rounded py-2 px-4" placeholder="Enter your name" {...register('name')} type="text" />
        
        </div>

        <div className="mt-4 w-full flex  flex-col">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email</label>
          <input className="border border-gray-300 rounded py-2 px-4"  placeholder="Enter your email" {...register('email')} type="email" />
        </div>
        <div className="mt-4 w-full flex  flex-col">
          <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">Password</label>
          <input className="border border-gray-300 rounded py-2 px-4" placeholder="Enter your password" {...register('password')} type="password" />
        </div>
      <div className="mt-4 w-full flex    flex-col">
          <button type="submit" className="mt-6 bg-black text-white py-2 px-4 rounded">
          Sign Up
        </button>
      
      </div>
      </form>
      </div>
     </div>
    </div>
  )
}

export default Signup
