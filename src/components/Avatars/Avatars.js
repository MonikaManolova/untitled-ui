import styles from "./avatars.module.scss";

const Avatars = (props) => (
  <div className={`${styles.avatarsWrapper} d-flex`}>
    {props.avatars.map((avatar, index) => (
      <img width="24px" height="24px" key={index} alt="avatar" src={avatar} />
    ))}
    {props.avatarsNum !== 0 && (
      <div className={`${styles.number}`}>+{props.avatarsNum}</div>
    )}
  </div>
);

export default Avatars;
