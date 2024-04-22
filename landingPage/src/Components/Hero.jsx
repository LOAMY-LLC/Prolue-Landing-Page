import React from 'react'

const Hero = () => {
  return (
    <div className='container'>
     <div className='h-[15rem] mt-[3rem] flex flex-col space-y-4'>
        <div className='text-center  mt-[5rem] text-[2.5rem] font-bold'>
            <h1>The Future of Digital</h1>   
        </div>

        <div className='mx-auto bg-[#115E5B] w-[20rem] rounded-lg'>
        <h1 className='text-[2.7rem] text-white text-center font-black py-1  '> Commerce</h1>
        </div>
        
        <div className='text-center text-[0.9rem]'>
            <p>We are dedicated to creating innovative solutions that simplify and
                enhance the <br /> way people shop, interact, and do business online.
            </p>
        </div>
       
        <div className=' w-[9rem] mx-auto'>
                <p className='bg-[#042F2F] text-[0.8em] font-semibold py-2 text-center
                 text-white rounded-md'>Explore our Product
                </p>
        </div>

     </div>
    </div>
  )
}

export default Hero