/*
  Warnings:

  - The migration will change the primary key for the `Journal` table. If it partially fails, the table could be left without primary key constraint.
  - The migration will change the primary key for the `Workout` table. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `id` to the `Journal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Workout` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Journal" DROP CONSTRAINT "Journal_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Workout" DROP CONSTRAINT "Workout_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ADD PRIMARY KEY ("id");
