
import React from 'react';
import { render } from 'react-dom';

import { store } from 'store/store';
import { App } from 'App';

import 'appearance/scss/main.scss';

// Create app DOM node.
const appNode = document.createElement('div');
appNode.id = 'app';
document.body.appendChild(appNode);

// Render our application.
render(
  <App store = { store } />,
  appNode
);
