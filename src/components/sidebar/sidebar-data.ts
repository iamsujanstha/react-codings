// Define the SidebarItemType type
export interface SidebarItemType {
  id: number;
  nameEnglish: string;
  url: string;
  parentId: number | null; // Allow null for top-level items
  icon: string;
  modulePrivilege: SidebarItemType[]; // Recursive type for nested privileges
}

// Example data with the correct type
export const sidebarData: SidebarItemType[] = [
  {
    id: 1,
    nameEnglish: "Otp Module",
    url: "/otp",
    parentId: null,
    icon: "dashboard-icon",
    modulePrivilege: [],
  },
  {
    id: 2,
    nameEnglish: "Masking Number",
    url: "/masking",
    parentId: null,
    icon: "dashboard-icon",
    modulePrivilege: [],
  },
  {
    id: 3,
    nameEnglish: "Settings",
    url: "",
    parentId: null,
    icon: "settings-icon",
    modulePrivilege: [
      {
        id: 3,
        nameEnglish: "User Management",
        url: "/settings/user-management",
        parentId: 2,
        icon: "user-icon",
        modulePrivilege: [],
      },
      {
        id: 4,
        nameEnglish: "Roles",
        url: "/settings/roles",
        parentId: 2,
        icon: "roles-icon",
        modulePrivilege: [],
      },
    ],
  },
];
