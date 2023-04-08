import styles from "./pagination.module.scss";

const Pagination = ({
  totalItems,
  itemsPerPage,
  setCurrentPage,
  currentPage,
  ...props
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div
      {...props}
      className={`${styles.pagination} d-flex align-i-center justify-c-between`}
    >
      <div
        className={`${styles.button} btn-icon-secondary`}
        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
      >
        Previous
      </div>
      <div>
        Page {currentPage} of {pages.length}{" "}
      </div>
      <div
        className={`${styles.button} btn-icon-secondary`}
        onClick={() =>
          currentPage < pages.length && setCurrentPage(currentPage + 1)
        }
      >
        Next
      </div>
    </div>
  );
};

export default Pagination;
