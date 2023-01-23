-- CreateTable
CREATE TABLE "Word" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "word" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "GameState" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "mistakes" TEXT NOT NULL,
    "gameState" TEXT NOT NULL,
    "word" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Word_word_key" ON "Word"("word");
