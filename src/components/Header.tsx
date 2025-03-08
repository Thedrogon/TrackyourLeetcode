import { Link } from "react-router-dom";
import logo from "../assets/rocket.svg";

const Header = () => {
  return (
    <div className="flex items-center justify-center  bg-slate-800 text-white p-6 gap-50">
      <div className="flex items-center space-x-4">
          <h1 className="hover:text-orange-500 text-3xl  cursor-pointer ">Track-Your-Code</h1>
          <img src={logo} alt="Leetcode" className="h-15 w-15 " />
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/auth/leetcode" className="cursor-pointer text-xl">Auth Leetcode</Link>
        <Link to="/Signin" className="cursor-pointer text-xl ">Sign in</Link>
      </div>
    </div>
  );
};

export default Header;  