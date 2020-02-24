import * as React from 'react';

class Controls extends React.Component {
  handleStart = event => {
    event.preventDefault();
    console.log('hello');
  };

  render() {
    return (
      <div>
        <button onClick={this.handleStart}>Start</button>
        <button>Pause</button>
        <button>Stop</button>
        <button>Reset</button>
        <button>Next</button>
        <button>Previous</button>
      </div>
    );
  }
}

export default Controls;
