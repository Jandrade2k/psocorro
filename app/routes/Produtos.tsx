import React from 'react';
import Header from '~/components/Header';
import './Produtos.scss';
import Item from '~/components/Item';
import Filtro from '~/components/Filtro';
import produtos from '~/data/produtos.json';

const Produtos: React.FC = () => {
    return (
        <div>
            <Header></Header>
            <div className='produtos-container'>
                <div className='filtro'>
                    <Filtro></Filtro>
                </div>
                <div className='produtos-list'>
                    {/* Adicionar for para produtos. */}
                    {produtos.map(produto => (
                        <Item key={produto.id} title={produto.nome} description={produto.descricao} image={produto.img}></Item>
                    ))}
                </div>
            </div>
        </div>
    );
};


export default Produtos;
