import React from 'react'

const Positions = () => {
  return (
    <div className='container bg-[#F0FDFA]'>
        <div className='w-[80%] mx-auto'>
            <h1 className='text-center pt-[3rem] text-[40px] font-bold'>
                Explore Open Positions
            </h1>

            <p className='text-[1.1rem] font-light w-[60%] mx-auto text-center mt-3 pb-[2rem]'>
                Discover exciting opportunitiees across the globe. Find the perfect fit for 
                your skills and aspirations in one of our diverse departments.
            </p>

            <p className='text-[1.5em] font-bold pb-[1em]'>
                Current Openings
            </p>

            <div className='ml-4 flex flex-col '>
                {/* 1st item */}
                <div className='flex flex-col shadow-xl px-[2rem] py-[1rem] mb-[2rem]'>
                <div className='flex justify-between'>
                    <h1 className='text-[24px] text-[#1E1E1E] font-[600]'>
                        Product designer
                    </h1>

                    <p className='text-[#ED4F05] font-[600] text-[16px]'>
                        Read full description
                    </p>

                </div>

                <div className='mt-[1rem] text-[#1E1E1E] text-[18px] font-light'>
                    <p className='text-[0.8em]'>
                        Drive brand awareness, engagement and growth through strategic marketing 
                        campaigns and initiatives. Develop and execute creative marketing strategies 
                        across various channels to reach our target audience effectively.
                    </p>
                </div>

                </div>
                
                {/* 2nd item */}
                <div className='flex flex-col shadow-xl px-[2rem] py-[1rem] mb-[2rem]'>
                <div className='flex justify-between'>
                    <h1 className='text-[24px] text-[#1E1E1E] font-[600]'>
                        Product designer
                    </h1>

                    <p className='text-[#ED4F05] font-[600] text-[16px]'>
                        Read full description
                    </p>

                </div>

                <div className='mt-[1rem] text-[#1E1E1E] text-[18px] font-light'>
                    <p className='text-[0.8em]'>
                        Drive brand awareness, engagement and growth through strategic marketing 
                        campaigns and initiatives. Develop and execute creative marketing strategies 
                        across various channels to reach our target audience effectively.
                    </p>
                </div>

                </div>


                {/* 3rd item */}
                <div className='flex flex-col shadow-xl px-[2rem] py-[1rem] mb-[2rem]'>
                <div className='flex justify-between'>
                    <h1 className='text-[24px] text-[#1E1E1E] font-[600]'>
                        Product designer
                    </h1>

                    <p className='text-[#ED4F05] font-[600] text-[16px]'>
                        Read full description
                    </p>

                </div>

                <div className='mt-[1rem] text-[#1E1E1E] text-[18px] font-light'>
                    <p className='text-[0.8em]'>
                        Drive brand awareness, engagement and growth through strategic marketing 
                        campaigns and initiatives. Develop and execute creative marketing strategies 
                        across various channels to reach our target audience effectively.
                    </p>
                </div>

                </div>
                

            </div>
        </div>

    </div>
  )
}

export default Positions