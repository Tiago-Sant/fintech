import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Sidenav from './Components/Sidenav';
import DataContextProvider from './Context/DataContext';
import Resumo from './Pages/Resumo';
import Sales from './Pages/Sales';
import './Style.css';
import Sale from './Pages/Sale';

function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <div className="container">
          <Sidenav />
          <main>
            <Header />
            <Routes>
              <Route path="/" element={<Resumo />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/sales/:id" element={<Sale />} />
            </Routes>
          </main>
        </div>
      </DataContextProvider>
    </BrowserRouter>
  );
}

export default App;
