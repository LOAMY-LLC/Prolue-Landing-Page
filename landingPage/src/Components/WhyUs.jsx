import React from 'react'

const WhyUs = () => {
  return (
    <div className='container'>
        <div className='pt-[4rem] bg-[#042F2F] '>
            <div className='mx-auto w-[5rem] rounded-3xl '>
                <p className='text-center text-[#0D948B]'>
                    Why Us
                </p>
            </div>

            <div className='mx-auto'>
                <h1 className='text-[#F0FDFA] text-center text-[40px] font-[800] mt-3 font-[Raleway]'>
                    Why Choose Loamy LLC
                </h1>
            </div>

            <div className='w-[60%] mx-auto'>
                <p className='text-[#F0FDFA] text-center text-[0.85em] mt-3  '>
                    Choose us for our unparalled expertise in digital commerce, backed by years of 
                    industry-leading innovation. With a commitment to staying at the forefront of 
                    technological advancements, we offer cutting-edge solutions that elevate your online 
                    business to new heights. Partner with us for a seamless and tailored approach, ensuring 
                    your success in the ever-evolving digital marketplace.
                </p>
            </div>

            <div className='flex w-[80%] mx-auto mt-[2rem] mb-[2rem]'>
            {/* 1st div */}
            <div className='bg-[#F0FDFA] w-[40%] py-[2rem] px-[2rem] mb-[2rem] rounded-2xl'>
                <h1 className='text-[#ED4F05] font-bold text-[1.9em] mb-[1rem]'>
                    Innovation
                </h1>

                <p className='font-light text-[0.9em] '>
                    We are at the forefront of digital commerce, integrating cutting-edge 
                    technologies to simplify and enhance online shopping experiences.
                </p>
            </div>

            {/* 2nd div */}
            <div className='bg-[#F0FDFA] w-[40%] py-[2rem] px-[2rem] mb-[2rem] rounded-2xl ml-[-8rem] shadow-2xl'>
                <h1 className='text-[#115E5B] font-bold text-[1.9em] mb-[1rem]'>
                    Community Building
                </h1>

                <p className=' text-[0.9em] font-light'>
                    Our platforms are designed to foster a sense of community among merchants 
                    and customers, encouraging engagement and loyalty.
                </p>
            </div>

            {/* 3rd div */}
            <div className='bg-[#F0FDFA] w-[40%] py-[2rem] px-[2rem] mb-[2rem] rounded-2xl ml-[-8rem] shadow-2xl'>
                <h1 className='text-[#042F2F] font-bold text-[1.9em] mb-[1rem]'>
                    Simplicity and Growth
                </h1>

                <p className='font-light text-[0.9em]'>
                    We make it easier for businesses to establish their online presence, providing tools 
                    and resources to help them grow and succeed.
                </p>
            </div>


        </div>

        </div>

       

    </div>
  )
}

export default WhyUs