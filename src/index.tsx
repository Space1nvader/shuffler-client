import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import 'assets/style/main.scss';

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const appearance = document.body['data-appearance'] || 'light';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
