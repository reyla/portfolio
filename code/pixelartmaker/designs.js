
/**
* @description builds table of cells based on user input for height and width
*/
function makeGrid() {
  const height = $('#inputHeight').val();
  const width = $('#inputWidth').val();
  const table = document.getElementById('pixelCanvas');
  // clear any existing grid cells
  $('#pixelCanvas').children().remove();
  // this loop adds table rows and cells to create the grid
  for (let x = 0; x < height; ++x) {
    const row = table.insertRow(0);
    for (let i = 0; i < width; ++i) {
      const cell = row.insertCell(0);
    }
  }
}


/**
* @description these functions only work once DOM is fully loaded
*/
document.addEventListener('DOMContentLoaded', function () {
  /**
  * @description submit button runs the grid function
  */
  $('#sizePicker').submit(function(event) {
    event.preventDefault();
    makeGrid();
  })
  /**
  * @description grid cell changes to selected color when user clicks on it
  */
  $('#pixelCanvas').on('click', 'td', function (){
    const color = $('#colorPicker').val();
    $(this).css('background-color', color);
  })
});
