import { Direction } from '../App';

export const types = {
  SET_DIRECTIONS_FROM: 'SET_DIRECTIONS_FROM',
  SET_DIRECTIONS_TO: 'SET_DIRECTIONS_TO',
  SET_SELECTED_DIRECTIONS_TO: 'SET_SELECTED_DIRECTIONS_TO',
};

export interface FilterData {
  name: string;
  directionsCode: string[];
  isActive: boolean;
}

export interface SelectState {
  fromSelect: Direction[];
  toSelect: Direction[];
  selectedDirectionsTo: Direction[];
}
