import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";

import image from "../assets/logo-trans.png";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

import { LayoutDashboardIcon, User, LogOut } from "lucide-react";

import { DataContext } from "@/contexts/DataProvider";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isSidebarOpen } = useContext(DataContext);

  const logout = () => {
    try {
      localStorage.removeItem("user");
      navigate("/credchainmd-layouts/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={` ${
        isSidebarOpen
          ? "translate-x-0  "
          : " -translate-x-full md:translate-x-0"
      } fixed ease-in-out duration-300 z-30  bg-[#28328C]  md:block md:relative w-[60%]  md:w-[16%] 2xl:w-[15%] border-r`}
    >
      <div className="sticky top-0 w-full md:w-full p-5 h-screen justify-center">
        <div className="flex flex-col h-full justify-between">
          <div className="flex flex-col gap-3">
            <img className="mb-12" src={image} />
            <div>
              <Link
                className={`inline-flex gap-3  px-4 py-2 ${
                  location.pathname === "/credchainmd-layouts/home"
                    ? "bg-[#0077B6] text-white hover:black"
                    : "text-white hover:bg-[#0077B6]"
                } rounded-md w-full md:justify-center xl:justify-start   duration-200`}
                to={"/credchainmd-layouts/home"}
              >
                <LayoutDashboardIcon width={18} />
                <p className="xl:block md:hidden">Dashboard</p>
              </Link>
            </div>
            <div>
              <Link
                className={`inline-flex   gap-3 px-4 py-2 ${
                  location.pathname === "/credchainmd-layouts/profile"
                    ? "bg-[#0077B6] text-white hover:black"
                    : "text-white hover:bg-[#0077B6] "
                } rounded-md w-full md:justify-center xl:justify-start duration-200`}
                to={"/credchainmd-layouts/profile"}
              >
                <User width={18} />
                <p className="xl:block md:hidden">My Profile</p>
              </Link>
            </div>
          </div>
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="w-full flex gap-3 rounded-md px-4 py-2 text-primary-foreground  md:justify-center xl:justify-start">
                <LogOut />
                <p className="xl:block md:hidden">Logout</p>
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you leaving?</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure want to log out?
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                  onClick={logout}
                  className="bg-[#28328C] hover:bg-[#03045e]"
                >
                  Yes
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
