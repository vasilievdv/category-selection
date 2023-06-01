import React from 'react';
import { Direction } from '../App';
import styles from './input-select.module.scss';

type Props = {
  directions: Direction[];
};
function InputSelect(props: Props) {
  const { directions } = props;
  return (
    <div>
      <input className={styles.input}></input>
      <select className={styles.select}>
        {!!directions.length && directions.map((d, id) => (
          <option value={d.code} key={id}>
            {d.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default InputSelect;
