import { ProfileOption } from "./types";

const profileOptions: ProfileOption[] = [
  {
    icon: "unlock",
    label: "Sign Out",
    action: () => {
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");

      window.location.href = "/";
    },
  },
];

export { profileOptions };
