import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import AuthProvider from './providers/AuthProvider';
import SearchProvider from './providers/SearchProvider';

ReactDOM.render(
		<Router>
			<SearchProvider>
				<AuthProvider>
					<App />
				</AuthProvider>
			</SearchProvider>
		</Router>,
	document.getElementById('root')
);
