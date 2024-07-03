import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { nome } = req.body;

        try {
            const novaCategoria = await prisma.categoria.create({
                data: {
                    nome,
                },
            });

            res.status(201).json(novaCategoria);
        } catch (error) {
            console.error('Erro ao criar categoria:', error);
            res.status(500).json({ error: 'Erro ao criar categoria' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
