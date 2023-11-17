import Table from "../../../../common/components/Table";
import { Admin } from "../../../../entities/admin";
import CreatedAtColumn from "./CreatedAtColumn";
import styles from "./styles.module.css";

interface Props {
  admins?: Admin[];
  loading?: boolean;
  error?: Error | null;
  //   onPageChange?: (page: number) => void;
}

const AdminsTable = ({
  admins = [],
  loading = false,
  error = null,
}: //   onPageChange = () => ({}),
Props) => {
  return (
    <>
      <Table>
        <Table.Header className={styles.row}>
          <Table.Cell>ID</Table.Cell>
          <Table.Cell>Имя</Table.Cell>
          <Table.Cell>Email</Table.Cell>
          <Table.Cell>Позиция</Table.Cell>
          <Table.Cell>Создано</Table.Cell>
          <Table.Cell>Обновлено</Table.Cell>
        </Table.Header>
        {loading && <Table.Loading />}
        {error && !loading && <Table.Error />}
        {admins.length === 0 && !loading && !error && (
          <Table.Empty text="Нет администаторов" />
        )}
        {!loading &&
          !error &&
          admins.map((admin) => (
            <Table.Row key={admin.id} className={styles.row}>
              <Table.IdCell id={String(admin.id)} />
              <Table.Cell>{admin.name}</Table.Cell>
              <Table.Cell>{admin.email}</Table.Cell>
              <Table.Cell>{admin.position}</Table.Cell>
              <CreatedAtColumn createdAt={admin.createdAt} />
              <CreatedAtColumn createdAt={admin.updatedAt} />
              <Table.ActionsCell
                isDeletable
                isEditable
                onEdit={() => {}}
                onDelete={() => {}}
              />
            </Table.Row>
          ))}
      </Table>
      {/* {!error && !loading && (
        <Table.Pagination
          current={meta?.page || 1}
          pageSize={meta?.perPage || 20}
          total={meta?.total || 0}
          onChange={onPageChange}
        />
      )} */}
    </>
  );
};

export default AdminsTable;
