import React, { Component } from 'react';
import GroupList from '../components/GroupList';
import StudentList from '../components/StudentList';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <GroupList />
        <StudentList />
      </div>
    );
  }
}

export default App;
