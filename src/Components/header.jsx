import React from 'react';
import styles from '../styles/header.module.css';
import img from '../img/Asset 7.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  function home() {
    navigate('/');
  }

  return (
    <header className={styles.container}>
      <div className={styles.soon}>
        <img src={img} alt="Multimidea logo" />
      </div>

      <ul className={styles.texthe}>
        <li>
          <p onClick={home}> HOME </p>
        </li>
        <li>
          <p
            onClick={() =>
              (window.location.href = 'https://wa.me/5511991132741')
            }
          >
            SUPORTE
          </p>
        </li>
      </ul>
    </header>
  );
};

export default Header;
