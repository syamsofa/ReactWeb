import logo from './logo.svg';
import Expenses from './pages/expenses';
import Invoices from './pages/invoices';
import AppLevel2 from './js/AppLevel2';
import { BrowserRouter, Route, Switch, Routes, Link } from 'react-router-dom'
function App1() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLevel2 />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App1;
