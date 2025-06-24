import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";
import { HiH1 } from "react-icons/hi2";
const JobPage = () => {
  const [job, setJob] = useState([]);
  // useEffect(()=>{},[]) basic structure of useEffect
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
        setJob(data);
      } catch (error) {
        console.log("error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, []);
  return loading ? <Spinner /> : <h1>{job.title}</h1>;
};
export default JobPage;
