import { useState } from 'react';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Thumbs, Pagination, Navigation } from 'swiper/modules';

import { useAppSelector } from '../../hooks';

import styles from './Slider.module.scss';

import { API_URL } from '../../constants';

const Slider = () => {
  const [mainSwiper, setMainSwiper] = useState<SwiperClass>();
  const [thumdsSwiper, setThumdsSwiper] = useState<SwiperClass>();

  const { data } = useAppSelector((store) => store.product);

  return (
    <div className={styles.picture}>
      <div className={styles.sliderMain}>
        {data && (
          <>
            <Swiper
              modules={[Thumbs, Pagination, Navigation]}
              thumbs={{ swiper: thumdsSwiper }}
              onSwiper={setMainSwiper}
              loop={true}
              spaceBetween={10}>
              {data?.images.map((item: string, index) => (
                <SwiperSlide key={index} className={styles.slide}>
                  <img
                    className={styles.image}
                    src={`${API_URL}${item}`}
                    alt={data?.name}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              className={`${styles.arrow} ${styles.arrow_next} `}
              onClick={() => mainSwiper?.slideNext()}>
              <svg
                width='32'
                height='32'
                viewBox='0 0 32 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <rect
                  width='32'
                  height='32'
                  rx='16'
                  fill='white'
                  fillOpacity='0.4'
                />
                <path
                  // eslint-disable-next-line max-len
                  d='M11.864 16.0001L17.5253 10.1821C17.5719 10.1352 17.6087 10.0796 17.6337 10.0183C17.6587 9.95711 17.6712 9.89155 17.6707 9.82544C17.6701 9.75933 17.6565 9.69398 17.6305 9.63318C17.6045 9.57239 17.5668 9.51734 17.5194 9.47124C17.472 9.42513 17.4159 9.38888 17.3545 9.36458C17.293 9.34028 17.2273 9.32842 17.1612 9.32968C17.0951 9.33094 17.0299 9.34529 16.9694 9.37191C16.9088 9.39854 16.8542 9.43689 16.8086 9.48477L10.8086 15.6514C10.7178 15.7448 10.667 15.8699 10.667 16.0001C10.667 16.1303 10.7178 16.2554 10.8086 16.3488L16.8086 22.5154C16.8542 22.5633 16.9088 22.6017 16.9694 22.6283C17.0299 22.6549 17.0951 22.6693 17.1612 22.6705C17.2273 22.6718 17.293 22.6599 17.3545 22.6356C17.4159 22.6113 17.472 22.5751 17.5194 22.529C17.5668 22.4829 17.6045 22.4278 17.6305 22.367C17.6565 22.3062 17.6701 22.2409 17.6707 22.1748C17.6712 22.1087 17.6587 22.0431 17.6337 21.9819C17.6087 21.9207 17.5719 21.865 17.5253 21.8181L11.864 16.0001Z'
                  fill='#1C1C1C'
                />
              </svg>
            </button>
            <button
              className={`${styles.arrow} ${styles.arrow_prev} `}
              onClick={() => mainSwiper?.slidePrev()}>
              <svg
                width='32'
                height='32'
                viewBox='0 0 32 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <rect
                  width='32'
                  height='32'
                  rx='16'
                  transform='matrix(-1 0 0 1 32 0)'
                  fill='white'
                  fillOpacity='0.4'
                />
                <path
                  // eslint-disable-next-line max-len
                  d='M20.136 16.0001L14.4747 10.1821C14.4281 10.1352 14.3913 10.0796 14.3663 10.0183C14.3413 9.95711 14.3288 9.89155 14.3293 9.82544C14.3299 9.75933 14.3435 9.69398 14.3695 9.63318C14.3955 9.57239 14.4332 9.51734 14.4806 9.47124C14.528 9.42513 14.5841 9.38888 14.6455 9.36458C14.707 9.34028 14.7727 9.32842 14.8388 9.32968C14.9049 9.33094 14.9701 9.34529 15.0306 9.37191C15.0912 9.39854 15.1458 9.43689 15.1914 9.48477L21.1914 15.6514C21.2822 15.7448 21.333 15.8699 21.333 16.0001C21.333 16.1303 21.2822 16.2554 21.1914 16.3488L15.1914 22.5154C15.1458 22.5633 15.0912 22.6017 15.0306 22.6283C14.9701 22.6549 14.9049 22.6693 14.8388 22.6705C14.7727 22.6718 14.707 22.6599 14.6455 22.6356C14.5841 22.6113 14.528 22.5751 14.4806 22.529C14.4332 22.4829 14.3955 22.4278 14.3695 22.367C14.3435 22.3062 14.3299 22.2409 14.3293 22.1748C14.3288 22.1087 14.3413 22.0431 14.3663 21.9819C14.3913 21.9207 14.4281 21.865 14.4747 21.8181L20.136 16.0001Z'
                  fill='#1C1C1C'
                />
              </svg>
            </button>
          </>
        )}
      </div>

      <div className={styles.sliderThumbnails}>
        {data && (
          <Swiper
            modules={[Thumbs]}
            watchSlidesProgress
            onSwiper={setThumdsSwiper}
            spaceBetween={14}
            slidesPerView={4}
            freeMode>
            {data?.images.map((item: string, index) => (
              <SwiperSlide key={index} className={styles.slideThumbnail}>
                <img
                  className={styles.imgThumbnail}
                  src={`${API_URL}${item}`}
                  alt={data?.name}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};
export default Slider;
