import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Wrapper from 'components/Layout/Wrapper';
import { routes } from 'routers';

const App = () => (
  <Wrapper>
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
    </BrowserRouter>
  </Wrapper>
);

export default App;
