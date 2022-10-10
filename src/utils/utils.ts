import { useLocation } from "react-router-dom";
import { routes } from "../routing/routes";

export const getCurrentRouteName = () => {
  const location = useLocation();
  const pathName = location.pathname;
  const routeName = routes.find((r) => r.url === pathName);

  return routeName ? routeName.name : "";
};
