import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Enroll from './pages/Enroll';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

import UserContext from './contexts/UserContext';

import useToken from './hooks/useToken';
import { useState } from 'react';
import PsyDashboard from './pages/Psy-dashboard';

export default function App() {
  const loggedUser = JSON.parse(localStorage.getItem('driventUser'));
  const [user, setUser] = useState(loggedUser);
  
  return (
    <>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <Routes>
            <Route path="/" element={user ? <Navigate replace to={'/dashboard'}/> : <Navigate replace to={'/sign-in'}/>} />
            <Route path="/sign-in" element={<SignIn />} />

            <Route
              path="/dashboard"
              element={
                <ProtectedRouteGuard>
                  <Dashboard />
                </ProtectedRouteGuard>
              }
            ></Route>
            <Route
              path="/psy-dashboard"
              element={
                <PsyDashboard />
              }
            ></Route>
          </Routes>
        </Router>
      </UserContext.Provider>
    </>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = useToken();

  if (!token) {
    return <Navigate to="/sign-in" />;
  }

  return <>{children}</>;
}
