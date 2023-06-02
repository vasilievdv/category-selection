import { Direction } from '../../App';
import { SelectState } from '../types';

export const setSelectedDirectionsToReducer = (
  state: SelectState,
  action: BaseAction<Direction[]>
): SelectState => {  
  return {
    ...state,
    selectedDirectionsTo: 
      action.payload!,
  };
};
