import Link from 'next/link';
import LivroModal from './livros/LivroModal';
import Navbar from '../components/Navbar';

const LivrosTable = () => {
    return (
        <div className={`transition-all min-h-screen bg-gray-50 ${isDarkMode ? 'dark:bg-gray-900' : ''}`}>
            <div className={isDarkMode ? 'dark' : ''}>
                <Navbar title="Lista de Livros" onThemeToggle={handleThemeToggle} />
                <div className="container mx-auto py-8">
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-4xl font-extralight text-gray-800 dark:text-gray-200">Livros</h1>
                        <Link href="/livros/novo">
                            <div className="bg-blue-500 text-white px-4 py-2 rounded">Adicionar Livro</div>
                        </Link>
                    </div>
                    <div className="relative overflow-x-auto overflow-y-hidden">
                        <table className={`w-full text-sm text-left ${isDarkMode ? 'rtl:text-right' : ''} text-gray-500 dark:text-gray-400`} style={{ maxHeight: '200px', overflowY: '100px' }}>
                            <thead className="text-xs uppercase bg-slate-300 dark:bg-gray-700 dark:text-gray-300 text-gray-500">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Título
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Categoria
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Autor
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Editora
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Preço
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Estoque Disponível
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Ações
                                    </th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                {livros.map((livro) => (
                                    <tr key={livro.id} className={`bg-white hover:bg-gray-200 border-b ${isDarkMode ? 'dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-600' : ''}`}>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            <button
                                                className="dark:text-gray-50 text-gray-800 hover:dark:text-blue-300 hover:text-blue-500"
                                                onClick={() => openModal(livro)}
                                            >
                                                {livro.titulo}
                                            </button>
                                        </td>
                                        <td className="px-6 py-4">
                                            {findCategoriaNomeById(livro.categoriaId)}
                                        </td>
                                        <td className="px-6 py-4">
                                            {livro.autor}
                                        </td>
                                        <td className="px-6 py-4">
                                            {findEditoraNomeById(livro.editoraId)}
                                        </td>
                                        <td className="px-6 py-4">
                                            {livro.preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                                        </td>
                                        <td className="px-6 py-4">
                                            {livro.estoque}
                                        </td>
                                        <td className="px-6 py-4">
                                            <Link href={`/livros/editar/${livro.id}`}>
                                                <div className="text-blue-600 hover:text-blue-900 mr-2">Editar</div>
                                            </Link>
                                            <button className="text-red-600 hover:text-red-900" onClick={() => openModal(livro)}>Remover</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Modal de Detalhes do Livro */}
                    <LivroModal
                        isOpen={modalOpen}
                        onRequestClose={closeModal}
                        livroSelecionado={livroSelecionado}
                        findCategoriaNomeById={findCategoriaNomeById}
                        findEditoraNomeById={findEditoraNomeById}
                    />
                </div>
            </div>
        </div>
    )
}

export default LivrosTable