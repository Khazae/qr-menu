import { useEffect, useState } from "react";
import AdminsTable from "../../components/AdminsTable";
import { Admin } from "../../../../entities/admin";
import styles from "./style.module.css";
import { fetchAllAdmins } from "../../../../api/modules/admins/requests/fetchAllAdmins";
import CreateAdminButton from "../../components/CreateAdminButton";
import CreateAdminModal from "../../components/CreateAdminModal";
import {
  showErrorNotification,
  showSuccessNotification,
} from "../../../../common/utils/notifications";
import { createAdmin } from "../../../../api/modules/admins/requests/createAdmin";

const ListAdminsView = () => {
  const [admins, setAdmins] = useState([] as Admin[]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null as null | Error);

  const [createAdminModalVisible, setCreateAdminModalVisible] = useState(false);
  const [createAdminModalSubmitLoading, setCreateAdminModalSubmitLoading] =
    useState(false);

  useEffect(() => {
    loadAdmins();
  }, []);

  const loadAdmins = async () => {
    setError(null);

    setLoading(true);

    try {
      const admins = await fetchAllAdmins();

      setAdmins(admins);
    } catch (e) {
      setError(e as Error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateEventModalSubmit = async (form: {
    email: string;
    name: string;
    password: string;
    position: string;
  }) => {
    setCreateAdminModalSubmitLoading(true);
    try {
      const newEvent = await createAdmin(form);

      setAdmins((prevEvents) => {
        return [newEvent, ...prevEvents];
      });
      showSuccessNotification("Юзер создан");
      setCreateAdminModalVisible(false);

      loadAdmins();
    } catch (e) {
      showErrorNotification("Не удалось создать событие");
    } finally {
      setCreateAdminModalSubmitLoading(false);
    }
  };

  return (
    <div className="wrapper">
      <h3 className={styles.title}>Персонал</h3>
      <section className="admins">
        <div className={styles.controls}>
          <CreateAdminButton onClick={() => setCreateAdminModalVisible(true)} />
        </div>
        <AdminsTable admins={admins} loading={loading} error={error} />

        <CreateAdminModal
          visible={createAdminModalVisible}
          submitLoading={createAdminModalSubmitLoading}
          onSubmit={handleCreateEventModalSubmit}
          onClose={() => setCreateAdminModalVisible(false)}
        />
      </section>
    </div>
  );
};

export default ListAdminsView;
