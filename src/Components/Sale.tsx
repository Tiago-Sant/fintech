import React from 'react';
import { IVenda } from '../Context/DataContext';
import { NavLink } from 'react-router-dom';

const Sale = ({ sale }: { sale: IVenda }) => {
  return (
    <div className="venda box">
      <NavLink to={`/sales/${sale.id}`} style={{ fontFamily: 'monospace' }}>
        {sale.id}
      </NavLink>
      <div>{sale.nome}</div>
      <div>
        {sale.preco.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>
    </div>
  );
};

export default Sale;
