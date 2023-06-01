import createReducer from '../../redux/create-reducer';

import {
  getDirectionsReducer,
  getFilterReducer,
} from './reducers';
import { types,  MainPageState} from './types';

export const initialState: MainPageState = {
  directions: {
    fetch: 'idle',
    data: [],
    error: null,
  },
  filter: {
    fetch: 'idle',
    data: [],
    error: null,
  },
};

export const MainPageReducer = createReducer(initialState, {
  [types.GET_DIRECTIONS_REQUEST]: getDirectionsReducer,
  [types.GET_FILTER_REQUEST]: getFilterReducer,
});
