export const getPaginationRange = (
  currentPage: number,
  totalPages: number,
  maxVisiblePages = 5
): (number | string)[] => {
  const pageNumbers: (number | string)[] = [];

  if (totalPages <= maxVisiblePages) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i)
    }
  }
  else {
    const leftBound = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    const rightBound = Math.min(totalPages, leftBound + maxVisiblePages - 1);

    if (leftBound > 1) {
      pageNumbers.push(1);
      if (leftBound > 2) {
        pageNumbers.push('...')
      }
    }

    for (let i = leftBound; i <= rightBound; i++) {
      pageNumbers.push(i)
    }

    if (rightBound < totalPages) {
      if (rightBound < totalPages - 1) {
        pageNumbers.push('...')
      }
      pageNumbers.push(totalPages)
    }
  }

  return pageNumbers;
}

export const validatePageNumber = (
  currentPage: number,
  itemsPerPage: number,
  totalItems: number
): number => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  return Math.min(Math.max(1, currentPage), totalPages || 1)

}