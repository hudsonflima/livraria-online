import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Column,
    DataGrid,
    Editing,
    Popup,
    RequiredRule,
    StringLengthRule,
    SelectBox,
    GroupPanel,
    Summary,
    TotalItem,
    Paging,
    Pager
} from 'devextreme-react/data-grid';
import Navbar from '../components/Navbar';
import { locale, loadMessages } from "devextreme/localization";
import ptMessages from "devextreme/localization/messages/pt.json";
import { TextBox } from 'devextreme-react';
loadMessages(ptMessages);
locale("pt");

const pages = ['10', '20', '30', '50', '70', '100']

const LivrosDatatable = () => {
    const [livros, setLivros] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [editoras, setEditoras] = useState([]);

    useEffect(() => {
        fetchLivros();
        fetchCategorias();
        fetchEditoras();
    }, []);

    const fetchLivros = async () => {
        try {
            const response = await axios.get('/api/livros');
            setLivros(response.data);
        } catch (error) {
            console.error('Erro ao buscar livros:', error);
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

    const handleRowInserted = async (e) => {
        try {
            await axios.post('/api/livros/novo', e.data);
            fetchLivros();
        } catch (error) {
            console.error('Erro ao inserir livro:', error);
        }
    };

    const handleRowUpdated = async (e) => {
        try {
            await axios.put(`/api/livros/${e.key}`, e.data);
            fetchLivros();
        } catch (error) {
            console.error('Erro ao atualizar livro:', error);
        }
    };

    const handleRowRemoved = async (e) => {
        try {
            await axios.delete(`/api/livros/${e.key}`);
            fetchLivros();
        } catch (error) {
            console.error('Erro ao remover livro:', error);
        }
    };

    return (
        <div className={`min-h-screen bg-gray-50`}>
            <Navbar title="Livraria Online" />
            <div className="container mx-auto py-8">
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-4xl font-extralight">Livros</h1>
                </div>
                <div className="relative overflow-x-auto overflow-y-hidden">
                    <DataGrid
                        dataSource={livros}
                        keyExpr="id"
                        showBorders={true}
                        width="100%"
                        onRowInserted={handleRowInserted}
                        onRowUpdated={handleRowUpdated}
                        onRowRemoved={handleRowRemoved}
                    >
                        <Editing
                            mode="popup"
                            allowAdding={true}
                            allowUpdating={true}
                            allowDeleting={true}
                            popup={{
                                title: 'Detalhes do Livro',
                                showTitle: true,
                                width: 800,
                                height: 500,
                            }}
                        >
                            <Popup title="Detalhes do Livro" showTitle={true} width={800} height={500}>
                                <Column dataField="titulo" caption="Título">
                                    <RequiredRule message="O título é obrigatório." />
                                    <StringLengthRule max={100} message="O título não pode exceder 100 caracteres." />
                                </Column>
                                <Column dataField="categoriaId" caption="Categoria">
                                    <SelectBox dataSource={categorias} valueExpr="id" displayExpr="nome" />
                                </Column>
                                <Column dataField="autor" caption="Autor" />
                                <Column dataField="editoraId" caption="Editora">
                                    <SelectBox dataSource={editoras} valueExpr="id" displayExpr="nome" />
                                </Column>
                                <Column dataField="descricao" caption="Descrição">
                                    <TextBox dataSource={livros} valueExpr="id" displayExpr="descricao" />
                                </Column>
                                <Column dataField="preco" caption="Preço" dataType="number" format="currency" />
                                <Column dataField="estoque" caption="Estoque Disponível" dataType="number" />
                            </Popup>
                        </Editing>
                        <Column dataField="titulo" caption="Título" />
                        <Column dataField="categoriaId" caption="Categoria" lookup={{
                            dataSource: categorias,
                            valueExpr: "id",
                            displayExpr: "nome"
                        }} />
                        <Column dataField="autor" caption="Autor" />
                        <Column dataField="editoraId" caption="Editora" lookup={{
                            dataSource: editoras,
                            valueExpr: "id",
                            displayExpr: "nome"
                        }} />
                        <Column dataField="descricao" caption="Descrição" dataType="text" />
                        <Column dataField="preco" caption="Preço" dataType="number" format={{ type: "currency", precision: 2, currency: "BRL" }} />
                        <Column dataField="estoque" caption="Estoque Disponível" dataType="number" />
                        <GroupPanel visible={true} />
                        <Paging defaultPageSize={10} />
                        <Pager visible={true} allowedPageSizes={pages} />
                        <Summary>
                            <TotalItem
                                column="Título"
                                summaryType="count" />
                            <TotalItem
                                column="Estoque Disponível"
                                summaryType="sum" />
                        </Summary>
                    </DataGrid>
                </div>
            </div>
        </div>
    );
};

export default LivrosDatatable;
