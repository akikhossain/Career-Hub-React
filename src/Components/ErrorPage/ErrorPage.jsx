import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center font-bold mt-[15%]">
      <h2 className="text-5xl">Oops!!! There is no content here. </h2>
      <button className="text-red-500 text-2xl border rounded-lg bg-sky-500 p-6 m-6">
        <Link to="/">Go Back to Home</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
