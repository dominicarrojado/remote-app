export type NavItem = {
  type: 'link' | 'header' | 'divider';
  text?: string;
  href?: string;
  isExternal?: boolean;
  isNew?: boolean;
};

export type NavGroup = {
  title: string;
  items: Array<NavItem>;
};

export type NavGroupItems = Array<NavGroup>;
