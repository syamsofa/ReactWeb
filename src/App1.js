import logo from './logo.svg';
import React, { useState } from 'react';
import Expenses from './pages/expenses';
import Invoices from './pages/invoices';
import Login from './pages/login';
import Wweb from './pages/wweb';
// import Peta from './pages/peta';
import AppLevel2 from './js/AppLevel2';
import { BrowserRouter, Route, Switch, Routes, Link } from 'react-router-dom'
function App1() {

  const [token, setToken] = useState()

  // if (!token) {
  //   return <Login setToken={setToken} />
  // }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLevel2 />}>
          <Route path="expenses" element={<Expenses />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="login" element={<Login />} />
          <Route path="wweb" element={<Wweb />} />

          {/* <Route path="peta" element={<Peta />} /> */}
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App1;
