import { useAppSelector } from '../../hooks';

import Container from '../../views/Container';
import CardItem from '../CardItem';

import styles from './Goods.module.scss';

const Goods = () => {
  const { data, loading, error } = useAppSelector((store) => store.products);

  return (
    <section className={styles.goods}>
      <Container>
        <h2 className={`${styles.title} visually-hidden`}>Список товаров</h2>

        {loading && <div>Загрузка...</div>}
        {error && <div>Ошибка: {error}</div>}

        <ul className={styles.list}>
          {data.map((elem, index) => (
            <li className={styles.item} key={index}>
              <a className={styles.link} href={`product?slug${elem.id}`}>
                {<CardItem good={elem} />}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Goods;
