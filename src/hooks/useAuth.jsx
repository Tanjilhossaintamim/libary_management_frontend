import { useSelector } from "react-redux";

export const useAuth = () => {
  const { token } = useSelector((state) => state.login);

  if (token) {
    return true;
  } else {
    return false;
  }
};
