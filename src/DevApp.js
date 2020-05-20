import React from 'react';
import './App.css';
import Monitor from './components/Monitor'
import fetchMonitor from './backend/fetchMonitor'


var defaultMonitorStatus = {
  hostname: "host",
  inetAddress: "127.0.0.1",
  currentTime: "2020-05-20T19:52:27.433Z",
  statusRedis: "OK",
  statusSystem: "OK",
  statusOverall: "FAILURE"

}


export default function DevApp() {
  const [monitorStatus, setMonitorStatus] = React.useState(defaultMonitorStatus);

  React.useEffect(() => {
    loadMonitor();
  })

  async function loadMonitor() {
    setMonitorStatus(await fetchMonitor('http://localhost:8000/', "monitor"));
  }

  return (

    <div className="App">
      <Monitor monitorStatus={monitorStatus} />
    </div>
  );
}
