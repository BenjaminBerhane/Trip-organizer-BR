import { createBrowserRouter } from "react-router-dom";
import TripView from "./pages/TripView";
import App from "./App";
import TripForm from "./components/TripForm/TripForm";
// import TripItem from "./components/TripItem";
// import TripList from "./components/TripList/TripList";
import AllTripsView from "./pages/AllTripsView";
// import { handleTripSubmission } from "./utils/tripHandlers";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index:true,
        element: <h1>Home</h1>
      },
      {
        path:"/addtrip",
        element: <TripForm />,
      },
      {
        path: "/alltripsview/",
        element: <AllTripsView />,
      },
      {
        path: "/tripsview/:tripId",
        element: <TripView />
      },
      {
        path: "*",
        element: <h1>404</h1>,
      },
    ],
  },
]);

export default router