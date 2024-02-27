import MonthBtn from './MonthBtn';

const Months = () => {
  return (
    <div className="flex">
      <MonthBtn monthsAgo={3} />
      <MonthBtn monthsAgo={2} />
      <MonthBtn monthsAgo={1} />
      <MonthBtn monthsAgo={0} />
    </div>
  );
};

export default Months;
