import './App.css';
import React from "react";
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Feed from './Pages/Feed/Feed';
import Widget from './Pages/Widget/Widget';
import Login from './Pages/Login/Login';
import {useStateValue} from "./StateProvider";

function App() {

  const [{user}, dispatch]= useStateValue();
  
  return (
    <div className="app">
    {!user ? (
      <Login  />
    ) : (
      <React.Fragment>
      <Header  />

      <div className="app__body">
        <Sidebar />
        <Feed  />
        <Widget  />
      </div>
      </React.Fragment>
    )}
     
    </div>
  );
}

export default App;
