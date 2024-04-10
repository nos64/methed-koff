import { useEffect } from 'react';

import Container from '../Container';
import CardItem from '../../components/CardItem';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchProducts } from '../../store/products/productsSlice';

import styles from './Goods.module.scss';

const Goods = () => {
  const dispatch = useAppDispatch();

  const { data, loading, error } = useAppSelector((store) => store.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <section className={styles.goods}>
      <Container>
        <h2 className={`${styles.title} visually-hidden`}>Список товаров</h2>

        {loading && <div>Загрузка...</div>}
        {error && <div>Ошибка: {error}</div>}

        <ul className={styles.list}>
          {data.map((item) => (
            <li key={item.id}>{<CardItem {...item} />}</li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Goods;
