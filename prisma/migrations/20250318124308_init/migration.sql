-- CreateTable
CREATE TABLE "User" (
    "Id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT,
    "Email" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "Role" TEXT NOT NULL,
    "Date" DATETIME
);

-- CreateIndex
CREATE UNIQUE INDEX "User_Email_key" ON "User"("Email");
