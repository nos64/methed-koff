import Container from '../../views/Container';

import styles from './Catalog.module.scss';

interface CatalogProps {
  data: string[];
}

const Catalog = (props: CatalogProps) => {
  const { data } = props;
  return (
    <nav className={styles.catalog}>
      <Container className={styles.container}>
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
