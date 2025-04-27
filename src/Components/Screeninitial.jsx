import React from 'react';
import styles from '../styles/screeninitial.module.css';
import logo from '../img/Asset 1.png';

const Screeninitial = () => {
  return (
    <section className={styles.container}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>

      <div className={styles.text}>
        <h1> OLÁ SEJA BEM VINDO </h1>
        <p>
          Esse é o site da Equipe Multimidia, aqui voce encontra informações
          sobre nossa equipe. Clique na seta abaixo e nos conheça.
        </p>
      </div>
    </section>
  );
};

export default Screeninitial;
