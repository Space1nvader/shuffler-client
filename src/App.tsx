import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Wrapper from 'components/Layout/Wrapper';
import History from 'modules/History';
import Statistic from 'modules/Statistic';

const App = () => (
  <Wrapper>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Statistic />} />
        <Route path="/:id" element={<History />} />
      </Routes>
    </BrowserRouter>
  </Wrapper>
);

export default App;
