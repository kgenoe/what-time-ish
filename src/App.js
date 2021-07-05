import logo from './logo.svg';
import './App.css';
import { useLocation } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>idk Kate, it's around {whatTimeIshIt(window.location.pathname).toString()}</p>
      </header>
    </div>
  );
}


function whatTimeIshIt(input) {
  const timeOfDay = input.substr(1);
  var date = dateForTimeOfDay(timeOfDay);
  return date.toLocaleTimeString('en-US', { hour12: true, hour: "numeric", minute: "numeric"});
} 

function dateForTimeOfDay(timeOfDay) {
  // 1.01.2011, 02:03
  // Date(2011, 0 , 1, 2, 3);  
  const minute = randomNumber(0, 59);

  if (timeOfDay === 'morning') {
    const hour = randomNumber(5, 11);
    return new Date(2001, 0 , 1, hour, minute); 
  } else if (timeOfDay === 'afternoon') {
    const hour = randomNumber(12, 4);
    return new Date(2001, 0 , 1, hour, minute); 
  } else if (timeOfDay === 'evening') {
    const hour = randomNumber(5, 9);
    return new Date(2001, 0 , 1, hour, minute); 
  } else if (timeOfDay === 'night') {
    const hour = randomNumber(10, 4);
    return new Date(2001, 0 , 1, hour, minute); 
  } else {
    const hour = randomNumber(0, 23);
    return new Date(2001, 0 , 1, hour, minute); 
  }
}


function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

export default App;
