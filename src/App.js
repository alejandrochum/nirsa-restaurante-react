import React from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { DbProvider } from './contexts/DbContext';
import { HomeContainer, LoginContainer, NewUserContainer } from './components/containers';
import { Routes, Route, Outlet } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import './assets/app-assets/vendors/css/vendors.min.css';
import './assets/app-assets/vendors/css/extensions/tether-theme-arrows.css';
import './assets/app-assets/vendors/css/extensions/tether.min.css';
import './assets/app-assets/vendors/css/extensions/shepherd-theme-default.css';

import './assets/app-assets/css/bootstrap.css';
import './assets/app-assets/css/bootstrap-extended.css';
import './assets/app-assets/css/colors.css';
import './assets/app-assets/css/components.css';

function App() {
  return (
    <AuthProvider>
      <DbProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* public routes */}
            <Route path='login' element={<LoginContainer />} />
            <Route path='/*' element={<h1>404</h1>} />

            {/* private routes */}
            <Route element={<PrivateRoute />}>
              <Route path='/' element={<HomeContainer />} />
            </Route>
          </Route>
        </Routes>
      </DbProvider>
    </AuthProvider >
  );
}

const Layout = () => {
  return (
    <Outlet />
  )
}

export default App;
