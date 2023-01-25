import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./NavigatBar.css";

const Navigatbar = () => {
  return (
    <div>
      <div className="container">
        <form className="d-flex align-items-center ">
          <div className="nav-input-div">
            <input
              type="text"
              className="form-control"
              id="nav-input"
              placeholder="enter the service"
            />
          </div>
          <FontAwesomeIcon icon={faSearch} />
        </form>
      </div>
    </div>
  );
};

export default Navigatbar;
