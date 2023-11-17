import classNames from "classnames";
import Table from "..";
import styles from "./styles.module.css";
import BoxIcon from "../../BoxIcon";

interface Props {
  isEditable?: boolean;
  isDeletable?: boolean;
  onEdit?: () => void;
  onDelete?: () => void;
}

const TableActionsCell = ({
  isEditable = false,
  isDeletable = false,
  onEdit = () => ({}),
  onDelete = () => ({}),
}: Props) => {
  return (
    <Table.Cell className={styles.wrapper}>
      {isEditable && (
        <BoxIcon
          icon="bx-edit-alt"
          className={classNames(styles.icon, styles.editIcon)}
          onClick={onEdit}
        />
      )}
      {isDeletable && (
        <BoxIcon
          icon="bx-trash"
          className={classNames(styles.icon, styles.deleteIcon)}
          onClick={onDelete}
        />
      )}
    </Table.Cell>
  );
};

export default TableActionsCell;
