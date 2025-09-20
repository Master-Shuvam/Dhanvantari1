import { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import { NEXT_AUTH_CONFIG } from '@/lib/auth';
import { postgres } from '@/lib/prisma';

// const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // if (req.method !== 'GET') {
    //     return res.status(405).json({ message: 'Method not allowed' });
    // }

    try {
        const session = await getServerSession(NEXT_AUTH_CONFIG);

        if (!session?.user?.email) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const user = await postgres.user.findFirst({
            where: {
                email: session.user.email,
            },
            select: {
                id: true,
                name: true,
                email: true,
                image: true,
                balance: true,
                familySize: true,
                expieryTime: true,
                ayushManBharatID: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        console.log(user);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error('Error fetching user details:', error);
        res.status(500).json({ message: 'Internal server error' });
    } finally {
        await postgres.$disconnect();
    }
}

// Alternative for App Router (app/api/user/details/route.ts)
/*
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../../auth/[...nextauth]/route'; // Adjust path as needed
import { PrismaClient } from '../../../src/generated/prisma'; // Adjust path to your generated Prisma client

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    
    if (!session?.user?.email) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        balance: true,
        familySize: true,
        expieryTime: true,
        ayushManBharatID: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (error) {
    console.error('Error fetching user details:', error);
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
*/