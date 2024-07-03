import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { nome } = req.body;

        try {
            const novaEditora = await prisma.editora.create({
                data: {
                    nome,
                },
            });

            res.status(201).json(novaEditora);
        } catch (error) {
            console.error('Erro ao criar editora:', error);
            res.status(500).json({ error: 'Erro ao criar editora' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
