import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PublicHomePage from "@/features/public-site/pages/PublicHomePage";
import CourseListWithLoading from "@/features/courses/CourseList";
import CourseDetailWithLoading from "@/features/courses/CourseDetail";
import PublicLayout from "@/app/layouts/PublicLayout";

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
        element: <CourseListWithLoading isLoading={false} />,
      },
      {
        path: "course/:id",
        element: <CourseDetailWithLoading isLoading={false} />,
      },
    ],
  },
]);

export default router;
