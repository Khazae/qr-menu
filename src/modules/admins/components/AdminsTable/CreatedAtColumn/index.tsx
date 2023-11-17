import Table from "../../../../../common/components/Table";
import classNames from "classnames";
import dayjs from "dayjs";
import styles from "./styles.module.css";

interface Props {
  createdAt?: string;
}

const CreatedAtColumn = ({ createdAt }: Props) => {
  const dateTime = dayjs(createdAt);

  return (
    <Table.Cell className={styles.wrapper}>
      <i className={classNames("bx bx-calendar", styles.icon)} />
      <span className={styles.date}>{dateTime.format("DD MMM YYYY")}</span>
      <i className={classNames("bx bx-time-five", styles.icon)} />
      <span>{dateTime.format("HH:mm")}</span>
    </Table.Cell>
  );
};

export default CreatedAtColumn;
