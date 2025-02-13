import { createBrowserRouter } from "react-router-dom";
import TripView from "./pages/TripView";
import App from "./App";
import TripForm from "./components/TripForm";
// import TripItem from "./components/TripItem";
import TripList from "./components/TripList";
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
        path: "/trip/",
        element: <h1>Alla resor</h1>,
      },
      {
        path: "/tripsview/:tripId",
        element: <TripView />
      },
      {
        path: "/triplist",
        element: <TripList/>
      }
    ],
  },
]);

export default router