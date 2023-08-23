import Header from 'components/Header/Header';
import { Loader } from 'components/Loader';
import { Suspense } from 'react';
import { Rings } from 'react-loader-spinner';
import { Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

const Layout = () => (
  <>
    <Header />
    <main>
      <Suspense
        fallback={
          <Loader>
            <Rings />
          </Loader>
        }
      >
        <Outlet />
      </Suspense>
    </main>
  </>
);

export default Layout;
