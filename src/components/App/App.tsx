import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getDirectionsRequest, getFilterRequest } from './actions';
import { mockDirections, mockFilter } from './mockData';
import Card from '../Card';
import Categories from '../Categories';
import InputSelect from '../InputSelect';

function App() {
  const { data } = useAppSelector((state) => state.mainPage.directions);
  const { data: filter } = useAppSelector((state) => state.mainPage.filter);
  const { fromSelect, toSelect, selectedDirectionsTo } = useAppSelector(
    (state) => state.select
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDirectionsRequest(mockDirections));
    dispatch(getFilterRequest(mockFilter));
  }, []);

  return (
    <Card>
      <Categories directions={data} directionPrefix={'from'} />
      <InputSelect
        directions={fromSelect}
        filter={filter}
        directionPrefix={'from'}
      />
      <Categories directions={toSelect} directionPrefix={'to'} />
      <InputSelect directions={selectedDirectionsTo} directionPrefix={'to'} />
    </Card>
  );
}

export default App;
