import React from 'react';
import h from'./Header.module.css';
import Button2 from '../../CastButtons/Button2'


const Header = () => {

    return <header className={h.header}> 
    
    <img alt="logo"src="https://www.logaster.ru/blog/wp-content/uploads/sites/2/2018/11/1009_h_versace_13.png"></img>

    
                     <a  className={h.item} href="/"><span>Преимущества</span></a>
                     <a className={h.item} href="/"><span>О нас</span></a>
                     <a className={h.item} href="/"><span>Наши работы</span></a>
                     <a className={h.item} href="/"><span>Как мы работаем</span></a>
                     <a className={h.item} href="/"><span>Отзывы</span></a>
                     <a className={h.item} href="/"><span>FAQ</span></a>
                    
                     <div className={h.zvon}>
                     <p className={h.tel}> + 3 7 5 ( 3 3 ) 1 2 3 4 5 6 7 </p> 
                     <Button2 />
                     </div>
                 
       
      </header>
      
}

export default Header;
