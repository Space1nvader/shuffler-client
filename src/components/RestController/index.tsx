import React, { useEffect, useState } from 'react';
import Error from 'components/Error';
import Loader from 'components/Loader';
import { IFC } from 'types';

export interface IRestProps {
  loading: boolean;
  success: boolean;
  errors: Error | null;
}

const RestController: IFC<IRestProps> = (props) => {
  const { loading, success, errors, children } = props;
  const stateMap = {
    loading: <Loader />,
    errors: <Error error={errors} />,
    success: children as JSX.Element
  };
  const [state, setState] = useState<keyof typeof stateMap>('loading');
  useEffect(() => {
    if (loading) {
      setState('loading');
    }

    if (success) {
      setState('success');
    }

    if (errors) {
      setState('errors');
    }
  }, [success, errors, loading]);

  return stateMap[state] as JSX.Element;
};

export default RestController;
