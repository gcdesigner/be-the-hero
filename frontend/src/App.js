import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
	return (
		<div className="App">
			<Routes />
			<ToastContainer position={toast.POSITION.TOP_CENTER} />
			<GlobalStyle />
		</div>
	);
}

export default App;
