import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: ReactNode;
}

// Mock authentication check - in a real app, this would check actual auth state
const isAuthenticated = () => {
  // For demo purposes, we'll check localStorage for a mock token
  // In production, this would integrate with your auth system
  return localStorage.getItem('safariDesk_user') !== null;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  if (!isAuthenticated()) {
    // Redirect to login page if not authenticated
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}
