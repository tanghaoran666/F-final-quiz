import React, { Component } from 'react';

class TeacherList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teachers: [],
      visible: false,
      name: '',
    };
  }

  componentDidMount = () => {
    this.initFunction();
  };

  initFunction = async () => {
    try {
      const data = await fetch('http://localhost:8080/trainers?grouped=false', {
        method: 'GET',
      });
      const result = await data.json();
      this.setState({
        teachers: result,
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
      await fetch('http://localhost:8080/trainers', {
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
        <h2>教师列表</h2>
        <div className="participants">
          {this.state.teachers.map((item) => (
            <div className="participant" key={item.id}>
              {item.id}. {item.name}
            </div>
          ))}
          <button className="participant-btn" type="button" onClick={this.handleClick}>
            +添加教师
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
export default TeacherList;
