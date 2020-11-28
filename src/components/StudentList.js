import React, { Component } from 'react';
import Participant from './Participant';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      visible: false,
      name: '',
    };
  }

  componentDidMount = () => {
    this.initFunction();
  };

  initFunction = async () => {
    try {
      const data = await fetch('http://localhost:8080/trainees?grouped=false', {
        method: 'GET',
      });
      const result = await data.json();
      this.setState({
        students: result,
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleKeyDown = async (event) => {
    if (event.keyCode === 13) {
      await this.addStudent();
      this.setState({
        visible: false,
        name: '',
      });
      this.initFunction();
    }
  };

  handleClick = () => {
    this.setState({ visible: true });
  };

  addStudent = async () => {
    try {
      await fetch('http://localhost:8080/trainees', {
        method: 'POST',
        body: JSON.stringify({ name: this.state.name }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      this.initFunction();
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <h2>学员列表</h2>
        <div className="participants">
          {this.state.students.map((item) => (
            <Participant id={item.id} name={item.name} character="trainees" key={item.id} />
          ))}
          <button className="participant-btn" type="button" onClick={this.handleClick}>
            +添加学员
          </button>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="请填写名字后按下回车"
            className="participant-input"
            onKeyDown={this.handleKeyDown}
            hidden={!this.state.visible}
          />
        </div>
      </div>
    );
  }
}
export default StudentList;
