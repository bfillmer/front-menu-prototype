
import React, { PropTypes } from 'react';
import classNames from 'classnames';

const iClassName = (navigationShown) => classNames({
  fa: true,
  'fa-2x': true,
  'vertical-align': true,
  'fa-bars': !navigationShown,
  'fa-close': navigationShown,
});

export const Header = ({
  showNavigation,
  toggle,
}) => (
  <div className = "container-fluid">
    <div className = "row">
      <div className = "col-xs-8">
        <h1 className = "m-a-1">Frontify</h1>
      </div>
      <div className = "col-xs-4 text-uppercase text-xs-right p-t-2">
        <a className = "pointer" onClick = { toggle }>
          Menu <i className = { iClassName(showNavigation) } />
        </a>
      </div>
    </div>
  </div>
);

Header.propTypes = {
  showNavigation: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
