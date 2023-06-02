import { Direction } from '../../App';
import { types } from '../../Categories'

export const setDirectionsTo = (value: Direction[]) => ({
  type: types.SET_DIRECTIONS_TO,
  payload: value,
});
