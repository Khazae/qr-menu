import Table from "..";
import styles from "./styles.module.css";

interface Props {
  id: string;
}

const TableIdCell = ({ id }: Props) => {
  //   const handleCopy = () => {
  //     navigator.clipboard.writeText(id);
  //     showSuccessMessage("Скопировано");
  //   };

  return (
    <Table.Cell className={styles.wrapper}>
      {/* <span>{getShortIdentifier(id)}</span> */}
      <span>{id}</span>
    </Table.Cell>
  );
};

export default TableIdCell;
