import styles from "./message.module.scss";

const Message = (props) => (
  <div className={styles.messageWrapper}>
    <div className={styles.title}>
      {props.name} information is not available.
    </div>
    <div className={styles.subtext}>
      We are actively working to produce best experience for you.
    </div>
  </div>
);

export default Message;
