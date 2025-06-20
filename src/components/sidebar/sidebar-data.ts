export interface SidebarItem {
  id: string; // Changed to string for better readability
  nameEnglish: string;
  url: string;
  parentId: string | null;
  icon: string;
  children?: SidebarItem[]; // Renamed from modulePrivilege to children for clarity
}

// sidebarData.ts
export const sidebarData: SidebarItem[] = [
  {
    id: "otp-module",
    nameEnglish: "OTP Module",
    url: "/otp",
    parentId: null,
    icon: "dashboard-icon",
    children: []
  },
  {
    id: "masking-number",
    nameEnglish: "Masking Number",
    url: "/masking",
    parentId: null,
    icon: "dashboard-icon",
    children: []
  },
  {
    id: "interactive-shape",
    nameEnglish: "Interactive Shape",
    url: '/interactive-shape',
    parentId: null,
    icon: 'shape-icon',
    children: []
  },
  {
    id: "closure-stale-ref",
    nameEnglish: "Closure Stale Reference",
    url: '/closure-stale-reference',
    parentId: null,
    icon: 'code-icon',
    children: []
  },
  {
    id: "overlapping-circles",
    nameEnglish: "Overlapping Circles",
    url: '/overlapping-circles',
    parentId: null,
    icon: 'circle-icon',
    children: []
  },
  {
    id: "intersection-observer",
    nameEnglish: "Intersection Observer",
    url: '/intersection-observer',
    parentId: null,
    icon: 'observer-icon',
    children: []
  },
  {
    id: "infinite-scrolling",
    nameEnglish: "Infinite Scrolling",
    url: '/infinite-scrolling',
    parentId: null,
    icon: 'scroll-icon',
    children: [
      {
        id: "scroll-height",
        nameEnglish: "Scroll Height",
        url: '/scroll-height',
        parentId: "infinite-scrolling",
        icon: 'measure-icon'
      },
      {
        id: "intersection-observer-scroll",
        nameEnglish: "Intersection Observer",
        url: '/intersection-observer-scroll',
        parentId: "infinite-scrolling",
        icon: 'observer-icon'
      }
    ]
  },
  {
    id: "popover",
    nameEnglish: "Popover",
    url: '/popover',
    parentId: null,
    icon: 'popover-icon'
  },
  {
    id: "pagination",
    nameEnglish: "Pagination",
    url: '/pagination',
    parentId: null,
    icon: 'popover-icon'
  },
  {
    id: "css-challenge",
    nameEnglish: "CSS Challenge",
    url: '/css-challenge',
    parentId: null,
    icon: 'css-icon',
    children: [
      {
        id: 'rainbow-circle',
        nameEnglish: 'Rainbow Circle',
        url: 'css-challenge/rainbow-circle',
        parentId: 'css-challenge',
        icon: 'rainbow-icon'
      },
      {
        id: 'pig-face',
        nameEnglish: 'Pig Face',
        url: 'css-challenge/pig-face',
        parentId: 'css-challenge',
        icon: 'pig-icon'
      },
      {
        id: 'stpper-form',
        nameEnglish: 'Stepper Form',
        url: 'css-challenge/stepper-form',
        parentId: 'css-challenge',
        icon: 'form-icon'
      }
    ]
  },
];