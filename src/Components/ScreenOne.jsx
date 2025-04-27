import React, { useEffect } from 'react';
import styles from '../styles/screenone.module.css';
import Assemble from '../img/1200px-Logo_Belem.png';
import img from '../img/portrait/IMG-20241027-WA0280.jpg';

const ScreenOne = () => {
  useEffect(() => {
    document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${img})`;
    document.body.style.backgroundSize = 'cover';

    return () => {
      document.body.style.backgroundImage = '';
    };
  }, []);

  return (
    <section className={styles.screen}>
      <div className={styles.container}>
        <div className={styles.assemblelogo}>
          <img src={Assemble} alt="Logo assembleia" />
        </div>

        <div className={styles.text}>
          <p>
            Atuamos na congregação Assembleia de Deus desde 2019, e cada dia
            mais evoluismo espiritualmente e no nosso trabalho.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScreenOne;
