import React from 'react';

/** ColorForm
 * 
 *  * App -> ColorsList -> Color, ColorForm
 */
function ColorForm({addColor}) {
  console.log('<ColorForm />')

  
  return (
    <div className="ColorForm">
      <form onSubmit={addColor} id="add-color-form">

        <label htmlFor="choose-color">Choose a color: </label>
        <input type="color" id="choose-color-input" name="choose-color" /> <br />

        <button>Submit Color</button>
      </form>
    </div>
  );
}

/*
  /colors/new (display form to select color, then redirect to colors index )
  /colors/:color (display color in all its glory)
  /colors (list of all available colors)
  /colors/whatever (redirect to /colors) (TODO: branch inside colors/:colors)
*/

export default ColorForm;