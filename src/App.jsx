import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Router,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import HomeCards from "./components/HomeCards";
// import JobListing from "./components/JobListing";
// import ViewAllJobs from "./components/ViewAllJobs";

const router = createBrowserRouter(
  createRoutesFromElements(<Route index element={<HomePage />} />)
);

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Hero title="Test Titile" subtitle="This is the Subtitle" /> */}
      {/* <Hero /> */}
      {/* <HomeCards /> */}
      {/* <JobListing /> */}
      {/* <ViewAllJobs /> */}
      <RouterProvider router={router} />
    </>
  );
};

export default App;
