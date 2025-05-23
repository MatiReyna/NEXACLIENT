import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  return localStorage.getItem('isAuthenticated') === 'true';
};

const RequireAuth = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/administrador" replace />;
  }
  return children;
};

export default RequireAuth;
