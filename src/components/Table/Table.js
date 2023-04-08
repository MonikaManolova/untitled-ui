import { useState } from "react";
import styles from "./table.module.scss";
import { ArrowDownIcon } from "../Icons";
import Checkbox from "../Checkbox/Checkbox";
import Avatars from "../Avatars/Avatars";
import ProgressBar from "../ProgressBar/ProgressBar";
import Pagination from "../Pagination/Pagination";
import { TrashIcon, EditIcon } from "../Icons";

const Table = ({ customers }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination calculations
  const lastItemIndex = currentPage * 7;
  const firstItemIndex = lastItemIndex - 7;
  const currentItems = customers.slice(firstItemIndex, lastItemIndex);

  return (
    <div className={styles.tableWrapper} style={{ overflowX: "auto" }}>
      <div className={styles.table}>
        {/* TABLE HEADER - - - - - */}
        <div className={`${styles.row} ${styles.header}`}>
          <div className={`${styles.col} ${styles.headerCol}`}>
            <Checkbox minusicon="minusicon" />
            <span>Company</span>
            <ArrowDownIcon />
          </div>
          <div className={`${styles.col} ${styles.headerCol}`}>
            <span>Status</span>
          </div>
          <div className={`${styles.col} ${styles.headerCol}`}>
            <span>About</span>
          </div>
          <div className={`${styles.col} ${styles.headerCol}`}>
            <span>Users</span>
          </div>
          <div className={`${styles.col} ${styles.headerCol}`}>
            <span>License use</span>
          </div>
          <div className={`${styles.headerCol}`}>
            <span />
          </div>
        </div>

        {currentItems.map((item, index) => (
          <div key={index} className={`${styles.row} ${styles.dataRow}`}>
            {/* COMPANY - - - - - */}
            <div className={`${styles.col}`}>
              <Checkbox />
              <img
                width="40xpx"
                height="40px"
                className={styles.logo}
                alt="logo"
                src={item.logo}
              />
              <div style={{ marginLeft: "12px" }}>
                <div className={styles.name}>{item.name}</div>
                <div className={styles.secondaryText}>{item.website}</div>
              </div>
            </div>
            {/* STATUS - - - - - */}
            <div className={`${styles.col}`}>
              <div
                className={`${styles.label} ${
                  item.status === "Churned" && styles.churned
                }`}
              >
                {item.status}
              </div>
            </div>
            {/* ABOUT - - - - - */}
            <div className={`${styles.col}`}>
              <div style={{ width: "100%" }}>
                <div style={{ fontWeight: "400" }} className={styles.name}>
                  {item.about}
                </div>
                <div className={styles.secondaryText}>{item.aboutDesc}</div>
              </div>
            </div>
            {/* USERS - - - - - */}
            <div className={`${styles.col}`}>
              <Avatars
                avatars={item.users}
                avatarsNum={item.undisplayedUsers}
              />
            </div>
            {/* LICENSES - - - - - */}
            <div className={`${styles.col}`}>
              <ProgressBar width={item.progress} />
            </div>
            {/* ACTIONS - - - - - */}
            <div className={`${styles.col} ${styles.actionsWrapper}`}>
              <div>
                <TrashIcon />
              </div>
              <div>
                <EditIcon />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        totalItems={customers.length}
        itemsPerPage={7}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Table;
