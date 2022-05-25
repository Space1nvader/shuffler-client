import React from 'react';
import s from './index.module.scss';

const Wrapper: React.FC = ({ children }) => <div className={s.wrapper}>{children}</div>;

export default Wrapper;
