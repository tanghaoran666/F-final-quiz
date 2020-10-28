import React, { Component } from 'react';

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      name: '',
    };
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      this.addStudent();
      this.setState({
        visible: false,
        name: '',
      });
      console.log('refresh');
    }
  };

  handleClick = () => {
    this.setState({ visible: true });
  };

  addStudent = async () => {
    try {
      const data = await fetch('http://localhost:8080/student', {
        method: 'POST',
        body: this.state.name,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const result = await data.json();
      console.log(JSON.stringify(result));
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <h2>学员列表</h2>
        <div className="students">
          {this.props.students.map((item) => (
            <div key={item.id}>
              {item.id}. {item.name}
            </div>
          ))}
        </div>
        <button type="button" onClick={this.handleClick}>
          +添加学员
        </button>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.name}
          placeholder="请填写名字后按下回车"
          className="input"
          onKeyDown={this.handleKeyDown}
          hidden={!this.state.visible}
        />
      </div>
    );
  }
}
export default StudentList;
