
"use server"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import prisma from "./lib/db";
import { revalidatePath } from "next/cache";


export async function PostData(formdata: FormData) {
    const { getUser } = getKindeServerSession();

    const user = await getUser();

    if (!user) {
        throw new Error("user not been authed or you need to sign in/up"); 
    }

    const message = formdata.get("message") as string;

    // console.log("hey how you doing")

    const data = await prisma.guestbookEntry.create({
        data: {
            // id: user.id+1,
            userId: user.id,
            message: message as string,

        },
    });

    revalidatePath("/guestbook");
}
