import React, { PropsWithChildren, createContext } from 'react';
import useFetch from '../Hooks/useFetch';

type IDataContext = {
  data: IVenda[] | null;
  loading: boolean;
  error: string | null;
  startDate: string;
  endDate: string;
  setStartDate: React.Dispatch<React.SetStateAction<string>>;
  setEndDate: React.Dispatch<React.SetStateAction<string>>;
};

export type IVenda = {
  id: string;
  nome: string;
  preco: number;
  status: 'processando' | 'falha' | 'pago';
  pagamento: 'boleto' | 'cartao' | 'pix';
  parcelas: number | null;
  data: string;
};

const DataContext = createContext<IDataContext | null>(null);

export const useData = () => {
  const context = React.useContext(DataContext);

  if (!context) throw new Error('useData must be used within a DataProvider');

  return context;
};

function getDaysAgo(daysAgo: number) {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [startDate, setStartDate] = React.useState(getDaysAgo(30));
  const [endDate, setEndDate] = React.useState(getDaysAgo(0));

  const { data, loading, error } = useFetch<IVenda[]>(
    `https://data.origamid.dev/vendas?inicio=${startDate}&final=${endDate}`,
  );

  return (
    <DataContext.Provider
      value={{
        data,
        loading,
        error,
        startDate,
        endDate,
        setStartDate,
        setEndDate,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
