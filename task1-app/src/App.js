import React, { Component } from 'react';
import {userInput as UserInput} from './User/User';
import {userOutput as UserOutput} from './User/User';
import './App.css';

class App extends Component {

  state = {
      users: [
        {name: 'Edir', status: 'Not Known'},
        {name: 'Claudia', status: 'Not Known'}
      ]
  }

  statusChangedHandler = (newStatus) => {

    this.setState({
      users: [
        {name: 'Edir', status: newStatus},
        {name: 'Claudia', status: newStatus}
      ]
    })

  }

  nameChangedHandler = (event) => {
    this.setState({
      users: [
        {name: event.target.value, status: 'To Check'},
        {name: 'Claudia', status: 'To Check'}
      ]
    })
  }

  render() {

    const style = {

      backgroundColor: 'lime',
      fontSize: '20px',
      padding: '5px',

    }

    return (
      <div className="App">
      <button style={style} onClick={() => this.statusChangedHandler('Approved!')}>Approve All</button>
        <UserOutput name={this.state.users[0].name} status={this.state.users[0].status} />
        <UserInput name={this.state.users[0].name} change={this.nameChangedHandler} />
        <UserOutput name={this.state.users[1].name} status={this.state.users[1].status} />
      </div>
    );
  }
}

export default App;
