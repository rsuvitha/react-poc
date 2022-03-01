import React from 'react';
import { LockClosedIcon } from '@heroicons/react/solid'

interface Props{}

const Login = (props: Props) => {
  return (
    <form className="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="show-password" defaultValue="true" />
      <div className="rounded-none">
        <div className='pb-6'>
          <label htmlFor="email-address" className="sr-only">
            Email
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none rounded-none relative block w-full pl-5 py-1.5 border border-zinc-400 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Email"
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="appearance-none rounded-none relative block w-full pl-5 py-1.5 border border-zinc-400 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            placeholder="Password"
          />
        </div>
      </div>

      <div className="items-center justify-between mt-0">
        <div className="flex items-center pb-4">
          <input
            id="show-password"
            name="show-password"
            type="checkbox"
            className="h-4 w-4 text-zinc-600 focus:ring-zinc-500 border-zinc-900 rounded-none"
          />
          <label
            htmlFor="show-password"
            className="ml-2 block text-sm text-gray-900"
          >
             Show password
          </label>
        </div>

        <div className="text-xs pt-5 underline-offset-0 underline">
          <a
            href="#"
            className="font-medium text-stone-800 hover:text-red-500"
          >
            I FORGOT MY PASSWORD
          </a>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative w-3/4 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-none text-white bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          SIGN IN
        </button>
      </div>
    </form>
  );
};

export default Login;
