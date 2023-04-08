import styles from "./checkbox.module.scss";
const Checkbox = (props) => (
  <input
    {...props}
    className={`${styles.input} ${
      props.minusicon === "minusicon" && styles.minusicon
    }`}
    type="checkbox"
    name="checkbox"
  />
);

export default Checkbox;
