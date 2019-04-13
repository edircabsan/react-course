import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  
  state = {
    chars: '' 
  }

  deleteCharHandler = (charIndex) => {
    const chars = this.state.chars.split('');
    chars.splice(charIndex, 1);
    const updatedChars = chars.join('');
    this.setState({chars: updatedChars});
  }

  textChangedHandler = (event) => {
    this.setState({chars: event.target.value});
  }
  
  render() {

    const letters = this.state.chars.split('').map((char, index) => {
        return <Char 
                  key={index} 
                  letter={char} 
                  click={() => this.deleteCharHandler(index)}/>
      });

    return (
      <div>
        <input type="text" value={this.state.chars} onChange={this.textChangedHandler} />
        <p>{this.state.chars.length}</p>
        <Validation len={this.state.chars.length} />
        {letters}
      </div>
    );
  }
}

export default App;
