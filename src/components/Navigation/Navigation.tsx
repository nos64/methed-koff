import styles from './Navigation.module.scss';

const Navigation = () => (
  <nav className={styles.navigation}>
    <a className={styles.link} href='/favorite'>
      <span className={styles.text}>Избранное</span>
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          // eslint-disable-next-line max-len
          d='M8.4135 13.8733C8.18683 13.9533 7.8135 13.9533 7.58683 13.8733C5.6535 13.2133 1.3335 10.46 1.3335 5.79332C1.3335 3.73332 2.9935 2.06665 5.04016 2.06665C6.2535 2.06665 7.32683 2.65332 8.00016 3.55998C8.6735 2.65332 9.7535 2.06665 10.9602 2.06665C13.0068 2.06665 14.6668 3.73332 14.6668 5.79332C14.6668 10.46 10.3468 13.2133 8.4135 13.8733Z'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </a>
    <a className={styles.link} href='/cart'>
      <span className={styles.text}>Корзина</span>
      <span>(5)</span>
      <svg
        width='16'
        height='16'
        viewBox='0 0 16 16'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M5.87329 1.33325L3.45996 3.75325'
          stroke='currentColor'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M10.1265 1.33325L12.5398 3.75325'
          stroke='currentColor'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          // eslint-disable-next-line max-len
          d='M1.3335 5.23324C1.3335 3.9999 1.9935 3.8999 2.8135 3.8999H13.1868C14.0068 3.8999 14.6668 3.9999 14.6668 5.23324C14.6668 6.66657 14.0068 6.56657 13.1868 6.56657H2.8135C1.9935 6.56657 1.3335 6.66657 1.3335 5.23324Z'
          stroke='currentColor'
        />
        <path
          d='M6.50684 9.33325V11.6999'
          stroke='currentColor'
          strokeLinecap='round'
        />
        <path
          d='M9.57324 9.33325V11.6999'
          stroke='currentColor'
          strokeLinecap='round'
        />
        <path
          // eslint-disable-next-line max-len
          d='M2.3335 6.66675L3.2735 12.4267C3.48683 13.7201 4.00016 14.6667 5.90683 14.6667H9.92683C12.0002 14.6667 12.3068 13.7601 12.5468 12.5067L13.6668 6.66675'
          stroke='currentColor'
          strokeLinecap='round'
        />
      </svg>
    </a>
  </nav>
);

export default Navigation;
