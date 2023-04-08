import styles from "./badge-metric.module.scss";
import { ArrowUp } from "../Icons";

const BadgeMetric = (props) => (
  <div className={`${styles.badge} d-flex align-i-center`}>
    <ArrowUp />
    <span>{props.badgePercentage}</span>
  </div>
);

export default BadgeMetric;
