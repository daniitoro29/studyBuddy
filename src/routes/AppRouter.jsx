import {Routes, Route} from 'react-dom'
import Header from "../pages/LandingPage/Navbar/Navbar";

export const AppRouter = () => {
  return (
    <>
      {/* Landing page */}
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </>
  );
};

export default AppRouter;
