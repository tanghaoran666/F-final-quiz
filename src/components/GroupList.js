import React, { Component } from 'react';

class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: {},
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
          <div className="listTitle">第一组</div>
          {/* {this.state.groups.one.map((item) => (
            <div key={item.id}>
              {item.id}. {item.name}
            </div>
          ))} */}
        </div>
      </div>
    );
  }
}
export default GroupList;
