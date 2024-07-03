// LivroModal.jsx
import React, { useEffect } from 'react';

const LivroModal = ({ isOpen, onRequestClose, livroSelecionado, findCategoriaNomeById, findEditoraNomeById }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden', 'dark:bg-opacity-90', 'bg-opacity-90', 'bg-blur-20');
        } else {
            document.body.classList.remove('overflow-hidden', 'dark:bg-opacity-90', 'bg-opacity-90', 'bg-blur-20');
        }

        return () => {
            document.body.classList.remove('overflow-hidden', 'dark:bg-opacity-90', 'bg-opacity-90', 'bg-blur-20');
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/20">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">{livroSelecionado?.titulo}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Categoria: {findCategoriaNomeById(livroSelecionado?.categoriaId)}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Autor: {livroSelecionado?.autor}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Editora: {findEditoraNomeById(livroSelecionado?.editoraId)}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Preço: R$ {livroSelecionado?.preco?.toFixed(2)}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-4">Estoque Disponível: {livroSelecionado?.estoque}</p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2" onClick={onRequestClose}>Fechar</button>
            </div>
        </div>
    );
};

export default LivroModal;
