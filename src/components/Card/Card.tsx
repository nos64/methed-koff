import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import 'swiper/css';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchProduct } from '../../store/product/productSlice';

import Container from '../../views/Container';
import Slider from '../Slider';

import styles from './Card.module.scss';

const Card = () => {
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

        <Slider />

        <div className={styles.info}>
          <p className={styles.price}>{data?.price.toLocaleString()}&nbsp;₽</p>
          <p className={styles.article}>арт. {data?.article}</p>

          <h3 className={styles.characteristicsTitle}>Общие характеристики</h3>

          <table className={styles.table}>
            <tbody>
              {data?.characteristics.map((item, index) => (
                <tr className={styles.row} key={index}>
                  <td className={styles.field}>{item[0]}</td>
                  <td className={styles.value}>{item[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.btns}>
            <button className={styles.btn}>В корзину</button>
            <button className={styles.like}>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  // eslint-disable-next-line max-len
                  d='M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z'
                  fill='white'
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Card;
