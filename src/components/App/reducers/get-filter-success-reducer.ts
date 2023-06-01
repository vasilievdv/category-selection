import { MainPageState, Filter } from '../types';

export const getFilterReducer = (
  state: MainPageState,
  action: BaseAction<Filter[]>
): MainPageState => {  
  return {
    ...state,
    filter: {
      ...state.filter,
      fetch: 'resolve',
      data: action.payload!,
    },
  };
};
