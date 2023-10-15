const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="  shadow-md rounded px-10 py-10">
      <figure>
        <img src={logo} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="inline-flex gap-2  ">
          <div className="border border-[#7E90FE] px-5 py-2 rounded">
            {remote_or_onsite}
          </div>
          <div className="border border-[#7E90FE] px-5 py-2 rounded">
            {job_type}
          </div>
        </div>
        <div className="flex">
          <p>{location}</p>
          <p>Salary: {salary}</p>
        </div>
        <button className="text-left bg-purple-600 text-white px-4 py-2 w-[130px] rounded">
          View Details
        </button>
      </div>
    </div>
  );
};

export default Job;
