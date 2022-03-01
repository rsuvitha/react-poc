import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

const AuthLayout = () => {
  const location = useLocation();

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
            {`${location.pathname === '/' ? 'SIGN IN' : 'Register'}`}
          </h2>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
