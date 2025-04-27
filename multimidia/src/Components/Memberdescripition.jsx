import React, { useEffect } from 'react';
import styles from '../styles/Memberdescript.module.css';
import { useLocation } from 'react-router-dom';
import Backmemberlist from './Backmemberlist';

const Memberdescripition = () => {
  const location = useLocation();
  const { member, img } = location.state || {};

  useEffect(() => {
    if (img) {
      document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.7) 80%, rgba(0, 0, 0, 0.5) 100%), ${img}`;
      document.body.style.backgroundSize = '100vh';
      document.body.style.backgroundRepeat = 'no-repeat';
      document.body.style.backgroundPosition = 'center top';
    }
  }, [img]);

  if (!member) {
    return <div>Carregando...</div>;
  }

  return (
    <section className={styles.container}>
      <div className={styles.button}>
        <button
          style={{ backgroundImage: `${img}`, backgroundSize: 'cover' }}
        ></button>
      </div>

      <div className={styles.text}>
        <h1 className={styles.name}> {member.nome} </h1>
        <h2 className={styles.func}>{member.função}</h2>
        <p className={styles.desc}>{member.descrição}</p>
      </div>

      <Backmemberlist />
    </section>
  );
};

export default Memberdescripition;
