// import Timer from './Components/Timer/Timer';
// import DateInput from './Components/DateInput/DateInput';
// function App() {
//   return (
//     <div className='app-container'>
//       <h1 className='app-title'>React Countdown Timer</h1>
//       <p>Time Left</p>
//       <Timer />
//       <DateInput/>
      
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react';
import './App.css'
import Timer from './Components/Timer/Timer';
import DateInput from './Components/DateInput/DateInput';
export default class App extends Component {
    
    constructor(props){
        super(props);
        this.state ={
            day: 0,
            hour:0,
            minute:0,
            second:0,
            diff_time:0,
            input:'',
            dateString:'',
            errorMessage:''
        } 
        
    }
    getDate =(ev)=>{
       console.log(ev.target.value);
       this.setState({
           input:ev.target.value
       })
    }
    setDateString=()=>{
        this.setState({
            dateString: this.state.input
        })      

    }
    x = setInterval( ()=>{
        const curr_time = new Date().getTime();

        var countDownDate = new Date(this.state.dateString).getTime();
        const diff_time = countDownDate - curr_time;
        var days = Math.floor(diff_time/(1000*60*60*24));
        var hours = Math.floor((diff_time %(1000*60*60*24))/(1000*60*60));
        var minutes = Math.floor((diff_time %(1000*60*60))/(1000*60));
        var seconds = Math.floor((diff_time %(1000*60))/(1000));
          
        this.setState({
            day:days,
            hour:hours,
            minute:minutes,
            second:seconds,
            diff_time: diff_time
        })

    },1000)
  
        render() {
        return (
            <div className="main-app">
                { (this.state.dateString === '' )? 
                <Timer day={0} hour={0} minute={0} second={0}/>
                : (this.state.diff_time < 0 ? 
                    <h1 className="error-message">Please Choose a Present or Future Date</h1> :
                    <Timer day={this.state.day} hour={this.state.hour} minute={this.state.minute} second={this.state.second}/>
                ) 

            }
            {/* print error message if date is not valid */}
                <DateInput getDate={this.getDate} setDateString={this.setDateString} />
            </div>
        )
    }
}

