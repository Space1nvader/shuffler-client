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
  useEffect(() => {
    if (!data.graphs.length) graphsStore.getGraphsAction(id);
  }, [id]);

  //   data.graphs.map((graph) => {
  //     console.log(graph);

  //     return undefined;
  //   });

  return (
    <div className={s.graph}>
      <RestController loading={loading} success={success} errors={errors}>
        {!!data.graphs.length && <LineGraph data={data.graphs[0]} />}
      </RestController>
    </div>
  );
};

export default observer(PlayerGraph);
