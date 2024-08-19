import Image from 'next/image'
import React from 'react'
import square from "../../public/square.jpg"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Bootstrap from "../../public/Bootstrap icon.svg"
import Nextjs from "../../public/next.svg"
import discord from "../../public/discord.svg"
import figma from "../../public/Figma.svg"
import vercel from "../../public/vercel.svg"
import visual from "../../public/visual.svg"
import prisma from "../../public/prisma.svg"
import python from "../../public/python.svg"
import flask from "../../public/flask.svg"
import react from "../../public/react.svg"
import nextjs from "../../public/nextjs.svg"
import nodejs from "../../public/nodejs.svg"
import tailwind from "../../public/tailwind.svg"
import sql from "../../public/sql.svg"
// Social icons : 
import twiiter from "../../public/Twitter.svg"
import facebook from "../../public/Facebook.svg"
import linkedin from "../../public/LinkedIn.svg"
import { Item } from '@radix-ui/react-navigation-menu'
import { Button } from '../ui/button'

const SecTwo = () => {
    const icons = [
        { id: 1, name: "React", icon: react },
        { id: 2, name: "Next.js", icon: nextjs },
        { id: 3, name: "Node.js", icon: nodejs },
        { id: 4, name: "Python", icon: python },
        { id: 5, name: "Flask", icon: flask },
        { id: 6, name: "Prisma", icon: prisma },
        { id: 7, name: "Bootstrap", icon: Bootstrap },
        { id: 8, name: "Tailwind", icon: tailwind },
        { id: 9, name: "SQL", icon: sql },
    ];


    const social = [
        {
            id: 1,
            icon: twiiter,
            name: "Twitter",
            username: "@liam",
            link: "localhost:3000"

        },
        {
            id: 2,
            icon: facebook,
            name: "Facebook",
            username: "@liam",
            link: "localhost:3000"

        },
        {
            id: 3,
            icon: linkedin,
            name: "LinkedIn",
            username: "@liam",
            link: "https://www.linkedin.com/in/mazin-mohamed-ishag-musa-643868316/"
        }
    ]

    // console.log("here is the icons", icons)
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10'>
            <div className=" w-full relative col-span-1">
                <Image src={square} alt="square" priority objectFit="cover" className="rounded-2xl w-full h-full object-cover  bg-gray-100 " />
            </div>
            <div className="  flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
                <Card className=' bg-gray-100 border-none'>
                    <CardHeader>
                        <CardTitle>
                            Explore my Stack
                        </CardTitle>
                        <CardDescription className='   font-bold'>
                            Check out
                        </CardDescription>
                        <CardContent className=' flex flex-wrap  gap-4'>
                            {icons.map((icon, index) => (
                                <div
                                    key={icon.id}
                                    className="relative w-16 h-16 flex justify-center items-center rounded-full bg-gray-200 group hover:animate-bounce"
                                >
                                    <Image
                                        src={icon.icon}
                                        alt={icon.name}
                                        priority
                                        objectFit="cover"
                                        className="w-16 h-16 rounded-full transition-transform transform group-hover:scale-110"
                                    />
                                    <div className="absolute bottom-full mb-2 hidden group-hover:block text-center text-sm bg-black text-white px-2 py-1 rounded">
                                        {icon.name}
                                    </div>
                                </div>
                            ))}

                        </CardContent>
                    </CardHeader>
                </Card>
                <div className=" grid grid-cols-1 sm:grid-cols-3 w-full  gap-4">
                    {social.map((icon, index) => (
                        <Card key={icon.id} className={`p-4 flex flex-col  items-center sm:items-start  border-none
                        ${icon.name.toLocaleLowerCase() === "linkedin" ? 'bg-green-400' : 'bg-gray-200' }
                        `}>
                            <Image src={icon.icon} alt={icon.name} priority objectFit="cover" className=" w-16 h-16 " />
                            <h1 className=' text-2xl font-medium pt-3'>{icon.name}</h1>
                            <p className=' text-muted-foreground'>{icon.username}</p>
                            <Button
                                size={"sm"}
                                className='mt-4'
                            >
                                <a target='_blank' href={icon.link}>Follow</a>
                            </Button>

                        </Card>


                    ))}

                </div>
            </div>



        </div>
    )
}

export default SecTwo
