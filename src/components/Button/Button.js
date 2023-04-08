import styles from "./button.module.scss";

const Button = (props) => (
  <div {...props} className={`${styles.button} ${props.className}`}>
    {props.children}
  </div>
);

export default Button;
