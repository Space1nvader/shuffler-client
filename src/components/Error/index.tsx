import React from 'react';
import { IFC } from 'types';
import s from './index.module.scss';

const Error: IFC<{ error: Error | null }> = (props) => {
  const { error } = props;

  return (
    <div className={s.wrapper}>
      <div className={s.error} {...props}>
        {error && error.message}
      </div>
    </div>
  );
};

export default Error;
