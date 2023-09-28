import { Routes, Route, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Landing from "../pages/LandingPage/LandingPage";
import Login from "../pages/Login/Login";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Login />} />
      </Routes>
    </>
  );
};

export default AppRouter;
