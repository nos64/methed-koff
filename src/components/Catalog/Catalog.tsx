import { useAppSelector } from '../../hooks';

import Container from '../../views/Container';

import styles from './Catalog.module.scss';

const Catalog = () => {
  const { data, loading, error } = useAppSelector((store) => store.categories);

  return (
    <nav className={styles.catalog}>
      <Container className={styles.container}>
        {loading && <div>Категории загружаются</div>}

        {error && <div>Ошибка: {error}</div>}

        <ul className={styles.list}>
          {data.map((elem, index) => (
            <li className={styles.item} key={index}>
              <a className={styles.link} href={`category?slug${elem}`}>
                {elem}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};

export default Catalog;
