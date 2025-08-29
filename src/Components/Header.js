import './Header.css';

function Header({ setActiveMenu }) {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar shadow-sm">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-0 d-flex gap-2 align-items-center flex-wrap">
            <li className="nav-item">
              <button className="btn btn-sm btn-projects nav-btn" onClick={() => setActiveMenu("Project")}>Projects</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-sm btn-fullstack nav-btn" onClick={() => setActiveMenu("Fullstack")}>Fullstack</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-sm nav-btn btn-secondary" onClick={() => setActiveMenu("Dotnet")}>Dot NET Core</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-sm nav-btn btn-success" onClick={() => setActiveMenu("Springboot")}>Spring Boot</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-sm nav-btn btn-warning" onClick={() => setActiveMenu("Node")}>Django</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-sm nav-btn btn-danger" onClick={() => setActiveMenu("DSA")}>DSA</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-sm nav-btn btn-dark" onClick={() => setActiveMenu("SQL")}>SQL Server</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-sm btn-aws nav-btn" onClick={() => setActiveMenu("AWS")}>AWS</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-sm btn-fullstack nav-btn" onClick={() => setActiveMenu("Azure")}>Azure</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-sm nav-btn btn-warning" onClick={() => setActiveMenu("DevOps")}>DevOps</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-sm nav-btn btn-info" onClick={() => setActiveMenu("React")}>React</button>
            </li>
            <li className="nav-item">
              <button className="btn btn-sm nav-btn btn-primary" onClick={() => setActiveMenu("Next")}>Next</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
