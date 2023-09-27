import {Routes, Route} from 'react-router-dom'
import Landing from "../pages/LandingPage/LandingPage";

export const AppRouter = () => {
  return (
    <>
      {/* Landing page */}
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
};

export default AppRouter;
