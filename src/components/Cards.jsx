import React from 'react'
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';

export default function Cards() {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flexx flex-cole py-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt='/' />
                <h2 className='text-2xl font-semibold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-semibold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                    <p className='py-2 border-b mx-8 mt-8 '>1 User Allowed</p>
                    <p className='py-2 border-b mx-8 mt-8 '>Send up to 2GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 flex justify-center'>Start Trail</button>
            </div>
            <div className='w-full shadow-xl flex-cole py-4 md:m-0 my-8 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt='/' />
                <h2 className='text-2xl font-semibold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-semibold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                    <p className='py-2 border-b mx-8 mt-8 '>1 User Allowed</p>
                    <p className='py-2 border-b mx-8 mt-8 '>Send up to 2GB</p>
                </div>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 flex justify-center'>Start Trail</button>
            </div>
            <div className='w-full shadow-xl flexx flex-cole py-4 my-4 rounded-lg hover:scale-105 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt='/' />
                <h2 className='text-2xl font-semibold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-semibold'>$149</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500GB Storage</p>
                    <p className='py-2 border-b mx-8 mt-8 '>1 User Allowed</p>
                    <p className='py-2 border-b mx-8 mt-8 '>Send up to 2GB</p>
                </div>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 flex justify-center'>Start Trail</button>
            </div>
        </div>
    </div>
  )
}
