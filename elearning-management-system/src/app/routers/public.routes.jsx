import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicHomePage from "@/features/public-site/pages/PublicHomePage";
import courseService from "@/features/courses/service/course.service";
import CourseDetailWithLoading from "@/features/courses/CourseDetail";
import PublicLayout from "@/app/layouts/PublicLayout";
import PublicCoursePage from "@/features/courses/pages/PublicCoursePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <PublicHomePage />,
      },
      {
        path: "courses",
        element: <PublicCoursePage/>,
        loader: courseService.findAll,
      },
      {
        path: "courses/:id",
        element: <CourseDetailWithLoading/>,
      },
    ],
  },
  // { path: "/login", element: <LoginPage /> },
  // { path: "/register", element: <RegisterPage /> },
]);

export default router;
