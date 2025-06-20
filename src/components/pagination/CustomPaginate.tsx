import React, { useEffect } from 'react';
import styles from './CustomPaginate.module.scss';
import { getPaginationRange } from './utils/pagination';


interface CustomPaginateProps {
  currentPage: number;
  totalPageNumbers: number;
  onPageChange: (page: number) => void;
  maxVisiblePages?: number;
}

const CustomPaginate: React.FC<CustomPaginateProps> = ({
  currentPage,
  totalPageNumbers,
  onPageChange,
  maxVisiblePages = 5,
}) => {
  const url = new URL(window.location.href);
  const pageNumbers = getPaginationRange(currentPage, totalPageNumbers, maxVisiblePages);
  console.log(url.searchParams)
  useEffect(function syncPageNumber() {

  })
  return (
    <div className={styles.pagination}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.paginationButton}
      >
        Previous
      </button>

      {pageNumbers.map((number, idx) => (
        <React.Fragment key={idx}>
          {number === '...' ? (
            <span className={styles.paginationEllipsis}>...</span>
          ) : (
            <button
              onClick={() => onPageChange(number as number)}
              className={`${styles.paginationButton} ${currentPage === number ? styles.active : ''}`}
            >
              {number}
            </button>
          )}
        </React.Fragment>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPageNumbers}
        className={styles.paginationButton}
      >
        Next
      </button>
    </div>
  );
};

export default CustomPaginate;
