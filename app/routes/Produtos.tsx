import React, { useState } from 'react';
import Header from '~/components/Header';
import './Produtos.scss';
import Item from '~/components/Item';
import Filtro from '~/components/Filtro';
import produtos from '~/data/produtos.json';
import Footer from '~/components/Footer';

type Produto = {
    id: number;
    nome: string;
    descricao: string;
    img: string;
    funcoes: string[];
    marca: string;
    categoria: string;
}

const Produtos: React.FC = () => {
    const [filtros, setFiltros] = useState<string[]>([]);

    const categorias = [
        { value: 'acesso', label: 'Controle de Acesso' },
        { value: 'ponto', label: 'Relógio de Ponto' },
        { value: 'sistema', label: 'Sistemas' },
    ]

    const produtosFiltrados = filtros.length
    ? produtos.filter((p: Produto) => filtros.includes(p.marca) || p.funcoes.some(f => filtros.includes(f)))
    : produtos;

    return (
        <div>
            <Header></Header>
            <div className='produtos-container'>
                <div className='filtro'>
                    <Filtro onChange={setFiltros}></Filtro>
                </div>
                <div className='produtos-list'>
                    {produtosFiltrados.map(produto => (
                        <Item key={produto.id} title={produto.nome} description={produto.descricao} image={produto.img}></Item>
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};


export default Produtos;
