import jobs from "../jobs.json";
import SingleJobList from "./SingleJobList";
import { Link } from "react-router-dom";

const JobListing = ({ isHome = false }) => {
  // console.log(jobs);
  // const recentjobs = jobs.slice(0, 3);

  const JobListing = isHome ? jobs.slice(0, 3) : jobs;
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* here we used the map function  */}
            {/* {jobs.map((job) => (
              <SingleJobList key={job.id} job={job} />
            ))} */}

            {/* show jobs from 0-3 */}

            {/* {recentjobs.map((job) => (
              <SingleJobList key={job.id} job={job} />
            ))} */}

            {JobListing.map((job) => (
              <SingleJobList key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default JobListing;
