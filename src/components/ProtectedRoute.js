import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts';

const ProtectedRoute = () => {
  const {
    authState: { isAuth },
  } = useAuth();

  return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

export { ProtectedRoute };
