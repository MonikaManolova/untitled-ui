import styles from "./search.module.scss";
import { SearchIcon } from "../Icons";

const Search = () => (
  <div className={`${styles.searchWrapper} d-flex align-i-center`}>
    <SearchIcon />
    <input placeholder="Search" className={styles.input} />
  </div>
);

export default Search;
