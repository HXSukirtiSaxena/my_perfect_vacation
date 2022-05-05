import image from './image.png';


import './App.css';
import QuestionGroup from "./QuestionGroup1.js";

function App() {
  const handleClick = () => {
    <QuestionGroup/>
  }
  return (
    <div className="App">
      <header className="App-header">
      <img src={image} alt="logo" />
        <p>
        Where to go in vacation?
        </p>
          <button onClick={handleClick}> Enter Here</button>
      </header>
      <QuestionGroup/>
    </div>
  );
}
export default App;







