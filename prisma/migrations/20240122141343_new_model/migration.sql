/*
  Warnings:

  - Added the required column `rating` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "rating" DECIMAL(2,1) NOT NULL;

-- CreateTable
CREATE TABLE "Seat" (
    "id" SERIAL NOT NULL,
    "seatRow" TEXT NOT NULL,
    "seatNumber" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Seat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_SeatToTicket" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_SeatToTicket_AB_unique" ON "_SeatToTicket"("A", "B");

-- CreateIndex
CREATE INDEX "_SeatToTicket_B_index" ON "_SeatToTicket"("B");

-- AddForeignKey
ALTER TABLE "_SeatToTicket" ADD CONSTRAINT "_SeatToTicket_A_fkey" FOREIGN KEY ("A") REFERENCES "Seat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_SeatToTicket" ADD CONSTRAINT "_SeatToTicket_B_fkey" FOREIGN KEY ("B") REFERENCES "Ticket"("id") ON DELETE CASCADE ON UPDATE CASCADE;
