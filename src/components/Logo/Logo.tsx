import LogoSvg from './Logo.svg';

import styles from './Logo.module.scss';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link className={styles.link} to='/'>
    <img
      className={styles.img}
      src={LogoSvg}
      alt='Логотип мебельного маркета Koff'
    />
  </Link>
);

export default Logo;
