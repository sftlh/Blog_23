import { PrismaAdapter } from "@auth/prisma-adapter";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./connect";
import { getServerSession } from "next-auth";

export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers:[
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            profile(profile){
                return{
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.image,
                    role: profile.role
                }
            }
        }),
    ],
    callbacks:{
        async jwt({token, user}){
            if(user){
                token.role = user.role
            }

            return token
        },
        async session({session, token}){
            session.user.role = token.role
            return session
        }
    },
    session:{
        strategy:'jwt'
    }
}

export const getAuthSession = () => getServerSession(authOptions)