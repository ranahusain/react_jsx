import jobs from "../jobs.json";
import SingleJobList from "./SingleJobList";
import { useState, useEffect } from "react";
import Spinner from "./Spinner";
const JobListing = ({ isHome = false }) => {
  // console.log(jobs);
  // const recentjobs = jobs.slice(0, 3);

  // const[statename,statefunction] = useState([])deafult value which is empty array here;

  const [jobs, setJobs] = useState([]);

  //to show loader
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchjobs = async () => {
      try {
        const res = await fetch("http://localhost:8000/jobs?_limit=3");
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.log("error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchjobs();
  }, []);

  // const JobListing = isHome ? jobs.slice(0, 3) : jobs;
  //commented above because now we are using fetching from server
  return (
    <>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> */}
          {/* here we used the map function  */}
          {/* {jobs.map((job) => (
              <SingleJobList key={job.id} job={job} />
            ))} */}

          {/* show jobs from 0-3 */}

          {/* {recentjobs.map((job) => (
              <SingleJobList key={job.id} job={job} />
            ))} */}

          {/* this is the final comment the last change  */}
          {/* {JobListing.map((job) => (
              <SingleJobList key={job.id} job={job} />
            ))} */}

          {/* 
            {jobs.map((job) => (
              <SingleJobList key={job.id} job={job} />
            ))} */}

          {loading ? (
            <Spinner loading={loading} />
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <SingleJobList key={job.id} job={job} />
              ))}
            </div>
          )}
          {/* </div> */}
        </div>
      </section>
    </>
  );
};

export default JobListing;
