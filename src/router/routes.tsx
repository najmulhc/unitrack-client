import { createBrowserRouter } from "react-router-dom";
import ReleaseHome from "../release/ReleaseHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ReleaseHome />,
  },
]);

export default router;
