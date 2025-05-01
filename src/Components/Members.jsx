import React, { useEffect, useState } from 'react';
import styles from '../styles/members.module.css';
import { useNavigate } from 'react-router-dom';
import Guilherme from '../img/portrait/Guilherme.jpg';
import alice from '../img/portrait/Alice.jpg';
import Laura from '../img/portrait/Laura.jpg';
import Victor from '../img/portrait/Victor.jpg';
import Thiago from '../img/portrait/Thiago.jpg';
import noprofile from '../img/portrait/2c47d5dd5b532f83bb55c4cd6f5bd1ef.jpg';

const Members = () => {
  const allMembers = [
    {
      id: 1,
      nome: 'Guilherme',
      descrição:
        'Atua com criatividade e técnica, sempre contribuindo para soluções visuais marcantes.',
      função: 'Fotografo, Social Midia',
    },
    {
      id: 0,
      nome: 'Thiago',
      descrição:
        'Thiago lidera o multimídia com criatividade e foco, transformando ideias em impacto visual.',
      função: 'LIDER',
    },
    {
      id: 3,
      nome: 'Miguel',
      descrição:
        'É ágil e preciso, garantindo que cada detalhe faça diferença.',
      função: 'Slide',
    },
    {
      id: 4,
      nome: 'Laura',
      descrição:
        'Transforma conceitos em imagens com sensibilidade e bom gosto.',
      função: 'Fotografa',
    },
    {
      id: 5,
      nome: 'Alice',
      descrição:
        'Entrega sempre um toque criativo único, com atenção ao que realmente importa.',
      função: 'Slide',
    },
    {
      id: 6,
      nome: 'Victor',
      descrição:
        'Visionário e técnico, Victor lidera com criatividade e estratégia, entregando projetos de alto impacto.',
      função: 'LIDER',
    },
    {
      id: 7,
      nome: 'Henrique',
      descrição:
        'É versátil e dedicado, sempre pronto para elevar o visual do time.',
      função: 'Sonoplastia',
    },
  ];

  const images = [
    `url(${Guilherme})`,
    `url(${alice})`,
    `url(${Laura})`,
    `url(${Victor})`,
    `url(${Thiago})`,
    `url(${noprofile})`,
  ];

  const [members, SetMembers] = useState([]);
  const [indexImg, setIndexImg] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    selecname(6);
    document.body.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 100%), ${images[3]}`; 
    document.body.style.backgroundSize = "100vh";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "top right";
  }, []);

  const selecname = (id) => {
    const selected = allMembers.find((m) => m.id === id);
    if (selected) SetMembers([selected]);
  };

  const changeimage = (index) => {
    setIndexImg(index);
    document.body.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0) 100%), ${images[index]}`;
    document.body.style.backgroundSize = "100vh"
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "top right";
  };

  function buttonkhow() {
    navigate('/membro', {
      state: {
        member: members[0],
        img: images[indexImg],
      },
    });
  }

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {members.map((member) => (
          <ul key={member.id}>
            <h1> {member.nome} </h1>
            <p> {member.descrição} </p>
          </ul>
        ))}

        <button className={styles.know} onClick={buttonkhow}>
          {' '}
          CONHEÇA-LO{' '}
        </button>
      </div>

      <div className={styles.lideres}>
        <button
          onClick={() => {
            selecname(6), changeimage(3);
          }}
          className={styles.victor}
        ></button>
        {/* Victor */}
        <button
          onClick={() => {
            selecname(0), changeimage(4);
          }}
          className={styles.thiago}
        ></button>
        {/* Thiago */}
      </div>

      <div className={styles.select}>
        <button
          onClick={() => {
            selecname(1), changeimage(0);
          }}
          className={styles.guilherme}
        ></button>
        {/* Guilherme */}
        <button
          onClick={() => {
            selecname(5), changeimage(1);
          }}
          className={styles.alice}
        ></button>
        {/* Alice */}
        <button
          onClick={() => {
            selecname(4), changeimage(2);
          }}
          className={styles.laura}
        ></button>
        {/* Laura */}
        <button
          onClick={() => {
            selecname(7), changeimage(5);
          }}
          className={styles.henrique}
        ></button>
        {/* Henrique */}
        <button
          onClick={() => {
            selecname(3), changeimage(5);
          }}
          className={styles.miguel}
        ></button>
        {/* Miguel */}
      </div>
    </section>
  );
};

export default Members;
