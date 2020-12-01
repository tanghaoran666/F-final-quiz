import React, { Component } from 'react';
import Participant from './Participant';
// TODO GTB-知识点: - 组件划分不合理，应该再划分出一个Group组件
// TODO GTB-工程实践: - 针对以下所有的console: 不应该提交console
class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    };
  }

  async componentDidMount() {
    try {
      // TODO feedback: API请求没有抽取到单独的utils文件
      const data = await fetch('http://localhost:8080/groups', {
        method: 'GET',
      });
      const result = await data.json();
      this.setState({
        groups: result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  async getGroups() {
    try {
      // TODO feedback: API请求没有抽取到单独的utils文件
      const data = await fetch('http://localhost:8080/groups/auto-grouping', {
        method: 'POST',
      });
      const result = await data.json();
      console.log(result);
      this.setState({
        groups: result,
      });
      // TODO GTB-知识点: - 分组之后要使得StudentList和TeacherList的数据更新，应该使用状态提升。而是通过reload页面
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }
// TODO GTB-知识点: - 针对以下所有map(function (item, index){})的地方，建议使用箭头函数

  render() {
    return (
      <div>
        <div className="group-title">
          <h2>分组列表</h2>
          <button className="group-btn" type="button" onClick={this.getGroups.bind(this)}>
            分组学员
          </button>
        </div>
        <div>
          {this.state.groups.map(function (item, index) {
            return (
                // TODO GTB-知识点: - 应该使用id，而不是index作为key
              <div key={index}>
                <div className="groupTitle">
                  <div className="titleName">{item.name}</div>
                  <div className="group-teachers">
                    {/* // TODO GTB-知识点: - 应该考虑到公共组件，所以这里应该复用TeachersList组件 */}
                    {item.trainers.map(function (item1) {
                      return (
                        <Participant
                          id={item1.id}
                          name={item1.name}
                          character="trainers"
                          key={item1.id}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="group-students">
                  {/* // TODO GTB-知识点: - 应该考虑到公共组件，所以这里应该复用StudentList组件 */}
                  {item.trainees.map(function (item1) {
                    return (
                      <Participant
                        id={item1.id}
                        name={item1.name}
                        key={item1.id}
                        character="trainees"
                      />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default GroupList;
