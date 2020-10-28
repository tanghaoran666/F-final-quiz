import React, { Component } from 'react';

const GroupNameMap = {
  0: '第一组',
  1: '第二组',
  2: '第三组',
  3: '第四组',
  4: '第五组',
  5: '第六组',
};
class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    };
  }

  async getGroups() {
    try {
      const data = await fetch('http://localhost:8080/groups', {
        method: 'GET',
      });
      const result = await data.json();
      console.log(result);
      this.setState({
        groups: result,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <h2>分组列表</h2>
        <button type="button" onClick={this.getGroups.bind(this)}>
          分组学员
        </button>
        <div>
          {this.state.groups.map(function (item, index) {
            return (
              <div key={index}>
                <div className="groupTitle">{GroupNameMap[index]}</div>
                {item.students.map(function (item1) {
                  return (
                    <div key={item1.id}>
                      {item1.id}. {item1.name}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default GroupList;
