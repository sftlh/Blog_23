import prisma from "@/utils/connect";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
        const popular = await prisma.post.findMany({
            orderBy:{
                views:"desc"
            },
            take:4,           
        }); 
        return new NextResponse(JSON.stringify(popular, {status:200}))
    } catch (error) {
        return new NextResponse(JSON.stringify({message:"Something went wrong !"}, {status:500}))
    }
}