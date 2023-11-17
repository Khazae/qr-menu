import { HttpStatus } from "../../common/constants/HttpStatus";
import { HttpError } from "../../common/errors/HttpError";
import { unsetAdmin } from "../../store/slices/auth";
import { store } from "../../store";
import { showInfoNotification } from "../../common/utils/notifications";
import router from "../../router";

export const withUnauthorizedHandler = async <T>(request: Promise<T>) => {
  try {
    return await request;
  } catch (e) {
    const error = e as HttpError;

    if (error.status === HttpStatus.UNAUTHORIZED) {
      store.dispatch(unsetAdmin());
      router.navigate("/auth/login", { replace: true });
      showInfoNotification("Необходимо снова войти в аккаунт");
    }

    throw e;
  }
};
