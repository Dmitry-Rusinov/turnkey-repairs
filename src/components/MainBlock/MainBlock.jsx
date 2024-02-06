import React from 'react'
import styles from './MainBlock.module.scss'
import icon1 from '../../images/icon1.svg';
import icon2 from '../../images/icon2.svg';
import icon3 from '../../images/icon3.svg';
import mainPicture from '../../images/mainPicture.svg'

function MainBlock() {

  return (
    <section className={styles.container}>
      <div className={styles.info_block}>
        <h1 className={styles.title}>Ремонт под ключ от 2900 руб/м2.</h1>
        <p className={styles.description}>При заказе ремонта делаем дизайн-проект в подарок</p>
        <article>
          <div>
            <img src={icon1} alt="быстрый выезд" />
            <p>Бесплатный выезд в день обращения</p>
          </div>
          <div>
            <img src={icon2} alt="гарантия на работу" />
            <p>Гарантия на работу до 5 лет</p>
          </div>
          <div>
            <img src={icon3} alt="соблюдение сроков" />
            <p>Жесткое соблюдение сроков</p>
          </div>
        </article>
      </div>
      <div className={styles.image}></div>
    </section>
  )
}

export default MainBlock

