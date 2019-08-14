import React, {components, useState} from "react";
import "./App.css";
import DescriptionBox from "../src/Components/Description-component/descriptionbox"
import ImageBox from "../src/Components/Image-component/imagebox"

function App() {
  



  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
        
        
      </p>
      <ImageBox />
      <DescriptionBox />
    </div>
  );
}

export default App;
