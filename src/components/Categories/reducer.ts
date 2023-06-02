import createReducer from '../../redux/create-reducer';

import {
  setDirectionsFromReducer,
  setSelectedDirectionsToReducer
} from './reducers';
import {
  setDirectionsToReducer
} from '../InputSelect'
import { types, SelectState } from './types';

export const initialState: SelectState = {
  fromSelect: [],
  toSelect: [],
  selectedDirectionsTo: [],
};

export const SelectReducer = createReducer(initialState, {
  [types.SET_DIRECTIONS_FROM]: setDirectionsFromReducer,
  [types.SET_DIRECTIONS_TO]: setDirectionsToReducer,
  [types.SET_SELECTED_DIRECTIONS_TO]: setSelectedDirectionsToReducer,
});
