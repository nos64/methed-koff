import styles from './Developers.module.scss';

const Developers = () => (
  <ul className={styles.list}>
    <li className={styles.item}>
      Designer:&nbsp;
      <a
        className={styles.link}
        href='https://t.me/Mrshmalloww'
        target='_blank'
        rel='noreferrer'>
        Anastasia Ilina
      </a>
    </li>
    <li className={styles.item}>
      Developer:&nbsp;
      <a
        className={styles.link}
        href='https://t.me/ziglobe'
        target='_blank'
        rel='noreferrer'>
        Mikhail Nosov
      </a>
    </li>
  </ul>
);

export default Developers;
