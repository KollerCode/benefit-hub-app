import React, { useState } from "react";
import Header from "./components/Header";
import Popup from "./components/Popup";
import Main from "./components/Main";


function App() {
  
  return (
    <div>
      <header>
        <Header />
      </header>
      <Main />
      {/* <Popup/> */}
    </div>
 
  );
}

export default App;
