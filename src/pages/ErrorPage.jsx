import { useRouteError, Link } from "react-router-dom"
import "../components/ErrorPage.css"

const ErrorPage = () => {
  const error = useRouteError()

  return (
    <div className="error-page">
      <div className="error-container">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="error-message">{error.statusText || error.message || "Page not found"}</p>
        <Link to="/" className="btn btn-primary">
          Return to Home
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage
