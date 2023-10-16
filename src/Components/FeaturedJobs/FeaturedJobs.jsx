import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-6xl font-bold mb-4">
        Featured Jobs: {jobs.length}
      </h1>
      <p className="text-center mb-8">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-2 gap-6">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={dataLength === jobs.length && "hidden"}>
        <div className="w-[160px] mx-auto mt-10 mb-[130px]">
          <button
            onClick={() => setDataLength(jobs.length)}
            className="text-center bg-purple-600 text-white px-4 py-2   rounded"
          >
            Show All Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
