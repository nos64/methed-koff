import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCategories } from '../../store/categories/categoriesSlice';

import Container from '../Container';

import styles from './Catalog.module.scss';
import { Link } from 'react-router-dom';

const Catalog = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((store) => store.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <nav className={styles.catalog}>
      <Container className={styles.container}>
        {loading && <div>Категории загружаются</div>}

        {error && <div>Ошибка: {error}</div>}

        <ul className={styles.list}>
          {data.map((elem, index) => (
            <li className={styles.item} key={index}>
              <Link className={styles.link} to={`category?slug${elem}`}>
                {elem}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
};

export default Catalog;
