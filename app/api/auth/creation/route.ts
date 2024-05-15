// import prisma from "@/app/lib/db"
// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
// import { NextResponse } from "next/server"

// export async function GET() {
//     const { getUser } = getKindeServerSession()

//     const user = await getUser()


//     if (!user || !user.id) {
//         throw new Error("user not found or something went wrong")
//     }

//     // first we creating a call from prisnma to our db by creating it in a lib folder and we importing it her 
//     // in order to check weather the user exists in our prisma files or not in order to push the user to the db

//     let dbuser = await prisma.user.findUnique({
//         where: {
//             id: user.id
//         },
//     })

//     if (!dbuser) {
//         await prisma.user.create({
//             data: {
//                 id: user.id,
//                 firstname: user.given_name ?? "",
//                 lastname: user.family_name ?? "",
//                 email: user.email ?? "",
//                 profileImage: user.picture ?? "",

//             }
//         })

//     }

//     // so here first of all we redirect a user to the guestbook page if he is already in our db
//     // but when the login happening at the begining we redirect a user as we stated in our env file to http://localhost:3000/api/auth/creation
//     // to check weather the user exisit or not in our db and if not we create a user in our db and then we redirect a user to the guestbook page
//     // so its very important to check this thing hereb

//     return NextResponse.redirect("http://localhost:3000/guestbook")



// }



// ** api / auth / creation.js **
// ```javascript
import prisma from "@/app/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";
import { unstable_noStore as nostore } from 'next/cache';

const getUserFromSession = async () => {
    nostore();
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    if (!user || user === null || !user.id) {
        throw new Error(`User not found or something went wrong: ${user?.id} `);
    }
    return user;
};

const createUserInDb = async (user: any) => {
    try {
        const dbUser = await prisma.user.findUnique({
            where: {
                id: user.id,
            },
        });
        if (!dbUser) {
            await prisma.user.create({
                data: {
                    id: user.id,
                    firstname: user.given_name ?? " ",
                    lastname: user.family_name ?? " ",
                    email: user.email ?? " ",
                    profileImage: user.picture ?? " ",
                },
            });
        }
    } catch (error) {
        console.error(`Error creating user in DB: ${error} `);
        throw error;
    }
};

export async function GET() {
    try {
        const user = await getUserFromSession();
        await createUserInDb(user);
        return NextResponse.redirect("https://my-portofolio-tsx.vercel.app/guestbook", 302);
    } catch (error) {
        console.error(`Error in creation API: ${error} `);
        return new NextResponse(
            JSON.stringify({ message: "Error creating user" }),
            { status: 500 }
        );
    }
}
