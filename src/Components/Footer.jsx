import React from 'react';
import styles from '../styles/footer.module.css';
import img from '../img/Asset 7.png';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={img} alt="Logo" />
        </div>

        <div className={styles.title}>
          <h1> Todos os direitos reservados </h1>
        </div>

        <aside className={styles.textright}>
          <ol> Guilherme Alves de Lima</ol>
          <ol> (11) 99113-2741 </ol>
          <ol> @Class.gui </ol>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
