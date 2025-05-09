import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import AboutPage from "./pages/AboutPage"
import ErrorPage from "./pages/ErrorPage"
import ServiceDetailPage from "./pages/ServicePage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/services/:slug",
    element: <ServiceDetailPage />,
    errorElement: <ErrorPage />,
  },
])

const Router = () => {
  return <RouterProvider router={router} />
}

export default Router
