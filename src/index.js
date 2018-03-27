import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Home from './containers/Home.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Home />,
  document.getElementById('root')
);

registerServiceWorker();
