/* eslint-disable no-unused-vars */

export type PaginationComponentProps = {
  currentPage: number
  count: number
  onPageChange: (page: number) => void
  isMobile?: boolean
}
