import { types, Direction } from '../types';

export const getDirectionsRequest = (value: Direction[]) => ({
  type: types.GET_DIRECTIONS_REQUEST,
  payload: value,
});
