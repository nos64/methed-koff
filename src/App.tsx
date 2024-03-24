import { useEffect } from 'react';

import Header from './views/Header';
import Main from './views/Main';
import Footer from './views/Footer';

import { useAppDispatch, useAppSelector } from './hooks';
import { fetchAccessKey } from './store/auth/authSlice';

const App = () => {
  const dispatch = useAppDispatch();
  const { accessKey, loading } = useAppSelector((store) => store.auth);

  useEffect(() => {
    if (accessKey) return;

    dispatch(fetchAccessKey());
  }, [dispatch, accessKey]);

  return (
    <>
      <Header />
      {!loading && accessKey ? <Main /> : <div>'Загрузка...'</div>}
      <Footer />
    </>
  );
};

export default App;
