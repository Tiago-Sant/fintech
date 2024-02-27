import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../Hooks/useFetch';
import { IVenda } from '../Context/DataContext';
import Loading from '../Components/Loading';

type IVendaSemData = Omit<IVenda, 'data'>;

const Sale = () => {
  const { id } = useParams();
  const { data, loading } = useFetch<IVendaSemData>(
    `https://data.origamid.dev/vendas/${id}`,
  );

  if (loading) return <Loading />;
  if (data === null) return null;
  return (
    <div>
      <div className="box mb">ID: {data.id}</div>
      <div className="box mb">Nome: {data.nome}</div>
      <div className="box mb">
        Preço:{' '}
        {data.preco.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>
      <div className="box mb">Status: {data.status}</div>
      <div className="box mb">Parcelas: {data.parcelas || 1}</div>
    </div>
  );
};

export default Sale;
