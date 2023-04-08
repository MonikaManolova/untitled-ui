import styles from "./button.module.scss";

const IconButton = (props) => (
  <div
    {...props}
    className={`${styles.buttonWrapper} ${props.className} d-flex align-i-center`}
  >
    {props.children}
  </div>
);

export default IconButton;
