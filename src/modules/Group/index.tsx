import React from 'react';
import { observer } from 'mobx-react-lite';
import { Navigate } from 'react-router-dom';
import PageFrame from 'components/PageFrame';
import PageTitle from 'components/PageTitle';

const Group = () => (
  <PageFrame>
    <PageTitle>Группы</PageTitle>
    <Navigate to="ladder" />
  </PageFrame>
);

export default observer(Group);
