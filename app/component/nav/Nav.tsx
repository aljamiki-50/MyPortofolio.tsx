"use client"

import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import path from 'path'
import React from 'react'
import MobileMenu from '../MobileMenu/MobileMenu'


export const navigationItems = [
    {
        name: "Home",
        href: "/",
        current: false,
    },
    {
        name: "guestbook",
        href: "/guestbook",
        current: false,
    },
    {
        name: "projects",
        href: "/projects",
        current: false,
    },
    {
        name: "Contact",
        href: "/contact",
        current: false,
    },
]

const NavBar = () => {
    const pathanme = usePathname()
    const Email = process.env.NEXT_PUBLIC_EMAIL
    return (
        <nav className=' max-w-7xl mx-auto px-4 py-5  md:px-5 grid grid-cols-12'>
            <div className=" col-span-6 md:col-span-3 flex">
                <Link href="/">
                    <h1 className=' text-3xl  font-semibold'>Liam  <span className='text-blue-500'> M M</span> </h1>

                </Link>
            </div>
            {/*  */}
            <div className=" hidden sm:flex justify-center items-center col-span-6">
                <NavigationMenu >
                    <NavigationMenuList>
                        {navigationItems.map((item, index) => (
                            <NavigationMenuList key={index} >
                                <Link href={item.href} legacyBehavior passHref className=' active:bg-red-700' >
                                    <NavigationMenuLink
                                        active={pathanme === item.href ? true : false}
                                        className={navigationMenuTriggerStyle()}>
                                        {item.name}
                                    </NavigationMenuLink>
                                </Link>

                            </NavigationMenuList>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            {/*   */}
            <div className=" flex items-center justify-end  col-span-6 md:col-span-3 ">
                <Button
                    asChild

                    className=' hidden sm:flex' >
                    <a href={`mailto:${Email}`} className=' text-white'>
                        Contact
                    </a>
                </Button>
                {/* Mobile Item */}
                <div className=' sm:hidden '>
                    <MobileMenu
                    />
                </div>
            </div>

        </nav>
    )
}

export default NavBar
