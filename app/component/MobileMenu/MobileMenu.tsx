"use client"
import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react';
import React, { useState, useEffect } from 'react'
import { navigationItems } from '../nav/Nav';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Input } from '@/components/ui/input';

const MobileMenu = () => {
    const location = usePathname()
    const [open, setopen] = useState(false)
    useEffect(() => {
        setopen(false)
    }, [location])

    return (
        <Sheet open={open} onOpenChange={(state) => setopen(state)}>
            <SheetTrigger asChild>
                <Button
                    variant={'outline'}
                    size={'icon'}
                >
                    <Menu />
                    {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg> */}
                </Button>
            </SheetTrigger>
            <SheetContent>
                <div className="  mt-5 flex flex-col px-2 space-y-1 ">
                    {/* importing the navigation bar that we had  */}
                    {navigationItems.map((item, index) => (
                        <Link
                            className={
                                `   group flexitems-center px-2 py-2 text-md font-semibold rounded-md ,
                             ${location == item.href ? " bg-muted" : "hover:bg-muted  hover:bg-opacity-75"}`
                            }
                            href={item.href} key={index} >
                            {item.name}
                        </Link>
                    ))}
                </div>
                {/* The close  */}
                <SheetFooter>
                    <SheetClose asChild>
                        <Button type='submit' >Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet >
    );
};

export default MobileMenu


