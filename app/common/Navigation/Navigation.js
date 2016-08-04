
import React, { PropTypes } from 'react';
import classNames from 'classnames';

// Function defined outside render to ease garbage collection.
const itemClassName = (index, additionalClasses = '') => classNames({
  'p-y-3': true,
  'col-xs-12': true,
  'col-sm-6': true,
  'col-lg-2': true,
  'text-xs-center': true,
  'text-uppercase': true,
  'offset-lg-1': index === 1,
}, additionalClasses);

export const Navigation = ({
  navItems,
}) => (
  <div className = "bg-primary">
    <div className = "container">
      <ul className = "row list-unstyled m-b-0">
        { navItems.map((item) =>
          <li
            className = { itemClassName(item.index, item.classNames) }
            key = { item.index }
          >
            <a className = "pointer">
              { item.label }
            </a>
          </li>
        ) }
      </ul>
    </div>
  </div>
);

Navigation.propTypes = {
  navItems: PropTypes.array.isRequired,
};
