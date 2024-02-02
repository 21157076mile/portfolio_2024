export const BASE_URL_API = process.env.NEXT_PUBLIC_API_URL;

const prefixStorageKey = "portfolio_2024";
export const LOCAL_STORAGE_KEY = {
  accessToken: `${prefixStorageKey}_access_token`,
  currentUser: `${prefixStorageKey}_current_user`,
  version: `${prefixStorageKey}_version`, // not-use
  uiTheme: `${prefixStorageKey}_theme`,
};

export const MAIN_NAV = [
  {
    id: "home",
    label: "Home",
    href: "/",
  },
  {
    id: "projects",
    label: "Projects",
    href: "/projects",
  },
  {
    id: "about",
    label: "About",
    href: "/about",
  },
];
