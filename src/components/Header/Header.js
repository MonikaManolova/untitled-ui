import styles from "./header.module.scss";
import IconButton from "../IconButton/IconButton";
import Tab from "../Tab/Tab";
import { PlusIcon } from "../Icons";
import React from "react";

const Header = (props) => (
  <div>
    <div className="d-flex align-i-center justify-c-between">
      {/* PAGE TITLE - - - - - */}
      <div className={styles.title}>{props.title}</div>
      {/* ACTIONS - - - - - */}
      <div className={`${styles.actions} d-flex`}>
        <IconButton
          style={{ marginRight: "12px" }}
          className={`${styles.secondary} btn-icon-secondary`}
        >
          {React.createElement(props.icon, {
            width: "20px",
            height: "20px",
          })}
          <span>{props.secondaryText}</span>
        </IconButton>
        <IconButton onClick={props.onClick} className="btn-icon-primary">
          <PlusIcon />
          <span>{props.addText}</span>
        </IconButton>
      </div>
    </div>
    {/* TABS - - - - - */}
    <div className={`${styles.tabsWrapper} d-flex`}>
      {props.tabs.map((tab, index) => (
        <Tab
          isActive={props.activeTab === tab}
          text={tab}
          key={index}
          onClick={() => props.setActiveTab(tab)}
        />
      ))}
    </div>
  </div>
);

export default Header;
