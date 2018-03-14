import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import Root from './routes';
import configureStore from './store';

const store = configureStore({});

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
