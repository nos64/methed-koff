import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Thumbs } from 'swiper/modules';

import 'swiper/css';
import Container from '../../views/Container';

import styles from './Card.module.scss';

const Card = () => {
  const [mainSwiper, setMainSwiper] = useState<SwiperClass>();
  const [thumdsSwiper, setThumdsSwiper] = useState<SwiperClass>();
  const { productId } = useParams();

  return (
    <section className={styles.card}>
      <Container className={styles.container}>
        <h2 className={styles.title}>Кресло с подлокотниками</h2>

        <div className={styles.picture}>
          <div className={styles.sliderMain}>
            <Swiper
              modules={[Thumbs]}
              thumbs={{ swiper: thumdsSwiper }}
              onSwiper={setMainSwiper}
              spaceBetween={10}>
              <SwiperSlide>
                <img src='/img/photo.png' alt='Кресло с подлокотниками' />
              </SwiperSlide>

              <SwiperSlide>
                <img src='/img/photo.png' alt='Кресло с подлокотниками' />
              </SwiperSlide>

              <SwiperSlide>
                <img src='/img/photo.png' alt='Кресло с подлокотниками' />
              </SwiperSlide>

              <SwiperSlide>
                <img src='/img/photo.png' alt='Кресло с подлокотниками' />
              </SwiperSlide>

              <SwiperSlide>
                <img src='/img/photo.png' alt='Кресло с подлокотниками' />
              </SwiperSlide>

              <SwiperSlide>
                <img src='/img/photo.png' alt='Кресло с подлокотниками' />
              </SwiperSlide>
            </Swiper>

            <button onClick={() => mainSwiper?.slideNext()}>next</button>
            <button onClick={() => mainSwiper?.slidePrev()}>prev</button>
          </div>

          <div className={styles.sliderThumbnails}>
            <Swiper
              modules={[Thumbs]}
              watchSlidesProgress
              onSwiper={setThumdsSwiper}
              spaceBetween={14}
              slidesPerView={4}
              freeMode>
              <SwiperSlide>
                <img src='/img/photo.png' alt='Кресло с подлокотниками' />
              </SwiperSlide>

              <SwiperSlide>
                <img src='/img/photo.png' alt='Кресло с подлокотниками' />
              </SwiperSlide>

              <SwiperSlide>
                <img src='/img/photo.png' alt='Кресло с подлокотниками' />
              </SwiperSlide>

              <SwiperSlide>
                <img src='/img/photo.png' alt='Кресло с подлокотниками' />
              </SwiperSlide>

              <SwiperSlide>
                <img src='/img/photo.png' alt='Кресло с подлокотниками' />
              </SwiperSlide>

              <SwiperSlide>
                <img src='/img/photo.png' alt='Кресло с подлокотниками' />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className={styles.info}>
          <p className={styles.price}>{'5000'.toLocaleString()}&nbsp;₽</p>
          <p className={styles.article}>арт. 84348945757</p>

          <div className={styles.characteristics}>
            <h3>Общие характеристики</h3>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Card;
