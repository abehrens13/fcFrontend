import React from 'react';
import ReactDOM from 'react-dom';
import Monitor from './components/Monitor'
//import App from './App'



ReactDOM.render(
	//	<App />,
	<Monitor hostname="host" ip="127" timestamp="jetzt" statusRedis="OK" statusServer="OK" statusOverall="FAILURE" />,
	document.getElementById('root')
);
