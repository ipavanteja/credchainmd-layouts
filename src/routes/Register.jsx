import logo from "@/assets/logo-trans.png";

import RegisterForm from "@/components/RegisterForm";

const Register = () => {
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
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an Account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your details below to create your account
              </p>
            </div>
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
