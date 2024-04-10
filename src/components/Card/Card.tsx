import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Thumbs } from 'swiper/modules';

import 'swiper/css';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchProduct } from '../../store/product/productSlice';

import Container from '../../views/Container';

import styles from './Card.module.scss';
import { API_URL } from '../../constants';

const Card = () => {
  const [mainSwiper, setMainSwiper] = useState<SwiperClass>();
  const [thumdsSwiper, setThumdsSwiper] = useState<SwiperClass>();
  const { productId } = useParams();

  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((store) => store.product);

  useEffect(() => {
    if (!productId) return;

    dispatch(fetchProduct(productId));
  }, [dispatch, productId]);

  return (
    <section className={styles.card}>
      {loading && <div>Загрузка...</div>}
      {error && <div>Ошибка: {error}</div>}

      <Container className={styles.container}>
        <h2 className={styles.title}>{data?.name}</h2>

        <div className={styles.picture}>
          <div className={styles.sliderMain}>
            <Swiper
              modules={[Thumbs]}
              thumbs={{ swiper: thumdsSwiper }}
              onSwiper={setMainSwiper}
              spaceBetween={10}>
              {data?.images.map((item: string) => (
                <SwiperSlide>
                  <img src={`${API_URL}${item}`} alt={data?.name} />
                </SwiperSlide>
              ))}
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
              {data?.images.map((item: string) => (
                <SwiperSlide>
                  <img src={`${API_URL}${item}`} alt={data?.name} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className={styles.info}>
          <p className={styles.price}>{data?.price.toLocaleString()}&nbsp;₽</p>
          <p className={styles.article}>арт. {data?.article}</p>

          <div className={styles.characteristics}>
            <h3>Общие характеристики</h3>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Card;
