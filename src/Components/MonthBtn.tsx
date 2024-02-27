import React from 'react';
import { useData } from '../Context/DataContext';

const sytle: React.CSSProperties = {
  backgroundColor: 'var(--color-3)',
  border: 'none',
  borderRadius: 'var(--gap)',
  color: 'var(--color-2)',
  fontWeight: '600',
  padding: 'var(--gap) var(--gap-s)',
  textTransform: 'capitalize',
};

function monthName(monthsAgo: number) {
  const date = new Date();
  date.setMonth(date.getMonth() - monthsAgo);
  return date.toLocaleString('pt-BR', { month: 'long' });
}

function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

const MonthBtn = ({ monthsAgo }: { monthsAgo: number }) => {
  const { setStartDate, setEndDate } = useData();

  function setMonth(monthsAgo: number) {
    const date = new Date();
    date.setMonth(date.getMonth() - monthsAgo);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    setStartDate(formatDate(firstDay));
    setEndDate(formatDate(lastDay));
  }

  return (
    <button style={sytle} onClick={() => setMonth(monthsAgo)}>
      {monthName(monthsAgo)}
    </button>
  );
};

export default MonthBtn;
