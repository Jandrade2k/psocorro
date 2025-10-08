import React from 'react';
import Header from '~/components/Header';
import './Produtos.scss';
import Item from '~/components/Item';
import Filtro from '~/components/Filtro';

const Produtos: React.FC = () => {
    return (
        <div>
            <Header></Header>
            <div className='produtos-container'>
                <div className='filtro'>
                    <Filtro></Filtro>
                </div>
                <div className='produtos-list'>
                    <Item title={'Produto 1'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac nisi volutpat, sollicitudin mauris ut, lacinia dui. Nulla maximus urna in odio congue eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam blandit neque posuere est elementum, vitae suscipit risus tempor. Nulla libero massa, mollis non nisl semper, euismod molestie odio. Morbi blandit augue quam, et semper elit vestibulum quis. Curabitur placerat, felis vitae tristique auctor, nisl ante ornare orci, non viverra eros quam sed sapien.'} image='app/assets/item_1.jpg'></Item>
                    <Item title={'Produto 2'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac nisi volutpat, sollicitudin mauris ut, lacinia dui. Nulla maximus urna in odio congue eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam blandit neque posuere est elementum, vitae suscipit risus tempor. Nulla libero massa, mollis non nisl semper, euismod molestie odio. Morbi blandit augue quam, et semper elit vestibulum quis. Curabitur placerat, felis vitae tristique auctor, nisl ante ornare orci, non viverra eros quam sed sapien.'} image='app/assets/item_1.jpg'></Item>
                    <Item title={'Produto 3'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac nisi volutpat, sollicitudin mauris ut, lacinia dui. Nulla maximus urna in odio congue eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam blandit neque posuere est elementum, vitae suscipit risus tempor. Nulla libero massa, mollis non nisl semper, euismod molestie odio. Morbi blandit augue quam, et semper elit vestibulum quis. Curabitur placerat, felis vitae tristique auctor, nisl ante ornare orci, non viverra eros quam sed sapien.'} image='app/assets/item_1.jpg'></Item>
                    <Item title={'Produto 4'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ac nisi volutpat, sollicitudin mauris ut, lacinia dui. Nulla maximus urna in odio congue eleifend. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam blandit neque posuere est elementum, vitae suscipit risus tempor. Nulla libero massa, mollis non nisl semper, euismod molestie odio. Morbi blandit augue quam, et semper elit vestibulum quis. Curabitur placerat, felis vitae tristique auctor, nisl ante ornare orci, non viverra eros quam sed sapien.'} image='app/assets/item_1.jpg'></Item>
                </div>
            </div>
        </div>
    );
};

export default Produtos;