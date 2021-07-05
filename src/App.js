import './App.css';

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
    // 5am-11:59am
    const hour = randomNumber(5, 11);
    return new Date(2001, 0 , 1, hour, minute); 

  } else if (timeOfDay === 'afternoon') {
    // 12pm-4:49pm
    const hour = randomNumber(12, 16);
    return new Date(2001, 0 , 1, hour, minute); 

  } else if (timeOfDay === 'evening') {
    // 5pm-9:59pm
    const hour = randomNumber(17, 21);
    return new Date(2001, 0 , 1, hour, minute); 

  } else if (timeOfDay === 'night') {
    // 10pm-4:59am
    var hour = randomNumber(22, 28);
    if (hour >= 24) {
      hour -= 24
    }
    return new Date(2001, 0 , 1, hour, minute); 

  } else {
    // All Hours
    const hour = randomNumber(0, 23);
    return new Date(2001, 0 , 1, hour, minute); 
  }
}


function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

export default App;
