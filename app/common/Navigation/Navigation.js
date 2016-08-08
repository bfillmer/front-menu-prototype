
import React, { Component, PropTypes } from 'react';
import ReactHeight from 'react-height';

import { Animate } from 'common/Animate';

export const Navigation = ({
  navItems,
}) => (
  <div className = "container-navigation bg-primary">
    <div className = "container">
      <NavList
        items = { navItems }
        className = "parent-navigation row list-unstyled m-b-0"
      />
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

// @NOTE This one got big. Added some checks for children then added the slide
// down animation. Only added to navigation items with children, but this would
// look pretty terrible if you nested it three deep. Fairly specific to this
// solution.
class NavigationItem extends Component {
  constructor (props) {
    super(props);
    this.state = {
      expanded: false,
      openHeight: 0,
      hasChildren: !!this.props.item.children,
    };
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  setExpandedHeight (h) {
    this.setState({
      openHeight: h,
    });
  }

  mouseEnter () {
    this.setState({
      expanded: true,
    });
  }

  mouseLeave () {
    this.setState({
      expanded: false,
    });
  }

  render () {
    const { item } = this.props;

    const childrenCSSProps = [{
      prop: 'height',
      unit: 'px',
      bool: this.state.expanded,
      true: this.state.openHeight,
      false: 0,
    }];

    return (
      <li
        className = { item.classNames }
        onMouseEnter = { this.state.hasChildren && this.mouseEnter }
        onMouseLeave = { this.state.hasChildren && this.mouseLeave }
      >
        <a className = "pointer">
          { item.label }
        </a>
        { item.children && (
            <Animate cssProps = { childrenCSSProps } className = "hide-overflow">
              <ReactHeight onHeightReady = { height => this.setExpandedHeight(height) }>
              <NavList items = { item.children } className = "child-navigation list-unstyled" />
              </ReactHeight>
            </Animate>
          ) }
      </li>
    );
  }
}

NavigationItem.propTypes = {
  item: PropTypes.object.isRequired,
};
