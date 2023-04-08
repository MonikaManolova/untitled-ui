import styles from "./checkedElement.module.scss";
import { CheckIcon } from "../Icons";

const CheckedElement = ({ isCategoryActive, element, ...props }) => (
  <div
    {...props}
    className={`${styles.item} ${isCategoryActive(element) && styles.active}
          d-flex align-i-center justify-c-between`}
  >
    {element}
    {isCategoryActive(element) && <CheckIcon width="20px" />}
  </div>
);

export default CheckedElement;
