import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "@/app/routers/public.routes";

const routes = () => createBrowserRouter([...publicRoutes]);

export default routes;