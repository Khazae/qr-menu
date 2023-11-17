import dayjs from "dayjs";
import styles from "./styles.module.css";
import Table from "..";

interface Props {
  value?: string;
}

const TableDateTimeCell = ({ value }: Props) => {
  const dateTime = dayjs(value);

  return (
    <Table.Cell className={styles.wrapper}>
      {/* <BoxIcon icon="bx-calendar" className={styles.icon} /> */}
      <span className={styles.date}>{dateTime.format("DD MMM YYYY")}</span>
      {/* <BoxIcon icon="bx-time-five" className={styles.icon} /> */}
      <span>{dateTime.format("HH:mm")}</span>
    </Table.Cell>
  );
};

export default TableDateTimeCell;
