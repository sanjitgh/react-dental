import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./conponents/utilities/router.jsx";
import AuthProvaider from "./conponents/AuthProvaider/AuthProvaider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvaider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvaider>
  </StrictMode>
);
