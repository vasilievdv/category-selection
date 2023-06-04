import React, { memo, useEffect, useState } from 'react';
import { useAppDispatch } from '../../hooks';
import { Direction } from '../App';
import { filterData } from './filterData';
import { FilterData } from './types';
import { setDirectionsFrom, setSelectedDirectionsTo } from './actions';
import styles from './categories.module.scss';

type Props = {
  directions: Direction[];
  directionPrefix: string;
};

function Categories(props: Props) {
  const { directions, directionPrefix } = props;

  const [filter, setFilter] = useState<FilterData[]>([]);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setFilter(filterData);
  }, []);

  useEffect(() => {
    if (directionPrefix == 'from') {
      dispatch(setDirectionsFrom(directions));
    } else if (directionPrefix == 'to') {
      setFilter(filterData);
      dispatch(setSelectedDirectionsTo(directions));
    }
  }, [directions]);

  function onClickFiltrer(code: string[], name: string) {
    const currentOptions = directions.filter((el) => {
      return code.indexOf(el.code) >= 0;
    });
    const resetChoosenCategory = [...filter].map((f) =>
      f.name === name ? { ...f, isActive: true } : { ...f, isActive: false }
    );
    setFilter(resetChoosenCategory);
    if (directionPrefix == 'from') {
      dispatch(setDirectionsFrom(currentOptions));
    } else if (directionPrefix == 'to') {
      dispatch(setSelectedDirectionsTo(currentOptions));
    }
  }

  return (
    <div className={styles.categories}>
      {!!filter.length &&
        filter.map((d, id) => (
          <button
            className={`${styles.category} ${
              d.isActive ? styles.choosenCategory : ''
            } `}
            key={id}
            onClick={() => onClickFiltrer(d.directionsCode, d.name)}
          >
            {d.name}
          </button>
        ))}
    </div>
  );
}

export default memo(Categories);
