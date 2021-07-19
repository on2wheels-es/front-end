import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import AuthProvider from './providers/AuthProvider';
import SearchProvider from './providers/SearchProvider';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<SearchProvider>
				<AuthProvider>
					<App />
				</AuthProvider>
			</SearchProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
