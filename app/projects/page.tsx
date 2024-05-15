import { constants } from 'buffer'
import { type } from 'os'
import React from 'react'
import { client } from '../lib/sanity'
import Image from 'next/image'


interface Props {
    title: string,
    id: string,
    tags: string[],
    description: string,
    link: string,
    createdAt: string,
    type: string,
    image: string,
}


async function Getdata() {
    const query = `
    *[_type == "projects"]{
        "id":_id,
          title,
          tags,
          "image":image.asset->url,
          "createdAt":_createdAt,
          description,
          "type":_type,
          link
          
      }
    
    `

    const data = await client.fetch(query)

    return data

}

export default async function Projectpage() {

    const Data: Props[] = await Getdata()

    // console.log("here is the data", Data)


    return (

        <section className=' max-w-7xl  w-full px-4   mx-auto md:px-8 ' >
            <h1 className=' text-4xl font-semibold lg:text-5xl pt-5'>Projects </h1>
            <p className=' mt-2 leading-7 text-muted-foreground italic'>check my Recent Projects</p>
            <div className="  py-12  grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-1">
                {Data.map((item) => (
                    <a href={item.link} key={item.id} className="  rounded-lg shadow-lg overflow-hidden group block" target='_blank'>
                        {/* dont forget here to go to tailwind and install the pluging and core plugins the add them to your tailwind config file  */}
                        <div className=" aspect-w-16 aspect-h-12 overflow-hidden rounded-2xl relataive">
                            <Image layout='fill' src={item.image} alt={item.description} className="object-cover object-center group-hover:scale-125 transition-transform duration-800 rounded-xl" />

                        </div>
                        <div className=" font-medium text-lg px-4 py-2">
                            <h2> {item.title}</h2>
                            <p className="text-sm text-muted-foreground  break-words line-clamp-3">{item.description}</p>
                            <div className=" mt-3 flex flex-wrap gap-2">
                                {item.tags.map((tag, index) => (
                                    <span key={index} className="inline-flex items-center px-2.5  font-bold  rounded-md bg-primary/10
                                     py-1.5 text-xs sm:text-sm  italic antialiased text-blue-900 ring-2 ring-inset ring-primary/20
                           ">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>

        </section>

    )
}

