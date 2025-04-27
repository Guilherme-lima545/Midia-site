import React from 'react';
import { prevSlide } from '../Redux/slideReducer';
import { useDispatch } from 'react-redux';
import Prev from '../img/Retroceder.png';
import styles from '../styles/button.module.css';

const PrevSlidebutton = () => {
  const dispatch = useDispatch();

  function prev() {
    dispatch(prevSlide());
  }

  return (
    <div className={styles.prev}>
      <button onClick={prev}>
        <img src={Prev} />
      </button>
    </div>
  );
};

export default PrevSlidebutton;
