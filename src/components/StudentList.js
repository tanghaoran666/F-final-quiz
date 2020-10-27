import React, { Component } from 'react';

class StudentList extends Component {
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
        <button type="button">+添加学员</button>
      </div>
    );
  }
}
export default StudentList;
