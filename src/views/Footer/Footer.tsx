import Container from '../Container';

import Logo from '../../components/Logo';
import Contacts from '../../components/Contacts';
import Developers from '../../components/Developers';

import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <Container className={styles.container}>
      <div className={styles.logo}>
        <Logo />
      </div>

      <div className={styles.contacts}>
        <Contacts />
      </div>

      <div className={styles.developers}>
        <Developers />
      </div>

      <p className={styles.copyright}>© Koff, 2024</p>
    </Container>
  </footer>
);

export default Footer;
