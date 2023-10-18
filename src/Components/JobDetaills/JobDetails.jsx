import { useLoaderData, useParams } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SaveJobApplication } from "../../Utilities/LocalStorage";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const job = jobs.find((job) => job.id === idInt);
  console.log(job);

  const handleApplyNow = () => {
    SaveJobApplication(id);
    toast.success("You have applied for this job", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };
  return (
    <div>
      <h1 className="text-3xl text-center font-extrabold">Job Details</h1>
      <div className="grid md:grid-cols-4 gap-6 mb-[130px] mt-[130px]">
        <div className="  md:col-span-3">
          <div className="mb-6">
            <span className="font-bold"> Job Description:</span>{" "}
            {job.job_description}
          </div>
          <div className="mb-6">
            <span className="font-bold"> Job Responsibility:</span>{" "}
            {job.job_responsibility}
          </div>
          <div className="mb-6">
            <span className="font-bold  ">Educational Requirements:</span>
            <p className="mt-4">{job.educational_requirements}</p>
          </div>
          <div>
            <span className="font-bold">Experiences:</span>
            <p className="mt-4">{job.experiences}</p>
          </div>
        </div>
        <div className="  md:col-span-1   p-8 w-[380px] rounded">
          <div className="bg-violet-100  p-8 w-[380px] rounded	">
            <h3 className="font-bold mb-6">Job Details</h3>
            <hr />
            <p className="mb-4 mt-6">
              {" "}
              <span className="font-bold  ">Salary:</span> {job.salary}
            </p>
            <p className="mb-8">
              <span className="font-bold">Job Title:</span> {job.job_title}
            </p>
            <h3 className="font-bold mb-6">Contact Information</h3>
            <hr />
            <p className="mb-4 mt-6">
              {" "}
              <span className="font-bold  ">Phone:</span>{" "}
              {job.contact_information.phone}
            </p>
            <p className="mb-4 mt-6">
              {" "}
              <span className="font-bold  ">Email:</span>{" "}
              {job.contact_information.email}
            </p>
            <p className="mb-4 mt-6">
              {" "}
              <span className="font-bold  ">Address:</span>{" "}
              {job.contact_information.address}
            </p>
          </div>
          <div className="bg-violet-400 py-5 rounded text-center text-white font-extrabold text-xl w-full mt-6">
            <button onClick={handleApplyNow}>Apply Now</button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default JobDetails;
