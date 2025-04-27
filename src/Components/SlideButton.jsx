import React from 'react';
import styles from '../styles/button.module.css';
import { useDispatch } from 'react-redux';
import { nextSlide } from '../Redux/slideReducer';
import Next from '../img/Prosseguir.png';

const SlideButton = () => {
  const dispatch = useDispatch();

  function next() {
    dispatch(nextSlide());
  }

  return (
    <div className={styles.btn}>
      <button onClick={next}>
        <img src={Next} />
      </button>
    </div>
  );
};

export default SlideButton;
