import React from 'react'
import { Card } from '../ui/card'
import strom from "../../public/sotrm.jpg"
import Image from 'next/image'

const AboutSec = () => {
    const Email = process.env.NEXT_PUBLIC_EMAIL

    return (
        <div className=' grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10'>
            <Card className=' lg:py-10 col-span-1 lg:col-span-2 border-none bg-gray-100 gap4 '>
                <h1 className=' text-xl lg:text-6xl '>🔥 Passionate & Ever-Stylish Web Developer with a Love for Creating 🌟 </h1>
                <p className=" lg:py-2 mt-4 text-muted-foreground lg:text-lg ">
                    ✨ Fueled by creativity and innovation,
                     I bring style and passion to every project.
                      Whether crafting dynamic websites or building seamless 
                      user experiences, I'm dedicated to delivering excellence and bringing ideas to life. 🚀💻
                </p>
                {/* The imported button if you remmmber : */}
                <a href={`mailto:${Email}`} className="relative inline-block text-lg group">

                    {/* {console.log("the email is ", process.env.NEXT_PUBLIC_EMAIL)} */}
                    <span className="relative  mt-5 z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                        <span className="relative">Get In Touch</span>
                    </span>
                    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </a>

            </Card>
            <div className=" col-span-1">
                <Image src={strom} alt="strom" priority objectFit="cover" className="rounded-2xl object-cover h-[500px] bg-gray-100 " />
            </div>


        </div>
    )
}

export default AboutSec
