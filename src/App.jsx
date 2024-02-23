import { useState,useRef } from 'react';
import CountDownTimer from './countdown';
import "./App.css"
import {Button} from "@nextui-org/react";

function App() {
  const [targetDate, setTargetDate] = useState('');
  const targetDateRef = useRef(null);

  function handleSubmit() {
    const selectedDate = targetDateRef.current.value;
    setTargetDate(selectedDate);
  }

  function handleReset(){
    setTargetDate("")
  }
  
  return (
    <div className='container'>
      <h1 className='title'>COUNTDOWN TIMER</h1>
      <div className='form-group'>
      <h3 className='header3'>Set Date & Time</h3>
      <input type="datetime-local" ref={targetDateRef} />
      </div>
      <div className='countdown-display'>
      {targetDate && <CountDownTimer targetDate={targetDate} />}
      </div>
      <div className='button-group'>
      <Button onClick={handleReset} className='reset-button'color="black" variant="shadow"> Reset</Button><br />
      <Button onClick={handleSubmit} className='submit-button'>Submit</Button>
      </div>
      

      
    </div>
  );
}

export default App;
