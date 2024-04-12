import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// import Login from "./routes/Login.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/credchainmd-layouts/",
//     element: <App />,
//     children: [
//       {
//         path: "/credchainmd-layouts/",
//         element: <Login />,
//       },
//     ],
//   },
// ]);

import App from "./App.jsx";
import "./index.css";

import { DataProvider } from "./contexts/DataProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <App />
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>
);
