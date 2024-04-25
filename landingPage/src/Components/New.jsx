import React from 'react';
import boy from '../assets/Images/frame1.png';
import { LiaGreaterThanSolid } from "react-icons/lia";
import frame2 from '../assets/Images/frame2.jpeg';

const New = () => {
  return (
    <div className='container bg-[#FAFAFA] px-[6rem]'>
        <div className='flex space-x-[4rem]'>
            {/* 1st div */}
            <div className='w-[60%] flex flex-col mr-[2rem] border-l-[#ED4F05]'>
                <div className='flex flex-col space-y-2'>
                    <h1 className='text-[#042F2F] text-[2.2rem] font-bold'>
                        News and Insight
                    </h1>

                    <p className='text-0.5em font-light'>
                        Stay updated on digital commerce trends and tips with our blog.
                         Learn how technology can build your online business and join our community 
                         for expert insights.
                    </p>
                </div>

                <div className='flex mt-[2.2rem] h-[14rem]'>
                    <div className='w-[53%]'>
                        <img src={boy} alt="" className='h-[100%]'/>
                    </div>

                    <div className='w-[45%] shadow-lg px-3'>
                        <h1 className='text-[1.5em] mb-3 font-bold'>
                            The future of E-commerce
                        </h1>

                        <p className='font-light text-[0.9em] mt-2 mb-4'>
                            Stay updated on digital commerce trends and tips with our blog.
                            Learn how technology can build your online business and join our community 

                        </p>

                        <div  className='flex space-x-3'>
                        <small className=''>
                            Read more 
                        </small>

                        <small className='pt-[0.37em]'>
                        <LiaGreaterThanSolid />
                        </small>
                        </div>
                       
                    </div>
                </div>

            </div>

            <div className='flex flex-col w-1/3 mr-0'>
                {/* 2nd div */}
                <div className='w-3/4'>
                    <img src={frame2} alt="" />
                </div>

                <div className='w-[65%] shadow-lg px-3 ml-4 mt-[-2.9rem] bg-[#fff] h-[15rem]'>
                        <h1 className='text-[1.5em] mb-3 font-bold'>
                            The future of E-commerce
                        </h1>

                        <p className='font-light text-[0.9em] mt-2 mb-4'>
                            Stay updated on digital commerce trends and tips with our blog.
                            Learn how technology can build your online business and join our community 

                        </p>

                        <div  className='flex space-x-3'>
                        <small className=''>
                            Read more 
                        </small>

                        <small className='pt-[0.37em]'>
                        <LiaGreaterThanSolid />
                        </small>
                        </div>
                       
                    </div>
            </div>
        </div>
    </div>
  )
}

export default New