import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center  bg-slate-800 text-white p-6 gap-50">
      <h1 className="hover:text-orange-500 text-3xl  cursor-pointer ">Track-Your-Code</h1>
      <div className="flex items-center space-x-4">
        <Link to="/auth/leetcode" className="cursor-pointer text-xl">Auth Leetcode</Link>
        <Link to="/Signin" className="cursor-pointer text-xl ">Sign in</Link>
      </div>
    </div>
  );
};

export default Home;