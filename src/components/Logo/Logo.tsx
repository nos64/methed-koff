import LogoSvg from './Logo.svg';

import styles from './Logo.module.scss';

const Logo = () => (
  <a className={styles.link} href='/'>
    <img
      className={styles.img}
      src={LogoSvg}
      alt='Логотип мебельного маркета Koff'
    />
  </a>
);

export default Logo;
