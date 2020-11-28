import React, { Component } from 'react';
class Participant extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: this.props.id,
          canDelete: false,
          role:this.props.role
        };
      }
    
    showDelete = () => {
        this.setState({
            canDelete: true
        })
    } 

    hideDelete = () => {
        this.setState({
            canDelete: false
        })
    }

    delete = async() => {
        try {
            await fetch(`http://localhost:8080/${this.state.role}/${this.state.id}`, {
              method: 'DELETE',
            });
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }

    render() {
    return (
        <div className="participant" key={this.props.id} onMouseOver={this.showDelete} onMouseLeave={this.hideDelete}>
              {this.props.id}. {this.props.name}
              {this.state.canDelete&&<button onClick={this.delete}>X</button>}
        </div>
    );
    }
}

export default Participant;