import React from 'react';
import Loader from 'components/Loader';

// TODO
const WithLoader: React.FC<{ loading: boolean; children: JSX.Element }> = ({ loading, children }) =>
  loading ? <Loader /> : children;

export default WithLoader;
