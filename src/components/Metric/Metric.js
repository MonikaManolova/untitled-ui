import styles from "./metric.module.scss";
import { DropdownIcon } from "../Icons";
import BadgeMetric from "../BadgeMetric/BadgeMetric";
import Avatars from "../Avatars/Avatars";

const Metric = (props) => (
  <div className={styles.metric}>
    <div
      className={`${styles.heading} d-flex align-i-center justify-c-between`}
    >
      <div className={styles.name}>{props.name}</div>
      <DropdownIcon />
    </div>
    <div
      className={`${styles.valueWrapper} d-flex align-i-center justify-c-between`}
    >
      <div className={styles.value}>{props.value}</div>
      {props.badgePercentage ? (
        <BadgeMetric badgePercentage={props.badgePercentage} />
      ) : (
        <Avatars avatars={props.avatars} />
      )}
    </div>
  </div>
);

export default Metric;
