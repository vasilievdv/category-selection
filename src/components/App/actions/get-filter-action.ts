import { types, Filter } from '../types';

export const getFilterRequest = (value: Filter[]) => ({
  type: types.GET_FILTER_REQUEST,
  payload: value,
});
