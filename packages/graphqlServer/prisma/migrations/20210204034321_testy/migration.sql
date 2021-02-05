/*
  Warnings:

  - The migration will change the primary key for the `Calendar` table. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Calendar" DROP CONSTRAINT "Calendar_pkey",
ALTER COLUMN "day_id" SET DATA TYPE TEXT,
ADD PRIMARY KEY ("day_id");
