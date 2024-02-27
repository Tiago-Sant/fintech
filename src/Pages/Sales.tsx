import React from 'react';
import { useData } from '../Context/DataContext';
import Sale from '../Components/Sale';

const Sales = () => {
  const { data } = useData();

  if (data === null) return null;
  return (
    <ul>
      {data.map((sale) => (
        <li key={sale.id}>
          <Sale sale={sale} />
        </li>
      ))}
    </ul>
  );
};

export default Sales;
