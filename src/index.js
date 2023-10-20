import { useState } from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";

function App() {
  const [dogImg, setDogImg] = useState("");
  const [buttonState, setButtonState] = useState(false);
  const [showPic, setShowPic] = useState(false);
  

  const toggleImage = () => {
	setButtonState(true);
	  fetch('https://dog.ceo/api/breeds/image/random', { method: 'GET' })
	  .then((response) => response.json()) 
	  .then((commits) => {
      setDogImg(commits.message);
	  setButtonState(false);
	  setShowPic(true);
		  })
  };
  

  return (
    <div>
      <h1>React Image Display</h1>
	  <p>
		<button onClick={toggleImage} id="DogDisplay" disabled={buttonState}>Show Image</button>
	  </p>
	  <div className="img-container">
	<p>
	  {(showPic && <img src={dogImg} alt="External Image" id="PicDog" />)}
	</p>
	</div>
	</div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;