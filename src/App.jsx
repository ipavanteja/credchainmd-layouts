import { Routes, Route, Outlet } from "react-router-dom";
import Login from "./routes/Login";
import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Register from "./routes/Register";
import ForgetPassword from "./routes/ForgetPassword";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/credchainmd-layouts" element={<Outlet />}>
        <Route index element={<Login />} />
        <Route path="/credchainmd-layouts/login" element={<Login />} />
        <Route path="/credchainmd-layouts/register" element={<Register />} />
        <Route
          path="/credchainmd-layouts/forgot-password"
          element={<ForgetPassword />}
        />
        <Route element={<ProtectedRoute />}>
          <Route path="/credchainmd-layouts/home" element={<Home />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/credchainmd-layouts/profile" element={<Profile />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
