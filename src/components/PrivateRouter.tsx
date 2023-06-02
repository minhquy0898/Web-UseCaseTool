import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../hooks/redux.hook'; // Update with your actual path
import { selectorLogin } from '../redux/user/auth';

const PrivateRouter: React.FC<{
  isLogin: boolean
}> = ({ isLogin }) => {
  return isLogin ? <Outlet /> : <Navigate to="/SignIn" />;
};

export default PrivateRouter;