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
    const [filtrosMarca, setFiltrosMarca] = useState<string>('');
    const [filtrosFuncao, setFiltrosFuncao] = useState<string[]>([]);

    const categorias = [
        { value: 'acesso', label: 'Controle de Acesso' },
        { value: 'ponto', label: 'Relógio de Ponto' },
        { value: 'sistema', label: 'Sistemas' },
    ]

    const produtosFiltrados = produtos.filter((p: Produto) => {
        if (filtrosFuncao && filtrosFuncao.length > 0) {
            return (p.funcoes.some(f => filtrosFuncao.includes(f)) && (filtrosMarca === '' || p.marca === filtrosMarca));
        }

        if (filtrosMarca) {
            return p.marca === filtrosMarca;
        }

        return true;
    });

    return (
        <div>
            <Header></Header>
            <div className='produtos-container'>
                <div className='filtro'>
                    <Filtro onChange={(filtros: { marca: string, funcoes: string[] }) => {
                        setFiltrosMarca(filtros.marca);
                        setFiltrosFuncao(filtros.funcoes);
                    }}></Filtro>
                </div>
                <div className='produtos-list'>
                    {produtosFiltrados.length > 0 ? produtosFiltrados.map(produto => (
                        <Item key={produto.id} title={produto.nome} description={produto.descricao} image={produto.img}></Item>
                    )) : (
                        <div className="sem-produtos-card">
                            <h3>Ops! 😅</h3>
                            <p>Não temos produtos dessas categorias no momento.</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};


export default Produtos;
