import Image from 'next/image'
import React from 'react'

import simon from "../../public/simon.jpg"

const Hero = () => {
    const Email = process.env.NEXT_PUBLIC_EMAIL

    // console.log("the email is ", Email)
    return (
        <div className=' grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
            <div className=" col-span-1 lg:col-span-2 h-full bg-gray-100 min-h-[500px] lg:min-h-[300px] rounded-2xl p-8 ">
                <h1 className=' text-center  text-4xl lg:text-4xl font-medium'>  Welcome To My Personal Portoflio  </h1>
                <h2 className='  text-4xl text-center lg:text-3xl font-normal mt-3'>🚀 Aspiring  Full-Stack Developer💻 Passionate about Building Innovative Solutions</h2>
                <p className='  lg:text-center lg:py-4 lg:leading-9   lg:font-semibold'> Am someone who enjoys engaging in meaningful and insightful conversations with others. I thrive on exploring a wide range of topics, from technology and science to arts and personal development. With a curiosity-driven mindset, I appreciate the opportunity to learn and share knowledge if i could . A friendly and approachable individual, I find joy in connecting with others and discovering new perspectives. </p>
                {/* imported by  devdojo.com  */}
                <a href={`mailto:${Email}`} className="relative inline-block text-lg group">

                    {/* {console.log("the email is ", process.env.NEXT_PUBLIC_EMAIL)} */}
                    <span className="relative  mt-5 z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                        <span className="relative">Get In Touch</span>
                    </span>
                    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </a>


            </div>
            <Image src={simon} alt="simon" priority objectFit="cover" className="rounded-2xl col-span-1 object-cover h-[500px] bg-gray-100 " />


        </div>
    )
}

export default Hero
