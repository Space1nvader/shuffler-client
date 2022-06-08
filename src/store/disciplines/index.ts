import { useMemo } from 'react';
import { makeAutoObservable, runInAction } from 'mobx';
import useLocalStorage from 'use-local-storage';
import { Discipline } from './types';

const initialState =
  (localStorage.getItem('discipline') as Discipline).replace(/['"]+/g, '') || 'kicker';

const disciplineStore = makeAutoObservable(
  {
    discipline: initialState,
    setDisciplineState(value: Discipline) {
      runInAction(() => {
        this.discipline = value;
      });
    }
  },
  {},
  { autoBind: true }
);

export default disciplineStore;

export const useDisciplineStore = () => {
  const [discipline, setDisciplineStorage] = useLocalStorage('discipline', 'kicker');
  const setDiscipline = (value: Discipline) => () => {
    setDisciplineStorage(value);
    disciplineStore.setDisciplineState(value);
  };

  return useMemo(() => ({ discipline, setDiscipline }), [discipline]);
};
