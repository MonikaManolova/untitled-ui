import styles from "./tab.module.scss";

const Tab = (props) => (
  <div
    onClick={props.onClick}
    className={`${styles.tab} ${props.isActive && styles.active}`}
  >
    <div>{props.text}</div>
  </div>
);

export default Tab;
