import { Loader } from 'components';
import { ContactsPage, HomePage, LoginPage, RegisterPage } from 'pages';
import { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    // <Layout>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
    // </Layout>
  );
};


