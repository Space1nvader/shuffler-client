import React from 'react';
import s from './index.module.scss';

const Loader = (props: any) => (
  <div className={s.wrapper} {...props}>
    <div className={s.loader}>
      <span className={s.dot} />
      <span className={s.dot} />
      <span className={s.dot} />
    </div>
  </div>
);

export default Loader;
