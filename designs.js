// G.JAYANTH.
// JAVASCRIPT TASK.
// Select color input

function colourSelection(){

    const gridBox = document.getElementById("pixelCanvas");
    gridBox.addEventListener("click", function(e){
        var colorElement = document.getElementById("colorPicker");
        var cl = colorElement.value;
        var td = e.target.nodeName;
        if(td == "TD"){
            e.target.style.backgroundColor = cl;
        }
    });
}
// Select size input
var form = document.getElementById("sizePicker");
form.addEventListener("submit", function(event){
    event.preventDefault();
    var heightElement = document.getElementById("inputHeight");
    var height = heightElement.value;
    var widthElement = document.getElementById("inputWidth");
    var width = widthElement.value;
    makeGrid(height,width);
    colourSelection();

});

// When size is submitted by the user, call makeGrid()

function makeGrid(x,y) {

    // Your code goes here!
    // console.log(x);
    // console.log(y);

    var gridBox = document.getElementById("pixelCanvas");
    gridBox.innerHTML = ""; // clear the old table if already exist
    for (var i = 0; i < x; i++) {
        gridBox.insertAdjacentHTML("afterbegin",'<tr id="trow"></tr>'); // adding table row
        var tablerow = document.getElementById("trow");
        for (var j = 0; j < y; j++) {
            tablerow.insertAdjacentHTML("afterbegin",'<td></td>'); // adding table data cell
        }
        
    }



}
