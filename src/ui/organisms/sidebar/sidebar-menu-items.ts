import { SidebarMenuItemProps } from "../../atoms/sidebar/sidebar-menu-item.ts";
import { routes } from "../../../infrastructure/services/router.ts";

export const menuItemsProps: SidebarMenuItemProps[] = [
  {
    href: routes.home.index.path,
    iconClasses: ["icon", "bx", "bxs-home"],
    text: "Home",
    tooltip: "Home",
  },
  {
    href: "#",
    iconClasses: ["icon", "bx", "bx-task"],
    text: "Stories",
    tooltip: "Stories",
  },
  {
    href: routes.projects.index.path,
    iconClasses: ["icon", "bx", "bxs-layout"],
    text: "Projects",
    tooltip: "Projects",
  },
  {
    href: "#",
    iconClasses: ["icon", "bx", "bxs-cog"],
    text: "Settings",
    tooltip: "Settings",
  },
  {
    href: "#",
    iconClasses: ["icon", "bx", "bxs-log-out"],
    text: "Logout",
    tooltip: "Logout",
  },
];