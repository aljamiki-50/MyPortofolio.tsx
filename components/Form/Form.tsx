
"use client"
import React, { useRef } from 'react'
import { Input } from '../ui/input'
import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'
import { Loader, Loader2 } from 'lucide-react'
import { PostData } from '@/app/action'

const Form = () => {
    const formref = useRef<HTMLFormElement>(null)
    return (
        <form
            ref={formref}
            action={async (formdata) => {
                await PostData(formdata)
                formref.current?.reset()

                
            }}
            className='flex flex-col justify-between gap-4  md:flex-row'>
            <Input type='text' name='message' maxLength={80} minLength={1} placeholder='your Message ...'
                required
                className='w-full' />
            <SubmittButton />

        </form>
    )
}

export default Form



function SubmittButton() {

    const { pending } = useFormStatus()

    console.log("the pending is ", pending)

    return (
        <>
            {pending ? <Button disabled variant={"outline"}  >
                <Loader2 className='animate-spin h-5 w-5 mr-2' />
                Please Waiting ..
            </Button>
                :
                <Button variant={"default"}  >send</Button>}
        </>
    )

}
