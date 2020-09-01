import React from 'react';
import { Switch, Route, Redirect, /*Router, */BrowserRouter,/* useParams */} from "react-router-dom"
import './App.css';
import Nav from './Nav';
import ColorsList from './ColorsList';
import ColorForm from './ColorForm';
import Color from './Color';




/** App
 * 
 * App -> ColorsList -> ColorForm, Color
 */
function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Nav />
        <Switch>
          <Route path="/colors/new"> <ColorForm /></Route>
          <Route path="/colors/:color"> <Color /></Route>
          <Route exact path="/colors" ><ColorsList />  </Route>
          <Redirect to="/colors"/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}


export default App;