// pages/livros/[id].js

import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
    const { id } = req.query;

    if (req.method === 'GET') {
        try {
            const livro = await prisma.livro.findUnique({
                where: { id: parseInt(id) },
            });
            if (!livro) {
                res.status(404).json({ error: 'Livro não encontrado' });
            } else {
                res.status(200).json(livro);
            }
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar livro' });
        }
    } else if (req.method === 'PUT') {
        const { titulo, autor, descricao, categoriaId, editoraId, preco, estoque } = req.body;
        try {
            const livroAtualizado = await prisma.livro.update({
                where: { id: parseInt(id) },
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
            res.status(200).json(livroAtualizado);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao atualizar livro' });
        }
    } else if (req.method === 'DELETE') {
        try {
            await prisma.livro.delete({
                where: { id: parseInt(id) },
            });
            res.status(204).end(); // Sucesso sem conteúdo
        } catch (error) {
            res.status(500).json({ error: 'Erro ao remover livro' });
        }
    } else {
        res.status(405).end(); // Método não permitido
    }
}
