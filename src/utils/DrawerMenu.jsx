import DashboardIcon from "@mui/icons-material/Dashboard";
import CategoryIcon from "@mui/icons-material/Category";
import MenuBookIcon from "@mui/icons-material/MenuBook";

export const mainNavbarItems = [
  {
    id: 0,
    icon: <DashboardIcon />,
    label: "Dashbord",
    route: "/dashboard",
  },
  {
    id: 1,
    icon: <MenuBookIcon />,
    label: "Books",
    route: "/dashboard/books",
  },
  {
    id: 2,
    icon: <CategoryIcon />,
    label: "Category",
    route: "/dashboard/categories",
  },
];
