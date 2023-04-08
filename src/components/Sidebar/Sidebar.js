import styles from "./sidebar.module.scss";
import { ReactComponent as Logo } from "../../assets/Logo.svg";
import { SelectArrowsIcon } from "../Icons";
import React from "react";
import { navItemsTop, navItemsBottom } from "../../constants";
import avatar from "../../assets/Avatar.png";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <Logo />
      </div>
      <div className={`${styles.navContainer} d-flex`}>
        <div className={styles.navigation}>
          {navItemsTop.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={`${styles.navItem} d-flex align-i-center`}
            >
              {React.createElement(item.icon)}
              <span className={styles.name}>{item.name}</span>
              {item.num && <span className={styles.number}>{item.num}</span>}
            </NavLink>
          ))}
        </div>
        <div className={`${styles.navigation} nav-bottom`}>
          {navItemsBottom.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={`${styles.navItem} d-flex align-i-center`}
            >
              {React.createElement(item.icon)}
              <span className={styles.name}>{item.name}</span>
              {item.num && <span className={styles.number}>{item.num}</span>}
            </NavLink>
          ))}
          <div className={styles.account}>
            <div className={`${styles.avatar} d-flex`}>
              <div className="d-flex align-i-center">
                <img alt="avatar" src={avatar} />
                <div>
                  <div className={styles.name}>Frankie Sullivan</div>
                  <div className={styles.label}>@frankie</div>
                </div>
              </div>
              <SelectArrowsIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
