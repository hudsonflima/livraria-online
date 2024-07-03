/*
  Warnings:

  - You are about to drop the `_ClienteLivro` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_ClienteLivro";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Venda" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "data" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "clienteId" INTEGER NOT NULL,
    "livroId" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "valorTotal" REAL NOT NULL,
    CONSTRAINT "Venda_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "Cliente" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Venda_livroId_fkey" FOREIGN KEY ("livroId") REFERENCES "Livro" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "clienteId" ON "Venda"("clienteId");

-- CreateIndex
CREATE INDEX "livroId" ON "Venda"("livroId");
