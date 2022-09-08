// Exercise 4: Class Components - componentDidMount

import React from 'react';
const axios = require('axios').default;

class App extends React.Component {

  state = { eventList:[] }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let url = "https://reststop.randomhouse.com/resources/authorevents/?start=0&max=3&expandLevel=1&isbn=0&authorid=0";
    const req = axios.get(url);
    console.log(req);
    req.then(resp => {
      let listOfEvents = resp.data.authorEvent;
      let eventList = listOfEvents.map((event)=>{
        return {author: event.eventauthor, date: event.eventdate, time: event.eventtime, location: event.location, market: event.market};
      });
      this.setState({eventList:eventList});
    }).catch(err => {
      console.log(err.toString());
    });
  }

  render() {
    const colorStyle = {
      color:this.props.color,
      fontSize:this.props.size+"px",
      backgroundColor:this.props.backgroundColor,
    };
    let li_ctr = 0;
    return (
      <div style={colorStyle}>
        React Component
        <table style={{border: "1px solid black"}}>
          <thead>
            <th style={{border: "1px solid black"}}>No</th>
            <th style={{border: "1px solid black"}}>Author</th>
            <th style={{border: "1px solid black"}}>Date</th>
            <th style={{border: "1px solid black"}}>Time</th>
            <th style={{border: "1px solid black"}}>Location</th>
            <th style={{border: "1px solid black"}}>Market</th>
          </thead>
          <tbody>
            
          </tbody>
          {
            this.state.eventList.map(function(event) {
              return <tr>
                      <td style={{border: "1px solid black"}}>{li_ctr++}</td>
                      <td style={{border: "1px solid black"}}>{event.author}</td>
                      <td style={{border: "1px solid black"}}>{event.date}</td>
                      <td style={{border: "1px solid black"}}>{event.time}</td>
                      <td style={{border: "1px solid black"}}>{event.location}</td>
                      <td style={{border: "1px solid black"}}>{event.market}</td>
                    </tr>;
            })
          }
        </table>
      </div>
    );
  }
}

export default App;
