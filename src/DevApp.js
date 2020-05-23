import React from 'react';
import './App.css';
import Monitor from './components/Monitor'
import Answer from './components/Answer'
import Question from './components/Question'

export default function DevApp() {


  return (
    <div className="App">

      <Monitor monitorHealthUrl='http://localhost:8000/actuator/health' monitorInfoUrl='http://localhost:8000/actuator/info' />
      <Answer />
      <Question />

      {/*
      <Monitor monitorHealthUrl='http://localhost:8000/actuator/health' monitorInfoUrl='http://localhost:8000/actuator/info' />
import Answer from './components/Answer'

      <Answer />


*/}
    </div>
  );
}
