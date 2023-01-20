import { DashboardLogo, HomeLogo, ProjectsLogo, ReportingLogo, SettingsLogo, SupportLogo, TasksLogo, UsersLogo } from "assets";

export const sideMenuData = [
  {
    name: 'Home',
    Image: HomeLogo
  },
  {
    name: "Dashboard",
    Image: DashboardLogo
  },
  {
    name: "Projects",
    Image: ProjectsLogo
  },
  {
    name: "Tasks",
    Image: TasksLogo
  },
  {
    name: "Reporting",
    Image: ReportingLogo
  },
  {
    name: "Users",
    Image: UsersLogo
  },
  {
    name: "Support",
    Image: SupportLogo
  },
  {
    name: "Settings",
    Image: SettingsLogo
  }
];

export const firstSideMenuData = sideMenuData.slice(0,6);
export const secondSideMenuData = sideMenuData.slice(6);

export const cardData = {
  title: "New features available",
  description: "Check out the new dashboard view. Pages now load faster.",
  buttonText1: "Dismiss",
  buttonText2: "What's new?",
}