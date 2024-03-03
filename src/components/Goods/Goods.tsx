import Container from '../../views/Container';
import CardItem from '../CardItem';

import styles from './Goods.module.scss';

const Goods = () => (
  <section className={styles.goods}>
    <Container>
      <h2 className={`${styles.title} visually-hidden`}>Список товаров</h2>

      <ul className={styles.list}>
        <li>
          <CardItem />
        </li>
      </ul>
    </Container>
  </section>
);

export default Goods;
