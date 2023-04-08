import styles from "./textarea.module.scss";

const Teaxtarea = (props) => (
  <div {...props}>
    <div className={styles.label}>{props.label}</div>
    <textarea
      className={styles.textarea}
      rows="3"
      placeholder={props.placeholder}
    />
  </div>
);

export default Teaxtarea;
