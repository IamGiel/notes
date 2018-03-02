import React from "react";

const Navbar = () => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
          <a className="navbar-brand" href="https://www.linkedin.com/in/gel-d-b8314556/">
            FH-V2
          </a>
        <form className="navbar-form navbar-left">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search Article" />
          </div>
          <button type="submit" className="btn btn-default">
            fresh news
          </button>
        </form>
      </div>
    </div>
  </nav>
);

export default Navbar;
