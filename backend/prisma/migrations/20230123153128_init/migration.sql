/*
  Warnings:

  - Added the required column `wordID` to the `SimpleGame` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_GameState" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mistakes" TEXT NOT NULL,
    "gameState" TEXT NOT NULL,
    "word" TEXT NOT NULL,
    "wordID" INTEGER NOT NULL
);
INSERT INTO "new_GameState" ("gameState", "id", "mistakes", "word") SELECT "gameState", "id", "mistakes", "word" FROM "GameState";
DROP TABLE "GameState";
ALTER TABLE "new_GameState" RENAME TO "SimpleGame";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
