import { Direction } from '../../App';
import { SelectState } from '../types';

export const setDirectionsReducer = (
  state: SelectState,
  action: BaseAction<Direction[]>
): SelectState => {  
  console.log(action.payload!);
  
  return {
    ...state,
    fromSelect: 
      action.payload!,
  };
};
