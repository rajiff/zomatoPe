import React from 'react';
import ReactDOM from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CustomTheme from './theme';

import './index.css';

import App from './App';

import registerServiceWorker from './registerServiceWorker';

function RootView() {
	return (
		<MuiThemeProvider muiTheme={CustomTheme}>
      <App />
  	</MuiThemeProvider>
	);
}

ReactDOM.render(<RootView />, document.getElementById('root'));

registerServiceWorker();
