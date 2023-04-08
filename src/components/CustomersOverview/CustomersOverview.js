import { useState, useEffect } from "react";
import styles from "./customersOverview.module.scss";
import Metric from "../Metric/Metric";
import Multiselect from "../Multiselect/Multiselect";
import Search from "../Search/Search";
import CheckedElement from "../CheckedElement/CheckedElement";
import Table from "../Table/Table";
import { metricAvatars, filters } from "../../constants";
import { data } from "../../data";

const CustomersOverview = () => {
  const [customers, setCustomers] = useState();
  const [activeCategories, setActiveCategories] = useState(["All time", "US"]);

  const isCategoryActive = (item) => {
    return !!activeCategories.find((el) => el === item);
  };

  // Check and uncheck dropdown element
  // If status is checked filter data
  const toggleElement = (item) => {
    const isStatus = item === "Customer" || item === "Churned";
    if (isCategoryActive(item)) {
      const filteredElements = activeCategories.filter((el) => el !== item);
      setActiveCategories([...filteredElements]);
      isStatus && filterbyStatus([...filteredElements]);
    } else {
      setActiveCategories([...activeCategories, item]);
      isStatus && filterbyStatus([...activeCategories, item]);
    }
  };

  const filterbyStatus = (categories) => {
    const filteredData = data.filter((customer) =>
      categories.find((el) => el === customer.status)
    );
    setCustomers(filteredData.length !== 0 ? filteredData : data);
  };

  // Ascending (a - z) sorting
  useEffect(() => {
    data.sort((a, b) => (a.name > b.name ? 1 : -1));
    setCustomers(data);
  }, []);

  return (
    <div>
      <div className={`${styles.metrics} d-flex`}>
        <Metric name="Members" value="2,420" badgePercentage="20%" />
        <Metric name="Total customers" value="1,210" badgePercentage="15%" />
        <Metric name="Active now" value="316" avatars={metricAvatars} />
      </div>
      <div
        className={`${styles.filtersWrapper} d-flex align-i-center justify-c-between`}
      >
        <Multiselect
          text="More filters"
          activeCategories={activeCategories}
          toggleElement={toggleElement}
        >
          <div className={styles.dropdown}>
            <CheckedElement
              isCategoryActive={isCategoryActive}
              element="All time"
              onClick={() => toggleElement("All time")}
            />
            <div className={styles.label}>Location</div>
            {filters.locations.map((location, index) => (
              <CheckedElement
                key={index}
                isCategoryActive={isCategoryActive}
                element={location}
                onClick={() => toggleElement(location)}
              />
            ))}
            <div className={styles.label}>Status</div>
            {filters.statuses.map((status, index) => (
              <CheckedElement
                key={index}
                isCategoryActive={isCategoryActive}
                element={status}
                onClick={() => toggleElement(status)}
              />
            ))}
          </div>
        </Multiselect>
        <Search />
      </div>
      <div className={styles.tableWrapper}>
        <Table customers={customers || data} />
      </div>
    </div>
  );
};

export default CustomersOverview;
