import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import RestController from 'components/RestController';
import { graphsStore } from 'modules/History/store/graphs';
import { IFC } from 'types';
import LineGraph from './components/LineGraph';
import s from './index.module.scss';

const PlayerGraph: IFC<{ id: string }> = (props) => {
  const { id } = props;
  const { data, loading, success, errors } = graphsStore.getState();
  const isEmptyData = !data.graph?.coordinates.length;
  useEffect(() => {
    if (isEmptyData) graphsStore.getGraphAction(id);
  }, [id]);

  return (
    <div className={s.graph}>
      <RestController loading={loading} success={success} errors={errors}>
        {
          // @ts-ignore
          // Обход ts-бага, при котором он считает проверку на undefind невалидной из переменной isEmptyData
          !isEmptyData && <LineGraph data={data.graph} />
        }
      </RestController>
    </div>
  );
};

export default observer(PlayerGraph);
