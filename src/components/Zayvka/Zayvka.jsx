import React from 'react';
import h from './Zayvka.module.css';
import CastInput from '../../CastInput/CastInput';

const Zayvka = () => {
  return <zayvka className={h.zayvka}>
<h1>Не оставляйте оформление вашей свадьбы<br/> на последний момент</h1>
<div className={h.block}>
  <h1>Оставьте заявку сейчас</h1>
  <p>и получите БЕСПЛАТНЫЙ дизайн-проект!</p>
  <CastInput label={"Введите ваше имя*"} />
  <CastInput label={"Введите ваш номер телефона*"} />
</div>
  </zayvka>

}

export default Zayvka;
