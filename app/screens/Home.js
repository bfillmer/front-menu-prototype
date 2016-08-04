
import React, { Component } from 'react';

import { Header } from 'common/Header';
import { Navigation } from 'common/Navigation/Navigation';
import { Animate } from 'common/Animate';

// @NOTE Using a stateful component to maintain state regarding the showing/hiding
// instead of storing this in the central store. Consider toggle to be mostly
// ephemeral state, depending on use-case.
export class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showNavigation: false,
    };
    this.toggleHeader = this.toggleHeader.bind(this);
    this.menuFadeAnimationConfig = this.menuFadeAnimationConfig.bind(this);
  }

  toggleHeader () {
    this.setState({
      showNavigation: !this.state.showNavigation,
    });
  }

  // @NOTE Would adjust the height and such as well in production, doing only
  // opacity for quick demostration.
  menuFadeAnimationConfig () {
    return [
      {
        prop: 'opacity',
        unit: '',
        bool: this.state.showNavigation,
        true: 1,
        false: 0,
      },
    ];
  }

  render () {
    return (
      <div className = "container-home">
        <Header showNavigation = { this.state.showNavigation } toggle = { this.toggleHeader } />
        <Animate cssProps = { this.menuFadeAnimationConfig() }>
          <Navigation { ...this.props } />
        </Animate>
      </div>
    );
  }
}
