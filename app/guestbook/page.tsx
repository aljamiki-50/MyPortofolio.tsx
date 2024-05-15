import Form from '@/components/Form/Form';
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import React, { Suspense } from 'react'
import prisma from '../lib/db';
import LoadingMessagesSkeleteon, { LoadingFormSkeleteon } from '@/components/Skeleton/LoadingMessagesSkeleteon';



// The query to fetch back the data from the database
async function GuestBookEntry() {

  const data = await prisma.guestbookEntry.findMany({
    select: {
      User: {
        select: {
          firstname: true,
          profileImage: true,
        },
      },
      message: true,
      id: true,
    },
    orderBy: {
      createdAt: 'desc',

    },
    take: 30,

  });

  return data



}

// Let s fetch it a side here byb
async function GuesbookEntries() {
  const data = await GuestBookEntry()


  if (!data) {
    return <div>
      <p className='  p-5  font-bold '>No Data</p>
    </div>

  }

  return data.map((item) => {
    return (
      <li key={item.id} className="flex flex-col gap-y-2 w-full">
        <div className="flex  space-x-3 items-center">
          <img
            src={item.User?.profileImage || ""}
            alt={item.User?.firstname || ""}
            className="w-10 h-10 rounded-lg"
          />
          <p className="text-sm text-muted-foreground  break-words">{item.User?.firstname}: <span className=' text-foreground'>{item.message}</span></p>
        </div>
      </li>
    );
  })

}


const page = () => {
  return (
    <section className=' max-w-7xl  w-full px-4   mx-auto md:px-8 ' >
      <h1 className=' text-4xl font-semibold lg:text-5xl pt-5' >GuestBook</h1>
      <p className=' italic text-xl leading-7 mt-2 text-muted-foreground'>sign My Guest !:</p>
      <Card className=' mt-10'>
        <CardHeader className='flex flex-col    gap-y-2 w-full'>
          <Label className=' font-semibold'>Liam on board</Label>
          <Suspense fallback={<LoadingMessagesSkeleteon />}>
            <GuestBookForm />
          </Suspense>
          <ul className=' pt-7 gap-y-5 flex flex-col'>
            <Suspense fallback={<LoadingFormSkeleteon />}>
              <GuesbookEntries />
            </Suspense>
          </ul>

        </CardHeader>
      </Card>


    </section>
  )
}

export default page









async function GuestBookForm() {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  //  console.log("the user is ", user)

  if (user) {
    return (
      <Form />
    )
  }

  return (
    <div className=' flex  justify-between gap-4 flex-col  md:flex-row'>
      <Input type='text' placeholder='write question here' className='w-full' />
      <RegisterLink> <Button className=' w-full' variant={"default"}  >Sign For Free</Button></RegisterLink>


    </div >
  )

}
