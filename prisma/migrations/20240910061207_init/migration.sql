-- CreateTable
CREATE TABLE "bubble" (
    "id" SERIAL NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "message" TEXT NOT NULL,
    "touched" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "bubble_pkey" PRIMARY KEY ("id")
);
