// function App(props) {
//   const colorStyle = {
//     color:props.color,
//     fontSize:props.size+"px",
//     backgroundColor:props.backgroundColor,
//   }
//   return (
//     <div style={colorStyle}>
//       Hello World!
//     </div>
//   );
// }

// Step 11 Hands-on Lab Module 4

import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  state = { counter:0 }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    const colorStyle = {
      color:this.props.color,
      fontSize:this.props.size+"px",
      backgroundColor:this.props.backgroundColor,
    }
    return (
      <div>
        <div style={colorStyle}>
          React Component
          <br/><br/>
          <button onClick={this.incrementCounter}>Click Me!</button>
          <br/><br/>
          {this.state.counter}
        </div>
      </div>
    );
  }
}

export default App;
