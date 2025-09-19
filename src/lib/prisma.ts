import { PrismaClient } from "@/generated/prisma"; 
import { PrismaClient as PostgresClient } from '@/generated/prisma'
import { PrismaClient as MongoClient } from '@/generated/mongo'

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
 
export const prisma = globalForPrisma.prisma || new PrismaClient()
 
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

declare global {
  var __postgres: PostgresClient | undefined
  var __mongo: MongoClient | undefined
}

export const postgres = globalThis.__postgres || new PostgresClient()
export const mongo = globalThis.__mongo || new MongoClient()

if (process.env.NODE_ENV !== 'production') {
  globalThis.__postgres = postgres
  globalThis.__mongo = mongo
}