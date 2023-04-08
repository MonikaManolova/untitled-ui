import styles from "./projectsOverview.module.scss";
import Avatars from "../Avatars/Avatars";
import Search from "../Search/Search";
import Multiselect from "../Multiselect/Multiselect";
import CheckedElement from "../CheckedElement/CheckedElement";
import IconButton from "../IconButton/IconButton";
import Pagination from "../Pagination/Pagination";
import { GridIcon, ListIcon } from "../Icons";
import { projectsData } from "../../data";
import { projectsFilters } from "../../constants";
import { useState } from "react";

const ProjectsOverview = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategories, setActiveCategories] = useState([]);

  const isCategoryActive = (item) => {
    return !!activeCategories.find((el) => el === item);
  };

  const toggleElement = (item) => {
    if (isCategoryActive(item)) {
      const filteredElements = activeCategories.filter((el) => el !== item);
      setActiveCategories([...filteredElements]);
    } else {
      setActiveCategories([...activeCategories, item]);
    }
  };

  const lastItemIndex = currentPage * 6;
  const firstItemIndex = lastItemIndex - 6;
  const currentItems = projectsData.slice(firstItemIndex, lastItemIndex);

  return (
    <div>
      <div
        className={`${styles.filter} d-flex align-i-center justify-c-between`}
      >
        {/* FILTERS - - - - - */}
        <div className={`${styles.buttonsWrapper} d-flex`}>
          <IconButton
            className={`${styles.iconButton} ${styles.activeLayout} d-flex btn-icon-secondary`}
          >
            <GridIcon />
          </IconButton>
          <IconButton
            className={`${styles.iconButton} d-flex btn-icon-secondary`}
          >
            <ListIcon />
          </IconButton>
          <Multiselect
            toggleElement={toggleElement}
            activeCategories={activeCategories}
            text="Filters"
          >
            {projectsFilters.map((filter, index) => (
              <CheckedElement
                key={index}
                isCategoryActive={isCategoryActive}
                element={filter}
                onClick={() => toggleElement(filter)}
              />
            ))}
          </Multiselect>
        </div>
        <Search />
      </div>
      {/* PROJECTS - - - - - */}
      <div className={styles.projectsWrapper}>
        {currentItems.map((project, index) => (
          <div
            key={index}
            className={`${styles.project} d-flex justify-c-between`}
          >
            <div>
              <div className={`${styles.header} d-flex justify-c-between`}>
                <div style={{ paddingRight: "10px" }}>
                  <div className={styles.title}>{project.name}</div>
                  <div className={styles.description}>
                    {project.description}
                  </div>
                </div>
                <div
                  className={`${styles.status} ${
                    project.status === "Upcoming" && styles.upcoming
                  } d-flex align-i-center`}
                >
                  <span></span>
                  {project.status}
                </div>
              </div>
              <Avatars
                avatars={project.teamMembers}
                avatarsNum={project.undisplayedUsers}
              />
            </div>

            <div className={styles.footer}>
              <div className={`${styles.company} d-flex align-i-center`}>
                <img
                  width="24"
                  height="24"
                  alt="company-logo"
                  src={project.logo}
                />
                <div className={styles.description}>({project.website})</div>
              </div>
              <div className="d-flex justify-c-between">
                <div className={styles.description}>Due date</div>
                <div className={styles.date}>{project.dueDate}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pagination
        totalItems={projectsData.length}
        itemsPerPage={6}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        style={{ padding: "24px 0" }}
      />
    </div>
  );
};

export default ProjectsOverview;
