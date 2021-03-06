/*
  Warnings:

  - You are about to drop the column `text` on the `Journal` table. All the data in the column will be lost.
  - Added the required column `entry` to the `Journal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rating` to the `Journal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Journal" DROP COLUMN "text",
ADD COLUMN     "entry" TEXT NOT NULL,
ADD COLUMN     "rating" INTEGER NOT NULL;
