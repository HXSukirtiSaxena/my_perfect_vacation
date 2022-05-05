import image from './image.png';
import { useState } from 'react'

import './App.css';
import QuestionGroup1 from "./QuestionGroup1.js";

function App() {

  const [ isAboutVisible, setIsAboutVisible] = useState(false)
  const [show,setShow]=useState(true)

  return (
    <div className="App">

      <img src={image} alt="logo" />
        <p>
        Where to go in vacation?
        </p>
          <button id= 'btn' onClick={()=> setIsAboutVisible(true)}> Enter Here  </button> 
          { isAboutVisible ?  <QuestionGroup1/> : null }

    </div>
  );
}
export default App;







