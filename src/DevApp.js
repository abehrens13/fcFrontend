import React from 'react';
import './App.css';
//import Monitor from './components/Monitor'
import Monitor from './components/Answer'




export default function DevApp() {


  return (
    <div className="App">
      <Answer />

      {/*


      <Monitor monitorHealthUrl='http://localhost:8000/actuator/health' monitorInfoUrl='http://localhost:8000/actuator/info' />
*/}
    </div>
  );
}
