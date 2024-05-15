import prisma from "@/app/lib/db"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { Heading1 } from "lucide-react"
import { NextResponse } from "next/server"

export async function GET() {
    const { getUser } = getKindeServerSession()

    const user = await getUser()

    if (!user || !user.id || user == null) {
        throw new Error("user not found or something went wrong")
    }

    // first we creating a call from prisnma to our db by creating it in a lib folder and we importing it her 
    // in order to check weather the user exists in our prisma files or not in order to push the user to the db

    let dbuser = await prisma.user.findUnique({
        where: {
            id: user.id
        }
    })

    if (!dbuser) {
        await prisma.user.create({
            data: {
                id: user.id,
                firstname: user.given_name ?? "",
                lastname: user.family_name ?? "",
                email: user.email ?? "",
                profileImage: user.picture ?? "",

            }
        })

    }

    // so here first of all we redirect a user to the guestbook page if he is already in our db
    // but when the login happening at the begining we redirect a user as we stated in our env file to http://localhost:3000/api/auth/creation
    // to check weather the user exisit or not in our db and if not we create a user in our db and then we redirect a user to the guestbook page
    // so its very important to check this thing hereb

    return NextResponse.redirect("http://localhost:3000/guestbook")



}