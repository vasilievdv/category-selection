import { Direction } from '../../App';
import { SelectState } from '../types';

export const setDirectionsFromReducer = (
  state: SelectState,
  action: BaseAction<Direction[]>
): SelectState => {  
  return {
    ...state,
    fromSelect: 
      action.payload!,
  };
};
