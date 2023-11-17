import classNames from "classnames";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";
import TableCell from "./TableCell";
import TableEmpty from "./TableEmpty";
import TableLoading from "./TableLoading";
import TableError from "./TableError";
import TableDateTimeCell from "./TableDateTimeCell";
import styles from "./styles.module.css";
import TableIdCell from "./TableIdCell";
import TableActionsCell from "./TableActionsCell";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const Table = ({ children, className }: Props) => {
  return (
    <div className={classNames(styles.wrapper, className)}>{children}</div>
  );
};

Table.Header = TableHeader;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.IdCell = TableIdCell;
Table.Empty = TableEmpty;
Table.Loading = TableLoading;
Table.Error = TableError;
Table.DateTimeCell = TableDateTimeCell;
// Table.CellWithCopy = TableCellWithCopy;
Table.ActionsCell = TableActionsCell;
// Table.Pagination = TablePagination;

export default Table;
