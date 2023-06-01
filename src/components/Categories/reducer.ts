import createReducer from '../../redux/create-reducer';

import {
  setDirectionsReducer,
} from './reducers';
import { types, SelectState } from './types';

export const initialState: SelectState = {
  fromSelect: [],
  toSelect: [],
};

export const SelectReducer = createReducer(initialState, {
  [types.SET_DIRECTIONS]: setDirectionsReducer,
});
