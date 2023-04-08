import styles from "./inputGroup.module.scss";

const InputGroup = (props) => (
  <div {...props}>
    <div className={styles.label}>{props.label}</div>
    {!props.addon ? (
      <input className={styles.input} placeholder={props.placeholder} />
    ) : (
      <div className={`${styles.inputWithAddon} d-flex`}>
        <div className={`${styles.addon} d-flex align-i-center`}>
          {props.addon}
        </div>
        <input className={styles.input} placeholder={props.placeholder} />
      </div>
    )}
  </div>
);

export default InputGroup;
