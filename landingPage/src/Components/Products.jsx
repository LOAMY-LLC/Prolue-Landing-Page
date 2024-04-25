import React from 'react';
import phone from '../assets/Images/phone.png'

const Products = () => {
  return (
    <div className='container bg-[#F0FDFA] pb-[3rem]'>

        <div className=' my-3 pt-3'>
        <h2 className='text-center font-[800] bg-white w-[12rem] mx-auto 
            rounded-3xl text-[#0D948B] mb-[1rem]  text-[0.9em]'>
                Services and Features
            </h2>

            <h1 className='text-[#042F2F] text-center font-[800] text-[40px] mb-[1rem]'>
                Our Products
            </h1>

            <p className='text-center w-[57%] mx-auto mb-[1.5rem]'>
                Introducing our revolutionary digital commerce solution powered by 
                cutting-edge technology. Seamlessly blending innovation and technology, our Products 
                redefine the landscape of online commerce, empowering businesses to thrive in the digital era.
            </p>

            <div>
                <div  className='flex bg-white mx-auto w-[17.5rem] rounded-2xl
                 mb-[2rem] text-[0.9em] h-[2.8rem]'>
                    <div className='bg-[#0F7670] text-white rounded-2xl w-[45%] ml-1 pt-2 my-1 mr-2'>
                        <h1 className='text-center'>
                            Prolue
                        </h1>
                    </div>
                    <div className='w-[45%] '>
                        <h1 className='pt-[1.0em]'>
                            Upcoming Products
                        </h1>
                    </div>  
                   
                  
                </div>

            </div>
        </div>

        <div className='mt-[5rem] flex justify-evenly w-[80%] mx-auto '>

{/* first */}
<div className='flex flex-col space-y-[1.5rem] w-1/3 my-[5rem]'>
    <div className=''>
        <h1 className='font-bold text-[#042F2F] text-[1.3rem] mb-[1.5rem]'>
            Prolue
        </h1>

        <p>
            A user-centric digital marketplace that enables merchants to 
            create and manage their online stores with ease.
        </p>
    </div>

    <div>
        <h1 className='font-bold text-[#042F2F] text-[1.3rem] mb-[1.3rem]'>
            Prolue integrates social-media features
        </h1>

        <p>
            Introducing our revolutionary digital commerce solutions powered 
            by cutting-edge technology. Seamlessly blending innovation and efficiency.
        </p>

    </div>
</div>

{/* second */}
<div className='mx-[3rem] '>
    <img src={phone} alt="image" className='h-[30rem]' />
</div>

{/* third */}
<div className='flex flex-col space-y-[1.5rem] w-1/3 my-[5rem]'>
    <div className=''>
        <h1 className='font-bold text-[#042F2F] text-[1.3rem] mb-[1.5rem]'>
            Digital Marketing Capabilities
        </h1>

        <p>
            A user-centric digital marketplace that enables merchants to 
            create and manage their online stores with ease.
        </p>
    </div>

    <div>
        <h1 className='font-bold text-[#042F2F] text-[1.3rem] mb-[1.5rem]'>
            Advance Email Marketing
        </h1>

        <p>
            Introducing our revolutionary digital commerce solutions powered 
            by cutting-edge technology. Seamlessly blending innovation and efficiency.
        </p>

    </div>
</div>
            
        </div>

    </div>
  )
}

export default Products