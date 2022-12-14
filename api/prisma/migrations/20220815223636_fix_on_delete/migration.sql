-- DropForeignKey
ALTER TABLE "GameNCollection" DROP CONSTRAINT "GameNCollection_collectionId_fkey";

-- DropForeignKey
ALTER TABLE "GameNCollection" DROP CONSTRAINT "GameNCollection_gameId_fkey";

-- DropForeignKey
ALTER TABLE "Token" DROP CONSTRAINT "Token_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserNGame" DROP CONSTRAINT "UserNGame_gameId_fkey";

-- DropForeignKey
ALTER TABLE "UserNGame" DROP CONSTRAINT "UserNGame_userId_fkey";

-- AddForeignKey
ALTER TABLE "Token" ADD CONSTRAINT "Token_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserNGame" ADD CONSTRAINT "UserNGame_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserNGame" ADD CONSTRAINT "UserNGame_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameNCollection" ADD CONSTRAINT "GameNCollection_gameId_fkey" FOREIGN KEY ("gameId") REFERENCES "Game"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GameNCollection" ADD CONSTRAINT "GameNCollection_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;
