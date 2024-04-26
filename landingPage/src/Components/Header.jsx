import React from 'react';
import logo from '../assets/Images/Vector.png';


const Header = () => {
  return (
    <div className='container bg-[#F9FEFD]'>
        <div className='flex justify-between mx-auto w-[90%] border-[2px] mt-[1.3em] py-2 
            px-4 rounded-3xl border-[#66BCB6]'>
            <div className='ml-[1.2em]'>
                <img src={logo} alt="" />
            </div>
            <div className=''>
                <ul className='flex space-x-4 mt-2 text-[0.9em] font-bold cursor-pointer'>
                    <li className=''>About Us</li>
                    <li>Our Products</li>
                    <li>Why Choose us</li>
                    <li>Blog</li>
                    <li>Contact us</li>
                    
                </ul>
            </div>
            <div className='mr-[1.2em]'>
                <p className='bg-[#0F7670] text-[0.8em] font-semibold py-2 px-2
                cursor-pointer text-white rounded-md'>Explore our Product
                </p>
            </div>
        </div>

    </div>
  )
}

export default Header