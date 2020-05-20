import React from 'react';
import './App.css';
import Monitor from './components/Monitor'




export default function DevApp() {


  return (
    <div className="App">
      <Monitor monitorUrl='http://localhost:8000/monitor' />
    </div>
  );
}
