import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { titulo, autor, descricao, categoriaId, editoraId, preco, estoque } = req.body;
        try {
            const novoLivro = await prisma.livro.create({
                data: {
                    titulo,
                    autor,
                    descricao,
                    categoriaId,
                    editoraId,
                    preco,
                    estoque,
                },
            });
            res.status(201).json(novoLivro);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao adicionar livro' });
        }
    } else {
        res.status(405).end(); // Método não permitido
    }
}
