import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getDirectionsRequest, getFilterRequest } from './actions';
import { mockDirections, mockFilter } from './mockData';
import Card from '../Card';
import Categories from '../Categories';
import InputSelect from '../InputSelect';

function App() {
  const { data } = useAppSelector((state) => state.mainPage.directions);
  const { fromSelect } = useAppSelector((state) => state.select);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDirectionsRequest(mockDirections));
    dispatch(getFilterRequest(mockFilter));
  }, []);

  return (
    <Card>
      <Categories directions={data} />
      <InputSelect directions={fromSelect} />
    </Card>
  );
}

export default App;
