import React from 'react';
import { Switch, Route, Redirect, BrowserRouter} from "react-router-dom"

/** Color
 * 
 *  * App -> ColorsList -> Color, ColorForm
 */
function Color() {
  console.log('<Color />')


  //use useParams() hook? to get the url param for color
  return (
    <div className="Color">
      <p> This is Color</p>
    </div>
  );
}

/*
  /colors/new (display form to select color, then redirect to colors index )
  /colors/:color (display color in all its glory)
  /colors/whatever (redirect to /colors) (TODO: branch inside colors/:colors)
*/

export default Color;