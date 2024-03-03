import { useEffect } from 'react';

import Goods from '../../components/Goods';
import Catalog from '../../components/Catalog';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCategories } from '../../store/categories/categoriesSlice';

const Main = () => {
  const dispatch = useAppDispatch();
  const {
    data: dataCategories,
    loading: loadingCategories,
    error: errorCategories,
  } = useAppSelector((store) => store.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <main>
      {loadingCategories && <div>Загрузка</div>}
      {errorCategories && <div>Ошибка: {errorCategories}</div>}
      <Catalog data={dataCategories} />
      <Goods />
    </main>
  );
};

export default Main;
