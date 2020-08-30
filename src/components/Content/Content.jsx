import React from 'react';
import h from './Content.module.css';
import Button1 from '../../CastButtons/Button1';

const Content = () => {
  return <content className={h.content}>

    <h1>Наши услуги</h1>
    <p className={h.slova}>Мы работаем со всеми  элементами декора</p>
    <div className={h.foto}>
      <div className={h.table}>
        <img alt="Украшение стола" src="https://asset2.zankyou.com/images/mag-card-c/98f/5c8c/414/400/-/cl/wp-content/uploads/2019/05/befunky-collage-8.jpg"></img>
        <h3>Украшение тканями</h3>
        <p>У нас есть множество видов<br />нежнейших тканей любого цвета и<br />фактура для декорирования <br />свадебного пространства</p>
        <Button1 />
      </div>
      <div className={h.flowers}>
        <img alt="Цветы" src="https://i.pinimg.com/originals/61/d5/73/61d573bd246d0bebdb21d8134b647944.jpg"></img>
        <h3>Флористика</h3>
        <p>Букеты из живых цветов. Чудесные и<br />необычные композиции с фруктами,<br />экзотическими растениями и,<br /> аксессуарами</p>
        <Button1 />
      </div>
      <div className={h.shar}>
        <img alt="Шары" src="https://ae01.alicdn.com/kf/He4a5d550936f4a70ab6ed0ab0f1e38d3A.jpg"></img>
        <h3>Воздушные шары</h3>
        <p>Оригинальные букеты, сердца и <br />фигуры из самых необычных<br /> шариков. Отлично сочетаются с<br /> тканями и живыми цветами</p>
        <Button1 />
      </div>
    </div>

  </content>

}

export default Content;
