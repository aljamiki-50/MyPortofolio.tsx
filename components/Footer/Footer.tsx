"use client"


import { navigationItems } from '@/app/component/nav/Nav'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <footer className='  my-2 sm:my-12'>
            <ul className='flex flex-wrap justify-center'   >
                {navigationItems.map((item, index) => (
                    <div key={index}
                        className=" px-5 py-2">
                        <Link href={item.href} key={item.href} className=' text-muted-foreground'>
                            {item.name}
                        </Link>
                    </div>
                ))}
            </ul>

            <p className=' text-muted-foreground    text-center mt-2'>Copyright: BY Liam All rights reserved</p>

        </footer>
    )
}

export default Footer