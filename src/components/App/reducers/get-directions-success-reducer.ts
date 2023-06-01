import { MainPageState, Direction } from '../types';

export const getDirectionsReducer = (
  state: MainPageState,
  action: BaseAction<Direction[]>
): MainPageState => {  
  return {
    ...state,
    directions: {
      ...state.directions,
      fetch: 'resolve',
      data: action.payload!,
    },
  };
};
