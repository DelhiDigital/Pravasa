import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import AboutPage from "./pages/AboutPage/AboutPage"
import ErrorPage from "./pages/ErrorPage"
import ServiceDetail from "./pages/ServiceDetail/ServiceDetails"
import ContactPage from "./pages/ContactPage/ContactPage"
import TestimonialsPage from "./pages/TestimonialsPage/TestimonialsPage"


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
    path: "/services/:serviceId",
    element: <ServiceDetail />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/testimonials",
    element: <TestimonialsPage />,
    errorElement: <ErrorPage />,
  },
])

const Router = () => {
  return <RouterProvider router={router} />
}

export default Router
