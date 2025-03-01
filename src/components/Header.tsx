
import AuthLeetcode from "./AuthLeetcode";
import Logo from "./Logo";
import Signin from "./Signin";

const header = () => {
  return (
    <div className="flex gap-30 items-center justify-center  bg-slate-800 text-white p-6">
      <Logo/>
      <div className="flex items-center space-x-4">
        <AuthLeetcode/>
        <Signin/>
      </div>
    </div>
  );
};

export default header;