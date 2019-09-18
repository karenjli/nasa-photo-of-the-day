import React from "react";
import "./App.css";
import DescriptionBox from "../src/Components/Description-component/descriptionbox"
import ImageBox from "../src/Components/Image-component/imagebox"
import SideBar from "../src/Components/Sidebar-component/sidebar"
import styled from "styled-components"




function App() {
  
  const Leftbox = styled.div`
    width: 25%;
    background-color: darkblue;
    padding: 2%;
  `;

  const Rightbox = styled.div`
      width: 75%;
      background-color: black;
      padding: 2%;
    `;
  
    const AboutPOD = styled.p `
        font-size: 12px;
        color: white;
        text-align: left;
        font-family: "Ubuntu"
      `


  return (
    <div className="App">
      <Leftbox>
         <SideBar /> 
         <AboutPOD>Discover the beauty of the universe with Photo of the Day by NASA. A new picture is posted every day with a description by a professional astronomer.</AboutPOD>
      </Leftbox>
      <Rightbox>
          <ImageBox />
          <DescriptionBox />
      </Rightbox>
    </div>
  );
}

export default App;
