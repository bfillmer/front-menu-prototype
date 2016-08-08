
import createClassNames from 'classnames';

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

// @NOTE Bit wonky, but let's attach all the clases to each navigation item in the store
// to make our recursive list nesting a bit cleaner in the display.
const levelOneClassNames = (additionalClasses = '') => createClassNames({
  'p-y-3': true,
  'col-xs-12': true,
  'col-md-2': true,
  'text-xs-center': true,
  'text-uppercase': true,
}, additionalClasses);

export const initialState = {
  href: document.location.pathname,
  navItems: [
    navItem(1, 'Overview', null, false, levelOneClassNames('offset-lg-1')),
    navItem(2, 'Style Guide', null, false, levelOneClassNames('bg-warning'), [
      navItem(6, 'Features'),
      navItem(7, 'Pricing'),
      navItem(8, 'Examples'),
    ]),
    navItem(3, 'Workspace', null, false, levelOneClassNames('bg-danger'), [
      navItem(9, 'Features'),
      navItem(10, 'Examples'),
    ]),
    navItem(4, 'Enterprise', null, false, levelOneClassNames('bg-info'), [
      navItem(11, 'Overview'),
      navItem(12, 'Features'),
    ]),
    navItem(5, 'Company', null, false, levelOneClassNames()),
  ],
};
