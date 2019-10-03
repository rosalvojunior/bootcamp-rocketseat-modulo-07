import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/06/HZM-1731-006/HZM-1731-006_zoom1.jpg"
          alt=""
        />
        <strong>Tênis de teste</strong>
        <span>R$ 99,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/06/HZM-1731-006/HZM-1731-006_zoom1.jpg"
          alt=""
        />
        <strong>Tênis de teste</strong>
        <span>R$ 99,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/06/HZM-1731-006/HZM-1731-006_zoom1.jpg"
          alt=""
        />
        <strong>Tênis de teste</strong>
        <span>R$ 99,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/06/HZM-1731-006/HZM-1731-006_zoom1.jpg"
          alt=""
        />
        <strong>Tênis de teste</strong>
        <span>R$ 99,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/06/HZM-1731-006/HZM-1731-006_zoom1.jpg"
          alt=""
        />
        <strong>Tênis de teste</strong>
        <span>R$ 99,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/06/HZM-1731-006/HZM-1731-006_zoom1.jpg"
          alt=""
        />
        <strong>Tênis de teste</strong>
        <span>R$ 99,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>Adicionar ao carrinho</span>
        </button>
      </li>
    </ProductList>
  );
}
