import React from 'react';

const Header = () => {
    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid w-75 mx-auto">
          <a className="navbar-brand logo me-5" href="#">Logo</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="index.html">Paid Total: 0</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        
    );
};

export default Header;