import React, { memo } from 'react';
import clsx from 'clsx';
import AvatarIcon from 'components/Icons/AvatarIcon';

import s from './index.module.scss';

const Avatar: IFC<{ src?: string }> = (props) => {
  const { src, className } = props;

  return (
    <div className={clsx(s.avatar, className && className)}>
      {src ? (
        <img className={s.image} src={src} alt="Профиль игрока" />
      ) : (
        <AvatarIcon className={s.icon} />
      )}
    </div>
  );
};

export default memo(Avatar);
