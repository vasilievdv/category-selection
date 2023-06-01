import { combineReducers } from 'redux';

import { MainPageReducer, MainPageState } from '../components/App';
import { SelectReducer, SelectState } from '../components/Categories';


const rootReducer = combineReducers({
  mainPage: MainPageReducer,
  select: SelectReducer,
});

export interface State {
  mainPage: MainPageState;
  select: SelectState;
}

export default rootReducer;
