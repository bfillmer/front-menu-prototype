
// Utility to quickly create navigation items with logical
// defaults to minimize boilerplate.
const navItem = (
  index,
  label,
  url = null,
  isLink = true,
  classNames = '',
  children = null,
  toggled = false
) => ({
  index,
  label,
  url,
  isLink,
  classNames,
  children,
  toggled,
});

export const initialState = {
  href: document.location.pathname,
  navItems: [
    navItem(1, 'Overview', null, false, ''),
    navItem(2, 'Style Guide', null, false, 'bg-warning'),
    navItem(3, 'Workspace', null, false, 'bg-danger'),
    navItem(4, 'Enterprise', null, false, 'bg-info'),
    navItem(5, 'Company', null, false, ''),
  ],
};
