import { Direction } from '../App';

export const types = {
  SET_DIRECTIONS: 'SET_DIRECTIONS',
};

export interface FilterData {
  name: string;
  directionsCode: string[];
  isActive: boolean;
}

export interface SelectState {
  fromSelect: Direction[];
  toSelect: Direction[];
}
