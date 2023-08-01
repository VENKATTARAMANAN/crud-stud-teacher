import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceLaughWink,
  faBell,
  faEnvelope,
  faCircleUser,
  faMagnifyingGlass,
  faGaugeHigh,
  faChartLine,
  faTable,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import DashboardCards from "../Components/DashboardCards";
import Dashboard from "../Components/Dashboard";

const Mainpage = ({children}) => {
  return (
    <div>
      <nav className="flex-nav">
        <div className="nav-left flex-nav">
          {/* <div className="bars image" onClick={()=>}>
          <FontAwesomeIcon icon={faBars} />
          </div> */}
          <div className="laugh-img">
            <FontAwesomeIcon icon={faFaceLaughWink} />
          </div>
          <div>Sp Admin</div>
        </div>
        <div className="nav-middle flex-nav">
          <input type="text" placeholder="Search" className="search" />
          <div className="image">
            {" "}
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
        <div className="nav-right flex-nav">
          <div className="image">
            <FontAwesomeIcon icon={faBell} />
            <span className="badge ">5</span>
          </div>
          <div className="image">
            {" "}
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="badge">5</span>
          </div>
          <div>Venkat</div>
          <div className="image">
            <FontAwesomeIcon icon={faCircleUser} />
          </div>
        </div>
      </nav>

      {/* ----------------Sidebar----------------------- */}

      <div className="sidebar">
        <div className="shortcut-links">
          <div className="side">
            <Link className="side-nav" to="/dashboard">
              <FontAwesomeIcon icon={faGaugeHigh} /> <span>Dashboard</span>
            </Link>
          </div>
          <div className="side">
            <Link className="side-nav" to="/student">
              <FontAwesomeIcon icon={faChartLine} /> <span>Students</span>
            </Link>
          </div>
          <div className="side">
            <Link className="side-nav" to="/teacher">
              <FontAwesomeIcon icon={faTable} /> <span>Teachers</span>
            </Link>
          </div>
        </div>
      </div>
      <main className="main">
       {children}
      </main>
    </div>
  );
};

export default Mainpage;
