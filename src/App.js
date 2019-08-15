import React, {components, useState} from "react";
import "./App.css";
import DescriptionBox from "../src/Components/Description-component/descriptionbox"
import ImageBox from "../src/Components/Image-component/imagebox"
import SideBar from "../src/Components/Sidebar-component/sidebar"

function App() {
  



  return (
    <div className="App">
      <div className = "leftBox">
        <SideBar /> 
         <DescriptionBox />
      </div>
        <div className = "rightBox">
          <ImageBox />
        </div>
    </div>
  );
}

export default App;
