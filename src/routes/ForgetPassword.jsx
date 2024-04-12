import { Link } from "react-router-dom";

import logo from "@/assets/logo-trans.png";

import ForgotForm from "@/components/ForgotForm";

const ForgetPassword = () => {
  return (
    <div className="container relative flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute bg-hero-pattern  inset-0 bg-[#28328C]" />
        <div className="absolute bg-opacity-60 inset-0 bg-[#28328C]" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <img className="w-48 mb-12" src={logo} />
        </div>
      </div>
      <div className="lg:p-8 h-screen">
        <div className="mx-auto h-full flex w-full flex-col justify-center space-y-6 sm:w-[450px]">
          <div className="flex bg-white shadow p-8 rounded-2xl flex-col justify-center space-y-6">
            <div className="flex space-y-2 text-center">
              <button>
                <Link
                  to="/credchainmd-layouts/login"
                  className="flex items-center pr-6 text-blue-950 hover:underline text-base"
                >
                  {`< Back`}
                </Link>
              </button>
              <h1 className="text-2xl font-semibold tracking-tight">
                Forgot Password
              </h1>
            </div>
            <ForgotForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
