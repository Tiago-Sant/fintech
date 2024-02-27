import React from 'react';
import { useData } from '../Context/DataContext';
import SalesGraph from '../Components/SalesGraph';

const Resumo = () => {
  const { data } = useData();

  console.log(data);

  if (data === null) return null;

  return (
    <section>
      <div className="resumo flex mb">
        <div className="box">
          <h2>Vendas</h2>
          <span>
            {data
              .filter((venda) => venda.status !== 'falha')
              .reduce((acc, curr) => acc + curr.preco, 0)
              .toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
          </span>
        </div>
        <div className="box">
          <h2>Recebido</h2>
          <span>
            {data
              .filter((venda) => venda.status === 'pago')
              .reduce((acc, curr) => acc + curr.preco, 0)
              .toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
          </span>
        </div>
        <div className="box">
          <h2>Processando</h2>
          <span>
            {data
              .filter((venda) => venda.status === 'processando')
              .reduce((acc, curr) => acc + curr.preco, 0)
              .toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
          </span>
        </div>
      </div>
      <div className="box mb">
        <SalesGraph data={data} />
      </div>
    </section>
  );
};

export default Resumo;
