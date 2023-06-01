import { Direction } from '../../App';
import { types } from '../types'

export const setDirections = (value: Direction[]) => ({
  type: types.SET_DIRECTIONS,
  payload: value,
});
