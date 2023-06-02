import { Direction } from '../../App';
import { types } from '../types'

export const setDirectionsFrom = (value: Direction[]) => ({
  type: types.SET_DIRECTIONS_FROM,
  payload: value,
});
