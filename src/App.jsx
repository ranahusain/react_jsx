import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  Router,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import MainLayout from "./layouts/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
// import JobPage from "./pages/JobPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";

// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import HomeCards from "./components/HomeCards";
// import JobListing from "./components/JobListing";
// import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
  //Job Added through Post Request
  const addJob = async (newJob) => {
    // console.log(newJob);
    const res = await fetch("/api/jobs", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  //Delete Request
  const deleteJob = async (id) => {
    console.log("delete", id);
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
  };

  // Update Job
  const updateJob = async (Job) => {
    const res = await fetch(`/api/jobs/${Job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Job),
    });
    return;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route
          path="/jobs/:id"
          element={<JobPage deleteJob={deleteJob} />}
          loader={jobLoader}
        />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage updateJobSubmit={updateJob} />}
          loader={jobLoader}
        />
        <Route path="/add-job" element={<AddJobPage addJobSubmit={addJob} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

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
