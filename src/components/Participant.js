import React, { Component } from 'react';

class Participant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      canDelete: false,
      character: this.props.character,
    };
  }

  showDelete = () => {
    this.setState({
      canDelete: true,
    });
  };

  hideDelete = () => {
    this.setState({
      canDelete: false,
    });
  };

  delete = async () => {
    try {
      await fetch(`http://localhost:8080/${this.state.character}/${this.state.id}`, {
        method: 'DELETE',
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div
        className="participant"
        key={this.props.id}
        onMouseOver={this.showDelete}
        onMouseLeave={this.hideDelete}
        onFocus={() => 0}
      >
        {this.props.id}. {this.props.name}
        {this.state.canDelete && (
          <button className="delete-btn" onClick={this.delete} type="submit">
            X
          </button>
        )}
      </div>
    );
  }
}

export default Participant;
