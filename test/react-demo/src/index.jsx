import 'assets/scss/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

import { applyPolyfills, defineCustomElements } from './loader'

ReactDOM.render(<App />, document.getElementById('app'));

// applyPolyfills().then(() => {
  defineCustomElements();
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
