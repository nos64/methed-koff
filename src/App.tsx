import { useEffect } from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import Header from './views/Header';
import Footer from './views/Footer';
import Goods from './views/Goods';
import Catalog from './views/Catalog';
import Cart from './components/Cart';
import Card from './components/Card';
import { useAppDispatch, useAppSelector } from './hooks';
import { fetchAccessKey } from './store/auth/authSlice';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </>
    ),
    children: [
      {
        path: '/',
        element: (
          <>
            <Catalog />
            <Goods />
          </>
        ),
      },
      {
        path: '/favorite',
        element: (
          <>
            <Catalog />
            <Goods />
          </>
        ),
      },
      {
        path: '/category',
        element: (
          <>
            <Catalog />
            <Goods />
          </>
        ),
      },
      {
        path: '/search',
        element: (
          <>
            <Catalog />
            <Goods />
          </>
        ),
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/product/:productId',
        element: (
          <>
            <Catalog />
            <Card />
          </>
        ),
      },
    ],
  },
]);

const App = () => {
  const dispatch = useAppDispatch();
  const { accessKey, loading } = useAppSelector((store) => store.auth);

  useEffect(() => {
    if (accessKey) return;

    dispatch(fetchAccessKey());
  }, [dispatch, accessKey]);

  if (loading) {
    return <div>Загрузка</div>;
  }

  return <RouterProvider router={router} />;
};

export default App;
