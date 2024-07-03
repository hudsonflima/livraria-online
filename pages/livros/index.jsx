import { useState, useEffect } from 'react'
import Link from 'next/link'
import prisma from '../../lib/prisma'

const Livros = () => {
    const [livros, setLivros] = useState([])

    useEffect(() => {
        fetch('/api/livros')
            .then(response => response.json())
            .then(data => setLivros(data))
    }, [])

    return (
        <div>
            <h1 className="text-2xl font-bold">Livros</h1>
            <Link href="/livros/novo">
                <div className="text-blue-500">Adicionar Novo Livro</div>
            </Link>
            <ul>
                {livros.map(livro => (
                    <li key={livro.id}>{livro.titulo} - {livro.autor}</li>
                ))}
            </ul>
        </div>
    )
}

export default Livros
