import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      // document.title = 'TextUtils is Amazing Mode';
      // }, 1500);
      // setInterval(() => {
      // document.title = 'Install TextUtils Now';
      // }, 1000);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About" /> */}
      {/* <Navbar /> */}
      {/* <Router> */}
      <Navbar
        // title="TextUtils" aboutText="About"  mode={mode} toggleMode={toggleMode}/>
        title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />

      <div className="container my-3">
        {/* <Switch> */}
          {/* /users --> Component 1
          /users/home --> Component 2 */}
            {/* <Route exact path="/about">
              <About />
            </Route> */}
          
            {/* <Route exact path="/"> */}
             <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
            {/* </Route> */}
        {/* </Switch> */}
        
        {/* </Router> */}
      </div>
    </>
  );
}

export default App;
