import React from 'react';
import DateInput from './DateInput';
import { useData } from '../Context/DataContext';

const DateRange = () => {
  const { startDate, setStartDate, endDate, setEndDate } = useData();

  return (
    <form className="box flex" onSubmit={(e) => e.preventDefault()}>
      <DateInput
        label="Inicio"
        value={startDate}
        onChange={({ target }) => setStartDate(target.value)}
      />
      <DateInput
        label="Final"
        value={endDate}
        onChange={({ target }) => setEndDate(target.value)}
      />
    </form>
  );
};

export default DateRange;
