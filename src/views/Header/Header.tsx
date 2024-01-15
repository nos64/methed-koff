import Container from '../Container';

import Logo from '../../components/Logo';
import Search from '../../components/Search';
import Navigation from '../../components/Navigation';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <Container className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.navigation}>
        <Navigation />
      </div>
    </Container>
  </header>
);

export default Header;
