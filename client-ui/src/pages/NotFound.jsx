import { Link } from "react-router-dom";

import "../css/NotFound.css";

function NotFound() {

    return (

        <div className="notfound-page">

            <div className="notfound-content">

                <h1>404</h1>

                <h2>Page Not Found</h2>

                <p>
                    The page you are looking for doesn't exist or has been moved.
                </p>

                <Link
                    to="/"
                    className="home-btn"
                >
                    Back to Home
                </Link>

            </div>

        </div>

    );
}

export default NotFound;