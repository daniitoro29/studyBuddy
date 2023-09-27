import {Routes, Route} from 'react-router-dom'
import NavBar from "../pages/LandingPage/Navbar/Navbar";

export const AppRouter = () => {
  return (
    <>
      {/* Landing page */}
      <Routes>
        <Route path="/" element={<NavBar />} />
      </Routes>
    </>
  );
};

export default AppRouter;
