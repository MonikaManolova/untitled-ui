import styles from "./multiselect.module.scss";
import { FilterIcon, CloseIcon } from "../Icons";
import IconButton from "../IconButton/IconButton";
import { useState } from "react";

const Multiselect = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`${styles.buttonsWrapper} d-flex`}>
      {/* ACTIVE FILTERS - - - - - */}
      {props.activeCategories.length !== 0 &&
        props.activeCategories.map((category, index) => (
          <IconButton
            className={`${styles.labelButton} btn-icon-secondary color`}
            key={index}
            onClick={() => props.toggleElement(category)}
          >
            <span>{category}</span>
            <CloseIcon />
          </IconButton>
        ))}
      {/* DROPDOWN FILTERS - - - - - */}
      <div className={styles.dropdownWrapper}>
        <IconButton
          style={{ marginLeft: "auto" }}
          className="btn-icon-secondary"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FilterIcon />
          <span>{props.text}</span>
        </IconButton>
        {isOpen && <div className={styles.dropdown}>{props.children}</div>}
      </div>
    </div>
  );
};

export default Multiselect;
