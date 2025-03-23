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
  {
    id: 4,
    nameEnglish: "Interactive Shape",
    url: '/interactive-shape',
    parentId: null,
    icon: '',
    modulePrivilege: []
  },
  {
    id: 5,
    nameEnglish: "Closure Stale Ref",
    url: '/closure-stale-reference',
    parentId: null,
    icon: '',
    modulePrivilege: []
  },
  {
    id: 6,
    nameEnglish: "Overlapping Cicles",
    url: '/overlapping-circles',
    parentId: null,
    icon: '',
    modulePrivilege: []
  },
  // {
  //   id: 6,
  //   nameEnglish: "Tic Tac Toe",
  //   url: '/tic-tac-toe',
  //   parentId: null,
  //   icon: '',
  //   modulePrivilege: []
  // },

  {
    id: 6,
    nameEnglish: "Intersection Observer",
    url: '/intersection-observer',
    parentId: null,
    icon: '',
    modulePrivilege: []
  },
  {
    id: 7,
    nameEnglish: "Infinite Scrolling",
    url: '/',
    parentId: null,
    icon: '',
    modulePrivilege: [
      { id: 9, nameEnglish: "Scroll Height", url: '/scroll-height', parentId: 7, icon: '', modulePrivilege: [] },
      { id: 10, nameEnglish: "Intersection Observer", url: '/intersection-observer-scroll', parentId: 7, icon: '', modulePrivilege: [] }
    ]
  }

];
