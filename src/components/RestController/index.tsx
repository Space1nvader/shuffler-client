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
    switch (true) {
      case loading:
        setState('loading');
        break;
      case !!errors:
        setState('errors');
        break;
      default:
        setState('success');
        break;
    }
  }, [success, errors, loading]);

  return stateMap[state] as JSX.Element;
};

export default RestController;
