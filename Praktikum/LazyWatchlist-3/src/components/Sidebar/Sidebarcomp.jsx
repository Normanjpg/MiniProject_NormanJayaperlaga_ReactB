import React, { useState } from "react";
import "./Sidebarcomp.css";
import { NavLink } from "react-router-dom";

const Sidebarcomp = ({isExpanded, setExpandState}) => {
  return (
    <div
      className={
        isExpanded
          ? "side-nav-container"
          : "side-nav-container side-nav-container-NX"
      }
    >
      <div className="nav-upper">
        <div className="nav-heading">
          {isExpanded ? (
            <div className="nav-brand">
              <img
                alt="brand logo"
                src="../../src/assets/icons/logo.svg"
                className="rounded-circle"
              />
              LazyWatchLists
            </div>
          ) : (
            <div className="nav-brand">
              <img
                alt="brand logo"
                src="../../src/assets/icons/logo.svg"
                className="rounded-circle"
              />{" "}
            </div>
          )}
          <button
            className={
              isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
            }
            onClick={() => setExpandState(!isExpanded)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="nav-menu">
          <NavLink
          to="/"
            href="#"
            className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
          >
            <img src="../../src/assets/iconsvg/home.svg" alt="" srcSet="" />
            {isExpanded && <p>Home</p>}
          </NavLink>
          <NavLink
          to="/movie"
            href="#"
            className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
          >
            <img src="../../src/assets/iconsvg/movie.svg" alt="" srcSet="" />
            {isExpanded && <p>Movie</p>}
          </NavLink>
          <NavLink
          to="/series"
            href="#"
            className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
          >
            <img src="../../src/assets/iconsvg/series.svg" alt="" srcSet="" />
            {isExpanded && <p>Series</p>}
          </NavLink>
          <NavLink
          to="/savedwatchlist"
            href="#"
            className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
          >
            <img
              src="../../src/assets/iconsvg/Mplaylist.svg"
              alt=""
              srcSet=""
            />
            {isExpanded && <p>Saved Watchlists</p>}
          </NavLink>

          {isExpanded ? (<span className="nav-span"></span>) : (<span className="nav-span-NX"></span>)}


          <NavLink
          to="/createwatchlist"
            className={isExpanded ? "menu-item-add" : "menu-item-add menu-item-add-NX"}
          >
            <img src="../../src/assets/iconsvg/createwatchlist.svg" alt="" />
            {isExpanded && <p>Create Watchlist</p>}
          </NavLink>
        </div>

        <div className="nav-footer">
          {isExpanded && (
            <div className="nav-details">
              <img
                className="nav-footer-avatar"
                src="../../src/assets/iconsvg/profile.svg"
                alt=""
              />
              <div className="nav-footer-info">
                <p className="nav-footer-user-name">Michael</p>
                <p className="nav-footer-user-position">guest account</p>
              </div>
              <img
                className="nav-footer-setting"
                src="../../src/assets/icons/settings.svg"
                alt=""
              />
            </div>
          )}
          <img
            className="logout-icon"
            src="../../src/assets/icons/logout.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebarcomp;
