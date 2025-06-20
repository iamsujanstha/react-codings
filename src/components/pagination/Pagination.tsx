import { useCallback, useMemo, useState } from "react";
import CustomPaginate from "./CustomPaginate";
import { getCombinedSubscribers, SubscriberListCols } from "./tableData"
import { validatePageNumber } from "./utils/pagination";
import styles from './Pagination.module.scss'

const PAGE_SIZE = 10;
const Pagination = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const tableData = getCombinedSubscribers();
  const totalPageNumbers = Math.ceil(tableData.length / PAGE_SIZE);

  const paginate = useCallback(
    (page: number) => {
      const validated = validatePageNumber(page, PAGE_SIZE, tableData.length);
      setPageNumber(validated);
    },
    [tableData.length]
  );

  const currentItems = useMemo(() => {
    const start = (pageNumber - 1) * PAGE_SIZE;
    return tableData?.slice(start, start + PAGE_SIZE)
  }, [pageNumber, tableData]);

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            {SubscriberListCols.map(item => (
              <th key={item.field}>{item.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems?.map((subscriber) => (
            <tr key={subscriber.id}>
              <td>{subscriber.name}</td>
              <td>{subscriber.email}</td>
              <td>{subscriber.plan}</td>
              <td>{subscriber.status}</td>
              <td>{subscriber.expiresOn.toLocaleDateString()}</td>
              <td>{subscriber.joinDate.toLocaleDateString()}</td>
              <td>{subscriber.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <CustomPaginate
        currentPage={pageNumber}
        totalPageNumbers={totalPageNumbers}
        onPageChange={paginate}
      />
    </div>
  )
}

export default Pagination