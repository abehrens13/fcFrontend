import React from 'react';
import './App.css';
import Monitor from './components/Monitor'




export default function DevApp() {


  return (
    <div className="App">
      <Monitor monitorHealthUrl='http://localhost:8000/actuator/health' monitorInfoUrl='http://localhost:8000/actuator/info' />

      {/*
      <Answer />

import Answer from './components/Answer'

      <Monitor monitorHealthUrl='http://localhost:8000/actuator/health' monitorInfoUrl='http://localhost:8000/actuator/info' />
*/}
    </div>
  );
}
