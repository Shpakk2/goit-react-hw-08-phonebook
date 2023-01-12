import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children, restricted = false, redirectTo = '/' }) => {
  const isLogin = useSelector(state => state.user.isLogin);
  const shouldRedirect = isLogin && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};