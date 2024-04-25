import React from 'react';
import hero from '../assets/Images/loamy1.png'

const AboutUs = () => {
  return (
    <div className='container'>
        <div className='flex mt-[10rem] mx-[5rem] mb-[5rem]'>
            <div className='w-[60%] mr-[2rem]'>
                <p className='bg-[#F0FDFA] ml-[1rem] w-[5rem] text-center py-1 
                rounded-full' >About</p>

                <p>
                    Loamy LLC was founded by a group of tech enthusiasts and 
                    industry veterans who saw the potential of digital commerce to revolutionize 
                    the way businesses operate and consumers shop. Our mission is to pioneer
                     the future of digital commerce by leveraging technology to empower businesses 
                     and consumers alike.
                </p>
                <div className='flex  mt-[3rem]'>
                    <div className='flex flex-col space-y-4 py-[2.5rem] w-1/2 bg-[#F0FDFA] 
                    pl-[1rem] rounded-md mr-[1rem]'>
                        <p className='text-[#ED4F05]'>01</p>

                        <h2 className='text-[#0B252B] font-bold'>Our Mission</h2>

                        <p>
                            To create a global community devoid of barriers, adept 
                            in driving innovations and sustainable solutions for 
                            lasting global impacts.
                        </p>
                    </div>

                    <div className='flex flex-col space-y-4 py-[2.5rem] w-1/2 bg-[] pl-[1rem] rounded-md shadow-md'>
                        <p className='text-[#0D948B]'>01</p>

                        <h2 className='text-[#0B252B] font-bold'>Our Vision</h2>

                        <p>
                            To be a global leader in brewing innovative ideas that solve 
                            socio-economic issues using technology, talents and innovation.
                        </p>
                    </div>

                </div>
            </div>
            <div className='w-[40%] my-auto'>
                <img src={hero} alt="image" />
            </div>
        </div>
    </div>
  )
}

export default AboutUs