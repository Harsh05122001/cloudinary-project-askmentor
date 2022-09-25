import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-5">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Upload Video
        </Link>
        <div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="navbar-brand" to="/display">
                View Uploaded Videos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;