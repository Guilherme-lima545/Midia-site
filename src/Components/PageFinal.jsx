import React, { useEffect } from 'react';
import styles from '../styles/pagefinal.module.css';
import imginsta from '../img/image 1.png';
import imgface from '../img/image 2.png';


const PageFinal = () => {
  useEffect(() => {
    document.body.style.backgroundImage = '';
  });

  function redirectinsta() {
    window.location.href = "https://www.instagram.com/adb50vargemgrande1/"
  }

  function redirectface() {
    window.location.href = "https://www.facebook.com/ad50vargemgrande1"
  }

  return (
    <section className={styles.container}>
      <div className={styles.textone}>
        <h1> NOS SIGA NAS REDES SOCIAIS </h1>
      </div>

      <div className={styles.social}>
        <img src={imginsta} alt="Instagram" onClick={redirectinsta} />
        <img src={imgface} alt="Facebook" onClick={redirectface} />
      </div>

      <div className={styles.textdesc}>
        <p>ADB50VARGEMGRANDE</p>
        <p>AD Vargem Grande Setor 50</p>
      </div>
    </section>
  );
};

export default PageFinal;
