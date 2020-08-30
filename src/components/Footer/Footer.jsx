import React from 'react';
import h from'./Footer.module.css';


const Footer = () => {
    return <footer className={h.footer}> 
    <div className={h.down}>
  <h1>Контакты</h1>
  <p>Наша контактная информация</p>
  <img alt="logo" src="https://cdn141.picsart.com/274500979022211.png"></img>
    </div>
  </footer>
}

export default Footer;
