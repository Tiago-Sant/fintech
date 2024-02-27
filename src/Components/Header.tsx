import React, { useEffect } from 'react';
import { useData } from '../Context/DataContext';
import DateRange from './DateRange';
import Months from './Months';
import { useLocation } from 'react-router-dom';

type ITitles = {
  [key: string]: string;
};

const titles: ITitles = {
  '/': 'Resumo',
  '/sales': 'Vendas',
};

const Header = () => {
  const [title, setTitle] = React.useState('Resumo');
  const location = useLocation();

  useEffect(() => {
    const title = titles[location.pathname] || 'Resumo';
    document.title = `Fintech | ${title}`;
    setTitle(title);
  }, [location]);

  return (
    <header className="mb">
      <div className=" daterange mb">
        <DateRange />
        <h1 className="box bg-3">{title}</h1>
      </div>
      <Months />
    </header>
  );
};

export default Header;
