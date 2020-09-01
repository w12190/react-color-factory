import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import ColorForm from './ColorForm';
// import { Switch, Route, Redirect, /*Router, */BrowserRouter,/* useParams */} from "react-router-dom"

/** ColorsList
 * 
 * State:
 * - allColors: an array of all colors
 * Format: [{name: }]
 * 
 *  * App -> ColorsList -> Color, ColorForm
 */
function ColorsList() {
  console.log('<ColorsList />')

  // State
  const [allColors, setAllColors] = useState(['#214d69', '#6a2f2f', '#55cf44'])


  function addColor(evt) {
    console.log('addColor()')
    evt.preventDefault()

    setAllColors(oldAllColors => [...oldAllColors, document.getElementById('choose-color-input').value])
  }


  //Renders list of links to all colors
  return (
    <div className="ColorsList">
      {allColors.map(color => { return <div><Link to={`/colors/${color}`}>{color}</Link> <br /></div> })}
      
      <ColorForm addColor={addColor} />
    </div>
  );
}


export default ColorsList;