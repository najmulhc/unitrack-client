import { createBrowserRouter } from "react-router-dom";
import ReleaseHome from "../release/ReleaseHome";
import Courses from "../release/page/Courses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ReleaseHome />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
]);

export default router;
