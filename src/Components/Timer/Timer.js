// import React, { Component } from 'react';
// import './Timer.css';
// class Timer extends Component {

//   render() {
//     // const { daysLeft, hoursLeft, minutesLeft, secondsLeft } = this.state;
//     return (
//       <div className='timer-container'>
//         <p id='done'></p>
//         <ul>
//           <li>
//             <span id='days'>{this.state.daysLeft}</span> Days
//           </li>
//           <li>
//             <span id='hours'>{this.state.hoursLeft}</span> Hours
//           </li>
//           <li>
//             <span id='minutes'>{this.state.minutesLeft}</span> Minutes
//           </li>
//           <li>
//             <span id='seconds'>{this.state.secondsLeft}</span> Seconds
//           </li>
//         </ul>
//       </div>
//     );
//   }
// }

// export default Timer;
import React from 'react';
import './Timer.css';

function Timer({day,hour,minute,second}) {
    return (
        <div className="timer-container">
          <div className="count-down-time">
            <h1>React Countdown Timer</h1>
            <p>Timer ends on</p>
            <ul>
              <li><span>{`${day}Days`}</span></li>
              <li><span>{`${hour}Hours`}</span></li>
              <li><span>{`${minute}Mins`}</span></li>
              <li><span>{`${second}Secs`}</span></li>
            </ul>
                
          </div>
    </div>
    )
}

export default Timer;