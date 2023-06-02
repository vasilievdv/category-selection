import { Direction } from '../../App';
import { SelectState } from '../../Categories';

export const setDirectionsToReducer = (
  state: SelectState,
  action: BaseAction<Direction[]>
): SelectState => {  
  return {
    ...state,
    toSelect: 
      action.payload!,
  };
};
