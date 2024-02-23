import { createBrowserRouter } from "react-router-dom";
import ReleaseHome from "../release/page/ReleaseHome";
import Courses from "../release/page/Courses";
import Teachers from "../release/page/Teachers";
import SingleCourse from "../release/page/SingleCourse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ReleaseHome />,
  },
  {
    path: "/courses",
    element: <Courses />,
    children: [],
  },
  {
    path: "/teachers",
    element: <Teachers />,
  },
  {
    path: "/course/:courseId",
    element: <SingleCourse />,
  },
]);

export default router;
