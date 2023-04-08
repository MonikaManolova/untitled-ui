import styles from "./progressBar.module.scss";

const ProgressBar = (props) => (
  <div className={styles.wrapper}>
    <div className={styles.progress} style={{ width: props.width }} />
  </div>
);

export default ProgressBar;
