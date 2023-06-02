import React, { ChangeEvent } from 'react';
import { Direction, Filter } from '../App';
import { useAppDispatch } from '../../hooks';
import { setDirectionsTo } from './actions';
import styles from './input-select.module.scss';

type Props = {
  directions: Direction[];
  filter?: Filter[];
};

function InputSelect(props: Props) {
  const { directions, filter } = props;

  const dispatch = useAppDispatch();


  function onChangeCategory(e: ChangeEvent<HTMLSelectElement>) {
    if (e.target.value.length) {
      const filteredDirection = filter!.find(
        (d) => d.from.code === e.target.value
      );
      dispatch(setDirectionsTo(filteredDirection!.to));
      console.log(e.target.value, filteredDirection!.to);
    }
  }
  return (
    <div>
      <input className={styles.input}></input>
      <select
        className={styles.select}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => onChangeCategory(e)}
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

export default InputSelect;
