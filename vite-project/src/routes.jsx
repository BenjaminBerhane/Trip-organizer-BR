import { createBrowserRouter } from "react-router-dom";
import App from "./App";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index:true,
        element: <h1>Home</h1>,
      },
      {
        path: "/trip/",
        element: <h1>Alla resor</h1>,
      },
      {
        path: "/tripsview/:id",
      }
    ],
  },
]);

export default router