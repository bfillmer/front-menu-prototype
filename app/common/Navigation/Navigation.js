
import React, { PropTypes } from 'react';

export const Navigation = ({
  navItems,
}) => (
  <div className = "container-navigation bg-primary">
    <div className = "container">
      <NavList items = { navItems } className = "row list-unstyled m-b-0" />
    </div>
  </div>
);

Navigation.propTypes = {
  navItems: PropTypes.array.isRequired,
};

const NavList = ({
  items,
  className,
}) => (
  <ul className = { className }>
    { items.map((item) => <NavigationItem key = { item.index } item = { item } />) }
  </ul>
);

NavList.propTypes = {
  items: PropTypes.array.isRequired,
  className: PropTypes.string,
};

const NavigationItem = ({
  item,
}) => (
  <li className = { item.classNames }>
    <a className = "pointer">
      { item.label }
    </a>
    { item.children && <NavList items = { item.children } className = "list-unstyled" /> }
  </li>
);

NavigationItem.propTypes = {
  item: PropTypes.object.isRequired,
};
