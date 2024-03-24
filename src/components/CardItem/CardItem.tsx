import styles from './CardItem.module.scss';

import { Product } from '../../store/products/productsSlice';

// export interface Product {
//   article: string;
//   category: string;
//   characteristics: [string, string];
//   id: number;
//   images: string[];
//   name: string;
//   price: number;
// }

interface CardItemProps {
  good: Product;
}

const CardItem = (props: CardItemProps) => {
  const { article, category, characteristics, id, images, name, price } =
    props.good;

  return <article className={styles.card}>{name}</article>;
};

export default CardItem;
