import React, { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AuthLayout from './component/AuthLayout';
import NotFound from './Pages/NotFound';

const Home = lazy(() => import('./Pages/Home'));
const Login = lazy(() => import('./Pages/Login'));

const App = () => (
  <Routes>
    <Route path="/" element={<AuthLayout />}>
      <Route
        index
        element={
          <Suspense fallback={<h1>Loading...</h1>}>
            <Login />
          </Suspense>
        }
      />
    </Route>
    <Route
      path="/home"
      element={
        <Suspense fallback={<h1>Loading...</h1>}>
          <Home />
        </Suspense>
      }
    />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
