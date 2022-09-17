import React from "react";
import Picture from "./Components/Picture";
import Details from "./Components/Details";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

import "./index.css";

function App(){
  return(
    <div className="container">
      <Picture />
      <Details />
      <Main />
      <Footer />
    </div>
  )
}

export default App;