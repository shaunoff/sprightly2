-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Journal" (
    "eventId" TEXT NOT NULL,
    "text" TEXT NOT NULL,

    PRIMARY KEY ("eventId")
);

-- CreateTable
CREATE TABLE "Workout" (
    "eventId" TEXT NOT NULL,
    "text" TEXT NOT NULL,

    PRIMARY KEY ("eventId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Journal_eventId_unique" ON "Journal"("eventId");

-- CreateIndex
CREATE UNIQUE INDEX "Workout_eventId_unique" ON "Workout"("eventId");

-- AddForeignKey
ALTER TABLE "Event" ADD FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Journal" ADD FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Workout" ADD FOREIGN KEY ("eventId") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;
