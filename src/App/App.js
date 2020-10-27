import React, { Component } from 'react';
import GroupList from '../components/GroupList';
import StudentList from '../components/StudentList';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  async componentDidMount() {
    try {
      const data = await fetch('http://localhost:8080/students', {
        method: 'GET',
      });
      const result = await data.json();
      this.setState({
        students: result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div data-testid="app" className="App">
        <GroupList />
        <StudentList students={this.state.students} />
      </div>
    );
  }
}

export default App;
