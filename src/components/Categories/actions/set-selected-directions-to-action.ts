import { Direction } from '../../App';
import { types } from '..'

export const setSelectedDirectionsTo = (value: Direction[]) => ({
  type: types.SET_SELECTED_DIRECTIONS_TO,
  payload: value,
});
