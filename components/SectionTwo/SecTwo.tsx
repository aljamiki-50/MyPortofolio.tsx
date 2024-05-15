import Image from 'next/image'
import React from 'react'
import square from "../../public/square.jpg"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Bootstrap from "../../public/Bootstrap icon.svg"
import Nextjs from "../../public/next.svg"
import chrome from "../../public/chrome icon.svg"
import discord from "../../public/discord.svg"
import figma from "../../public/Figma.svg"
import github from "../../public/github icon.svg"
import vercel from "../../public/vercel.svg"
import visual from "../../public/visual.svg"
import cloud from "../../public/cloudflare icon.svg"
// Social icons : 
import twiiter from "../../public/Twitter.svg"
import facebook from "../../public/Facebook.svg"
import linkedin from "../../public/LinkedIn.svg"
import { Item } from '@radix-ui/react-navigation-menu'
import { Button } from '../ui/button'

const SecTwo = () => {
    const icons = [
        Bootstrap,
        Nextjs,
        chrome,
        discord,
        figma,
        github,
        vercel,
        visual,
        cloud,

    ]

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
            link: "localhost:3000"
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
                        <CardDescription>
                            chekc out the tool i use daily

                        </CardDescription>
                        <CardContent className=' flex flex-wrap  gap-4'>
                            {icons.map((icon, index) => (
                                <div
                                 key={index}
                                 className=" w-16 h-16 flex justify-center items-center rounded-full bg-gray-200">
                                    <Image src={icon} alt="icon" priority objectFit="cover" className=" w-16 h-16 rounded-full" />
                                </div>
                            ))}


                        </CardContent>

                    </CardHeader>
                </Card>
                <div className=" grid grid-cols-1 sm:grid-cols-3 w-full  gap-4">
                    {social.map((icon, index) => (
                        <Card key={icon.id} className=' p-4 flex flex-col  items-center sm:items-start bg-gray-100 border-none'>
                            <Image src={icon.icon} alt={icon.name} priority objectFit="cover" className=" w-16 h-16 " />
                            <h1 className=' text-2xl font-medium pt-3'>{icon.name}</h1>
                            <p className=' text-muted-foreground'>{icon.username}</p>
                            <Button
                                size={"sm"}
                                className='mt-4'
                            >
                                <a href={icon.link}>Follow</a>
                            </Button>

                        </Card>


                    ))}

                </div>
            </div>



        </div>
    )
}

export default SecTwo
