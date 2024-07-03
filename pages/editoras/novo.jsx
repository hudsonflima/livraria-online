import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function AdicionarEditora() {
    const [nome, setNome] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('/api/editoras/novo', {
            nome,
        });
        router.push('/'); // Redireciona para a página inicial após adicionar a editora
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">Adicionar Editora</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Nome</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                        Adicionar
                    </button>
                </div>
            </form>
        </div>
    );
}
