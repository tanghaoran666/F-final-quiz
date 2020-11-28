import React, { Component } from 'react';

class GroupList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groups: [],
    };
  }

  async componentDidMount() {
    try {
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
      const data = await fetch('http://localhost:8080/groups/auto-grouping', {
        method: 'POST',
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
        <div className="group-title">
          <h2>分组列表</h2>
          <button className="group-btn" type="button" onClick={this.getGroups.bind(this)}>
            分组学员
          </button>
        </div>
        <div>
          {this.state.groups.map(function (item, index) {
            return (
              <div key={index}>
                <div className="groupTitle">
                  {item.name}
                  <div className="group-teachers">
                    {item.trainers.map(function (item1) {
                      return (
                        <div className="student" key={item1.id}>
                          {item1.id}. {item1.name}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="group-students">
                  {item.trainees.map(function (item1) {
                    return (
                      <div className="student" key={item1.id}>
                        {item1.id}. {item1.name}
                      </div>
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
