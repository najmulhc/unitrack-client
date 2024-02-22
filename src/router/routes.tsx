import { createBrowserRouter } from "react-router-dom";
import ReleaseHome from "../release/ReleaseHome";
import Courses from "../release/page/Courses";
import Teachers from "../release/page/Teachers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ReleaseHome />,
  },
  {
    path: "/courses",
    element: <Courses />,
  },
  {
    path: "/teachers",
    element: <Teachers />,
  },
]);

export default router;
