import React, { ChangeEvent, memo, useRef, useEffect } from 'react';
import { Direction, Filter } from '../App';
import { useAppDispatch } from '../../hooks';
import { setDirectionsTo } from './actions';
import styles from './input-select.module.scss';

type Props = {
  directions: Direction[];
  filter?: Filter[];
  directionPrefix: string;
};

function InputSelect(props: Props) {
  const { directions, filter, directionPrefix } = props;

  const dispatch = useAppDispatch();
  const selectRef = useRef<HTMLSelectElement>(null);

  function onChangeCategory(e: ChangeEvent<HTMLSelectElement>) {
    if (e.target.value.length && directionPrefix === 'from') {
      const filteredDirection = filter!.find(
        (d) => d.from.code === e.target.value
      );
      dispatch(setDirectionsTo(filteredDirection!.to));
    } else {
      console.log(e.target.value);
    }
  }

  useEffect(() => {
    let select = selectRef.current;
    if (select) {
      for (let i = 0; i < select.length; i++) {
        if (select.options[i].selected) {
          select.options[i].selected = false;
        }
      }
    }
  }, [directions]);

  return (
    <div>
      <input className={styles.input}></input>
      <select
        className={styles.select}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => onChangeCategory(e)}
        ref={selectRef}
      >
        <option value="">Choose direction</option>
        {!!directions.length &&
          directions.map((d, id) => (
            <option value={d.code} key={id}>
              {d.name}
            </option>
          ))}
      </select>
    </div>
  );
}

export default memo(InputSelect);
