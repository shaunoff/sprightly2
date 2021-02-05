-- CreateTable
CREATE TABLE "Calendar" (
    "day_id" TIMESTAMP(3) NOT NULL,
    "year" INTEGER NOT NULL,
    "month" INTEGER NOT NULL,
    "day" INTEGER NOT NULL,
    "quarter" INTEGER NOT NULL,
    "day_of_week" INTEGER NOT NULL,
    "day_of_year" INTEGER NOT NULL,
    "week_of_year" INTEGER NOT NULL,

    PRIMARY KEY ("day_id")
);
