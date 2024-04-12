import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const BaseLayout = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="d-flex position-relative">
        <main className="">
          <div className="flex">
            <Sidebar />
            <div className="w-full">
              <Navbar />
              <div>{children}</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BaseLayout;
