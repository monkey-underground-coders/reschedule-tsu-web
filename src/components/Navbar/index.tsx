import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./index.scss";
import { StoreState } from "#/engine/types";

export interface NavbarOwnProps {
  isSidebarActive: boolean;
  toggleSidebar: any;
}

type NavbarProps = NavbarOwnProps;

const Navbar = (props: NavbarProps) => {
  return (
    <header className="main-header">
      <nav
        className={"navbar navbar-static-top " + (props.isSidebarActive ? "sidebar-active" : "")}
      >
        <button
          className="btn sidebar-toggle"
          data-toggle="push-menu"
          onClick={props.toggleSidebar}
        >
          <i className="fas fa-bars" />
        </button>

        <div className="navbar-custom-menu pr-0">
          <div className="header-navbar-item header-navbar-item--user dropdown">
            <div data-toggle="dropdown" aria-expanded="false">
              <div className="navbar-custom-menu-user"></div>
            </div>

            <ul className="dropdown-menu scale-up"></ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  {},
)(Navbar);
