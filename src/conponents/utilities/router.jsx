import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import About from "../About/About";
import AllTeatment from "../AllTreatment/AllTeatment";
import MyAppointment from "../MyAppointment/MyAppointment";
import Profile from "../Profile/Profile";
import Details from "../Details/Details";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        loader: async () => {
          const servicesRes = await fetch("services.json");
          const servicesData = await servicesRes.json();

          const feedbackRes = await fetch("happyClient.json");
          const feedbackData = await feedbackRes.json();

          return { servicesData, feedbackData };
        },
        element: <Home></Home>,
      },
      {
        path: "/alltreatment",
        element: <AllTeatment></AllTeatment>,
        loader: () => fetch("services.json"),
      },
      {
        path: "/myappointment",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/details/:id",
        element: (
          <PrivetRoute>
            <Details></Details>
          </PrivetRoute>
        ),
        loader: async ({ params }) => {
          const res = await fetch("/services.json");
          const data = await res.json();
          // single data view
          const singleData = data.find((d) => d.id === parseInt(params.id));
          return singleData;
        },
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
