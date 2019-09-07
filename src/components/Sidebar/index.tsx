import React, { useState } from "react";
import logo from "#/assets/logo.png";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { StoreState } from "#/engine/types";
import "./index.scss";

interface SidebarProps {
  active: boolean;
}

const Sidebar = (props: SidebarProps) => {
  return (
    <div className={"main-sidebar " + (props.active ? "active" : "")}>
      <section className="sidebar">
        <div className="user-panel">
          <div className="ulogo">
            <a href="/">
              <span>
                <b>ТвГУ</b> Расписание
              </span>
            </a>
          </div>

          <div className="image">
            <img src={logo} className="rounded-circle" alt="TSU" />
          </div>
        </div>

        <ul className="sidebar-menu tree">
          <li className="nav-divider" />
          <li className="header">
            <i className="fas fa-th" />
            <span className="ml-2">Факультеты \ Группы</span>
          </li>
          <li>
            <Link to="/" className="treeview-link">
              <span>Факультет ПМиК</span>
              <span className="pull-right-container">
                <i className="fas fa-angle-right pull-right" />
              </span>
            </Link>

            <div className="sublinks">
              <span className="sublinks-title">1 курс</span>
              <Link to="/" className="treeview-sublink">
                11 группа (ПИ)
              </Link>
              <Link to="/" className="treeview-sublink">
                14 группа (ПМиИ)
              </Link>
              <Link to="/" className="treeview-sublink">
                16 группа (ФИИТ)
              </Link>
            </div>
            <div className="sublinks">
              <span className="sublinks-title">2 курс</span>
              <Link to="/" className="treeview-sublink">
                11 группа (ПИ)
              </Link>
              <Link to="/" className="treeview-sublink">
                14 группа (ПМиИ)
              </Link>
              <Link to="/" className="treeview-sublink">
                16 группа (ФИИТ)
              </Link>
            </div>
          </li>
          <li>
            <Link to="/" className="treeview-link">
              <span>Факультет ИстФак</span>
              <span className="pull-right-container">
                <i className="fas fa-angle-right pull-right" />
              </span>
            </Link>
          </li>
          <li>
            <Link to="/" className="treeview-link">
              <span>Факультет МатФак</span>
              <span className="pull-right-container">
                <i className="fas fa-angle-right pull-right" />
              </span>
            </Link>
          </li>

          <li className="nav-divider" />
          <li className="header">
            <i className="fas fa-cog" />
            <span className="ml-2">Настройки</span>
          </li>
        </ul>
      </section>
    </div>
  );
};

const mapStateToProps = (store: StoreState) => {
  return {};
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Sidebar);
