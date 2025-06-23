import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListing from "./components/JobListing";
import ViewAllJobs from "./components/ViewAllJobs";
const App = () => {
  return (
    <>
      <Navbar />
      {/* <Hero title="Test Titile" subtitle="This is the Subtitle" /> */}
      <Hero />
      <HomeCards />
      <JobListing />
      <ViewAllJobs />
    </>
  );
};

export default App;
