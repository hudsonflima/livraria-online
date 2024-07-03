import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const livros = await prisma.livro.findMany();
            res.status(200).json(livros);
        } catch (error) {
            res.status(500).json({ error: 'Erro ao buscar livros' });
        }
    } else {
        res.status(405).end(); // Método não permitido
    }
}
