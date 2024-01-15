import Container from '../Container';

import Logo from '../../components/Logo';
import Contacts from '../../components/Contacts';
import Developer from '../../components/Developer';

import styles from './Footer.module.scss';

const Footer = () => (
  <footer>
    <Container className={styles.container__header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.contacts}>
        <Contacts />
      </div>
      <div className={styles.developer}>
        <Developer />
      </div>
    </Container>
  </footer>
);

export default Footer;
