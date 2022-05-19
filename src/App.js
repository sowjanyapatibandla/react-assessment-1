import React, { useState} from "react";
import Functionbased from "./Functionbased";
import Classbased from "./Classbased";

import './style.css'

function App() {
  const [show, setShow] = useState({state:false})
  const[showc, setShowc] = useState({state:false})
  const functionBased = () =>{
    show.state ? setShow({state:false}) : setShow({state:true})
  }
  const classBased = () =>{
      showc.state ? setShowc({state:false}) : setShowc({state:true})
  }
  return (
      <div className="styling">
        <h1>Styling Using Functional and Class Component</h1>
        <button onClick={ () => functionBased()} className = "function" >Div by using Functional Component</button>
        <button onClick={() => classBased()} itemID = "class">Div by using Class Component</button>
        {/* <Functionbased /> */}
        {show.state && <Functionbased /> }
        {showc.state && <Classbased />}
      </div>
  );
}


export default App;
