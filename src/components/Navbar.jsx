import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

import { LogOut, MenuIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

import { DataContext } from "@/contexts/DataProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isSidebarOpen, setIsSidebarOpen, userName } = useContext(DataContext);
  const [navHeader, setNavHeader] = useState("");
  const [navDescription, setNavDescription] = useState("");

  useEffect(() => {
    if (location.pathname === "/credchainmd-layouts/home") {
      setNavHeader(`👋 Hi, ${userName}`);
      setNavDescription(
        `Good morning there! Let's see what we have today on your list.`
      );
    } else if (location.pathname === "/credchainmd-layouts/profile") {
      setNavHeader(`My Profile`);
      setNavDescription(`You can update your profile details here`);
    }
  }, [location.pathname, userName]);

  const logout = () => {
    try {
      localStorage.removeItem("user");
      navigate("/credchainmd-layouts/login");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="w-full">
      <div className="flex pt-8 justify-between items-center px-4 md:px-16">
        <div>
          <h1 className="text-2xl mb-2 font-bold">{navHeader}</h1>
          <p className="text-sm">{navDescription}</p>
        </div>
        <div className="flex gap-3">
          <button className="md:hidden select-none" onClick={toggleSidebar}>
            <MenuIcon />
          </button>
          <DropdownMenu>
            <DropdownMenuTrigger className=" md:pr-4 outline-none">
              <Avatar className="select-none">
                <AvatarImage src="https://github.com/ipavanteja.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <div className="px-2">
                <h3 className=" text-base text-gray-800">Hi... Pavan</h3>
                <span className="text-xs text-gray-500">{}</span>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="/credchainmd-layouts/home">Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/credchainmd-layouts/profile">My Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="h-4 text-gray-800" /> Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
