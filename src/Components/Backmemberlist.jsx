import React from 'react';
import styles from '../styles/back.module.css';
import backv from '../img/back.png';
import { useNavigate } from 'react-router-dom';

const Backmemberlist = () => {
  const navigate = useNavigate();

  function back() {
    navigate('/');
  }

  return (
    <div className={styles.btn}>
      <button onClick={back}>
        <img src={backv} />
      </button>
    </div>
  );
};

export default Backmemberlist;
