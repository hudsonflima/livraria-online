import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function NovoLivroPage() {
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoriaId, setCategoriaId] = useState('');
    const [editoraId, setEditoraId] = useState('');
    const [preco, setPreco] = useState('');
    const [estoque, setEstoque] = useState('');
    const [categorias, setCategorias] = useState([]); // Definir estado para categorias
    const [editoras, setEditoras] = useState([]); // Definir estado para editoras
    const router = useRouter();

    useEffect(() => {
        fetchCategorias();
        fetchEditoras();
    }, []);

    const fetchCategorias = async () => {
        try {
            const response = await axios.get('/api/categorias');
            setCategorias(response.data);
        } catch (error) {
            console.error('Erro ao buscar categorias:', error);
        }
    };

    const fetchEditoras = async () => {
        try {
            const response = await axios.get('/api/editoras');
            setEditoras(response.data);
        } catch (error) {
            console.error('Erro ao buscar editoras:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/livros/novo', {
                titulo,
                autor,
                descricao,
                categoriaId: parseInt(categoriaId),
                editoraId: parseInt(editoraId),
                preco: parseFloat(preco),
                estoque: parseInt(estoque),
            });
            router.push('/');
        } catch (error) {
            console.error('Erro ao adicionar livro:', error);
        }
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">Adicionar Livro</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Título</label>
                    <input
                        type="text"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Autor</label>
                    <input
                        type="text"
                        value={autor}
                        onChange={(e) => setAutor(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Descrição</label>
                    <textarea
                        value={descricao}
                        onChange={(e) => setDescricao(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Categoria</label>
                    <select
                        value={categoriaId}
                        onChange={(e) => setCategoriaId(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        required
                    >
                        <option value="">Selecione uma categoria</option>
                        {categorias.map((categoria) => (
                            <option key={categoria.id} value={categoria.id}>
                                {categoria.nome}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Editora</label>
                    <select
                        value={editoraId}
                        onChange={(e) => setEditoraId(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        required
                    >
                        <option value="">Selecione uma editora</option>
                        {editoras.map((editora) => (
                            <option key={editora.id} value={editora.id}>
                                {editora.nome}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Preço</label>
                    <input
                        type="number"
                        min="0"
                        step="0.01"
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Estoque</label>
                    <input
                        type="number"
                        min="0"
                        value={estoque}
                        onChange={(e) => setEstoque(e.target.value)}
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
