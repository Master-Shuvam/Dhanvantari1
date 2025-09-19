import { DefaultUser, DefaultSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { postgres } from "./prisma";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            accessToken: string;
            login?: string;
        } & DefaultSession["user"];
    }

    interface User extends DefaultUser {
        id: string;
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        uid?: string;
    }
}

export const NEXT_AUTH_CONFIG = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
            profile(profile, tokens) {
                return {
                    id: profile.sub,
                    name: profile.name,
                    email: profile.email,
                    image: profile.picture,
                    accessToken: tokens.access_token
                }
            },
        }),
        // CredentialsProvider({
        //     name: 'Credentials',
        //     credentials: {
        //         username: { label: 'email', type: 'text', placeholder: '' },
        //         password: { label: 'password', type: 'password', placeholder: '' },
        //     },
        //     async authorize(credentials: any) {

        //         return {
        //             id: "user1",
        //             name: "asd",
        //             userId: "asd",
        //             email: "ramdomEmail"
        //         };
        //     },
        // }),
    ],
    adapter: PrismaAdapter(postgres),
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: async ({ user, token, account }: any) => {
            if (user) {
                token.uid = user.id;
            }
            if(account){
                token.accessToken = account.accessToken;
            }
            return token;
        },
        session: ({ session, user}: any) => {
            if (user.id) {
                session.user.id = user.id;
                session.user.accessToken = user.accessToken;
                session.user.login = user.login;
            }
            return session
        }
    },
    pages: {
        signIn: '/',
    }
}