-- --------------------------------------------------------
-- Servidor:                     E:\DEV\novalivraria\prisma\dev.db
-- Versão do servidor:           3.45.3
-- OS do Servidor:               
-- HeidiSQL Versão:              12.7.0.6850
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES  */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para dev
CREATE DATABASE IF NOT EXISTS "dev";
;

-- Copiando estrutura para tabela dev.Livro
CREATE TABLE IF NOT EXISTS "Livro" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titulo" TEXT NOT NULL,
    "autor" TEXT NOT NULL,
    "descricao" TEXT,
    "categoriaId" INTEGER NOT NULL,
    "editoraId" INTEGER NOT NULL,
    "preco" REAL NOT NULL,
    "estoque" INTEGER NOT NULL,
    CONSTRAINT "Livro_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Livro_editoraId_fkey" FOREIGN KEY ("editoraId") REFERENCES "Editora" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- Copiando dados para a tabela dev.Livro: -1 rows
/*!40000 ALTER TABLE "Livro" DISABLE KEYS */;
REPLACE INTO "Livro" ("id", "titulo", "autor", "descricao", "categoriaId", "editoraId", "preco", "estoque") VALUES
	(2, 'A Culpa é das Estrelas', 'John Green', 'Um romance emocionante sobre Hazel e Gus.', 1, 1, 29.99, 50),
	(3, 'O Pequeno Príncipe', 'Antoine de Saint-Exupéry', 'A história do pequeno príncipe que viaja de planeta em planeta.', 2, 2, 19.99, 30),
	(4, 'Harry Potter e a Pedra Filosofal', 'J.K. Rowling', 'O primeiro livro da série Harry Potter.', 3, 1, 39.99, 40),
	(5, '1984', 'George Orwell', 'Um clássico da literatura distópica.', 4, 2, 24.99, 25),
	(6, 'Dom Quixote', 'Miguel de Cervantes', 'As aventuras do cavaleiro Dom Quixote e seu fiel escudeiro Sancho Pança.', 5, 3, 29.99, 35),
	(7, 'O Senhor dos Anéis: A Sociedade do Anel', 'J.R.R. Tolkien', 'O primeiro livro da trilogia O Senhor dos Anéis.', 6, 1, 49.99, 20),
	(8, 'A Menina que Roubava Livros', 'Markus Zusak', 'Uma história emocionante sobre a menina Liesel e seu amor pelos livros durante a Segunda Guerra Mundial.', 7, 2, 34.99, 15),
	(9, 'Percy Jackson e o Ladrão de Raios', 'Rick Riordan', 'O primeiro livro da série Percy Jackson & os Olimpianos.', 8, 1, 19.99, 30),
	(10, 'Orgulho e Preconceito', 'Jane Austen', 'Um romance clássico sobre amor e preconceitos na sociedade britânica do século XIX.', 9, 3, 29.99, 25),
	(11, 'A Revolução dos Bichos', 'George Orwell', 'Uma alegoria política sobre a Revolução Russa.', 10, 2, 24.99, 35),
	(12, 'Memórias Póstumas de Brás Cubas', 'Machado de Assis', 'A narrativa póstuma de um homem sarcástico e reflexivo.', 11, 1, 29.99, 30),
	(13, 'Crime e Castigo', 'Fiódor Dostoiévski', 'A história de Raskólnikov, um jovem estudante que comete um assassinato e sofre as consequências psicológicas.', 12, 3, 34.99, 20),
	(14, 'O Hobbit', 'J.R.R. Tolkien', 'Uma história precursora de O Senhor dos Anéis.', 13, 2, 39.99, 15),
	(15, 'O Alquimista', 'Paulo Coelho', 'A jornada de um pastor andaluz em busca do seu próprio "lugar no mundo".', 14, 1, 24.99, 25),
	(16, 'Cem Anos de Solidão', 'Gabriel García Márquez', 'A história da família Buendía e da cidade fictícia de Macondo.', 15, 3, 29.99, 30),
	(17, 'O Diário de Anne Frank', 'Anne Frank', 'O diário de uma jovem judia durante a Segunda Guerra Mundial.', 16, 2, 19.99, 40),
	(18, 'A Metamorfose', 'Franz Kafka', 'A história de Gregor Samsa, que acorda transformado em um inseto.', 4, 1, 29.99, 35),
	(19, 'Moby Dick', 'Herman Melville', 'A história do capitão Ahab e sua obsessão pela baleia branca.', 5, 7, 39.99, 20),
	(20, 'O Velho e o Mar', 'Ernest Hemingway', 'A história de um velho pescador e sua luta épica com um peixe gigante.', 2, 1, 24.99, 25),
	(21, 'A Insustentável Leveza do Ser', 'Milan Kundera', 'Um romance filosófico sobre amor, identidade e destino.', 3, 2, 34.99, 30);
/*!40000 ALTER TABLE "Livro" ENABLE KEYS */;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
