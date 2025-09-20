-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "ayushManBharatID" TEXT,
ADD COLUMN     "balance" TEXT DEFAULT '23000',
ADD COLUMN     "expieryTime" TEXT DEFAULT '3 months',
ADD COLUMN     "familySize" TEXT DEFAULT '4';
