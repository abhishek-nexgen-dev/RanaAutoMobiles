export interface NavType {
  label: string;
  href: string;
  //   isSubmenu: boolean,
  SUBMENU?: NavType[]; // optional sub-menu links
  protected?: boolean; // only show if user is logged in
  publicOnly?: boolean; // only show if user is NOT logged in
}
