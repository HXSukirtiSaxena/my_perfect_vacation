import image from './image.png';
import { useState } from 'react'
import QuestionGroup1 from "./QuestionGroup1.js";
import './App.css';

function App() {
  const [ isAboutVisible, setIsAboutVisible] = useState(false)
  const [ isShown, setIsShown] = useState(true)
  const handleClick = () => {
    setIsShown(false)
    setIsAboutVisible(true)
  }
  return (

      <div className="App">
        <img src={image} alt="logo" />
          <h2> Let us help you decide where to go on vacation? </h2>
            {isShown ? <button id= 'btn' onClick={()=> handleClick()}> Enter Here  </button> : null}
            { isAboutVisible ?  <QuestionGroup1/> : null }
      </div>

  );
}
export default App;