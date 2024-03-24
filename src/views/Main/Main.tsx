import { useEffect } from 'react';

import Goods from '../../components/Goods';
import Catalog from '../../components/Catalog';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCategories } from '../../store/categories/categoriesSlice';
import { fetchProducts } from '../../store/products/productsSlice';

const Main = () => {
  const dispatch = useAppDispatch();

  const {
    data: dataProducts,
    loading: loadingProducts,
    error: errorProducts,
  } = useAppSelector((store) => store.products);

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <main>
      <Catalog />
      <Goods data={dataProducts} />
    </main>
  );
};

export default Main;
