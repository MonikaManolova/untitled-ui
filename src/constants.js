import {
  HouseIcon,
  CheckSquareIcon,
  BarChartIcon,
  LayersIcon,
  ReportingIcon,
  UsersIcon,
  BellIcon,
  LifeBuoyIcon,
  SettingsIcon,
} from "./components/Icons";

import avatar1 from "./assets/avatars-small/Avatar-1.png";
import avatar2 from "./assets/avatars-small/Avatar-2.png";
import avatar3 from "./assets/avatars-small/Avatar-3.png";
import avatar4 from "./assets/avatars-small/Avatar-4.png";
import avatar5 from "./assets/avatars-small/Avatar-5.png";

export const navItemsTop = [
  {
    name: "Home",
    icon: HouseIcon,
    path: "/home",
  },
  {
    name: "Dashboard",
    icon: BarChartIcon,
    path: "/",
  },
  {
    name: "Projects",
    icon: LayersIcon,
    path: "/projects",
  },
  {
    name: "Tasks",
    icon: CheckSquareIcon,
    num: 10,
    path: "/tasks",
  },
  {
    name: "Reporting",
    icon: ReportingIcon,
    path: "/reporting",
  },
  {
    name: "Users",
    icon: UsersIcon,
    path: "/users",
  },
];

export const navItemsBottom = [
  {
    name: "Notifications",
    icon: BellIcon,
    num: 4,
    path: "/notifications",
  },
  {
    name: "Support",
    icon: LifeBuoyIcon,
    path: "/support",
  },
  {
    name: "Settings",
    icon: SettingsIcon,
    path: "/settings",
  },
];

export const tabsDashboard = [
  "Overview",
  "Table",
  "List View",
  "Segment",
  "Custom",
];

export const tabsProjects = ["Overview", "Analytics", "Reporting", "Archived"];

export const metricAvatars = [avatar1, avatar2, avatar3, avatar5, avatar4];

export const filters = {
  locations: ["US", "AU", "CA"],
  statuses: ["Customer", "Churned"],
};

export const projectsFilters = ["Active", "Current", "Late", "Upcoming"];
