import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './contetx/ThemeContext';
import Layout from '@/components/Layout/Layout';
import Orders from '@/pages/Orders';
import Products from '@/pages/Products';
import { Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import '@/styles/_global.scss';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <Outlet />
                </Layout>
              }
            >
              <Route index element={<Products />} />
              <Route path="products" element={<Products />} />
              <Route path="orders" element={<Orders />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
