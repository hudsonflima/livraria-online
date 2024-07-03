import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function EditLivroPage({ livro }) {
    const router = useRouter();
    const { id } = router.query;

    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [categoriaId, setCategoriaId] = useState('');
    const [editoraId, setEditoraId] = useState('');
    const [preco, setPreco] = useState(0);
    const [estoque, setEstoque] = useState(0);
    const [categorias, setCategorias] = useState([]);
    const [editoras, setEditoras] = useState([]);

    useEffect(() => {
        if (id) {
            fetchLivro(id);
        }
        fetchCategorias();
        fetchEditoras();
    }, [id]);

    const fetchLivro = async (livroId) => {
        try {
            const response = await axios.get(`/api/livros/${livroId}`);
            const { titulo, autor, descricao, categoriaId, editoraId, preco, estoque } = response.data;
            setTitulo(titulo);
            setAutor(autor);
            setDescricao(descricao);
            setCategoriaId(categoriaId.toString());
            setEditoraId(editoraId.toString());
            setPreco(preco);
            setEstoque(estoque);
        } catch (error) {
            console.error('Erro ao buscar livro:', error);
        }
    };

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

        const livroAtualizado = {
            titulo,
            autor,
            descricao,
            categoriaId: parseInt(categoriaId),
            editoraId: parseInt(editoraId),
            preco,
            estoque,
        };

        try {
            await axios.put(`/api/livros/${id}`, livroAtualizado);
            router.push(`/livros/${id}`);
        } catch (error) {
            console.error('Erro ao atualizar livro:', error);
        }
    };

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">Editar Livro</h1>
            <form onSubmit={handleSubmit} className="max-w-xl">
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
                        rows="4"
                        required
                    />
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
                        step="0.01"
                        min="0"
                        value={preco}
                        onChange={(e) => setPreco(parseFloat(e.target.value))}
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
                        onChange={(e) => setEstoque(parseInt(e.target.value))}
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
                        required
                    />
                </div>
                <div className="mt-6">
                    <button
                        type="submit"
                        className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        Atualizar Livro
                    </button>
                </div>
            </form>
        </div>
    );
}
