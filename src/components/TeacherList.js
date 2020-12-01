import React, { Component } from 'react';
import Participant from './Participant';

// TODO GTB-工程实践: - 命名不统一，在GroupList.js里面使用了变量trainers。相同的概念应该保持命名的一致性。
// TODO GTB-工程实践: - 针对以下所有的console: 不应该提交console
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

  // TODO GTB-工程实践: - 方法的命名不合理，没有体现业务逻辑
  initFunction = async () => {
    try {
      // TODO feedback: API请求没有抽取到单独的utils文件
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
            <Participant id={item.id} name={item.name} character="trainers" key={item.id} />
          ))}
          {/* // TODO GTB-知识点: - 添加讲师和添加学员的逻辑是一样的，这里应该提取公共组件 */}
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
