import { Routes, Route, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Landing from "../pages/LandingPage/LandingPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Welcome from "../pages/Welcome/Welcome";
import Test from "../pages/Welcome/Test/Test";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
};

export default AppRouter;
