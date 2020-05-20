import React from 'react';
import ReactDOM from 'react-dom';
import Monitor from './components/Monitor'
//import App from './App'


var MonitorStatus = {
	hostname: "host",
	ip: "127.0.0.1",
	timestamp: "jetzt",
	statusRedis: "OK",
	statusServer: "OK",
	statusOverall: "FAILURE"

}


ReactDOM.render(
	//	<App />,
	<Monitor monitorStatus={MonitorStatus} />,
	document.getElementById('root')
);
