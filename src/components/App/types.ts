export const types = {
  GET_DIRECTIONS_REQUEST: 'GET_DIRECTIONS_REQUEST',
  GET_FILTER_REQUEST: 'GET_FILTER_REQUEST',
};

export interface Direction {
  code: string;
  name: string;
}

export interface Filter {
  from: Direction;
  to: Direction[];
}

export interface MainPageState {
  directions: StoreFetchState<Direction[]>;
  filter: StoreFetchState<Filter[]>;
}
