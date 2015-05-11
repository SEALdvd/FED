////$(document).ready();
//
//
//// assignment arguments
//function amount(){
//  var result = 0,
//    index = 0,
//    length = arguments.length;
//  while(index < length){
//    result += arguments[index];
//    index++;
//  }
//  return result;
//}
//
//console.log(amount(30));
//console.log(amount(20,20,30));
//
//
//
//
//// assignment array parameter
//function getArray(array,action) {
//    for (var i = 0; i < array.length; i++) {
//    action(array[i]);
//  }
//}
//
//var array = [20,20,30,40];
//getArray(array,console.log.bind(console)); //of alert



// assignment todolist
window.onload = function() {
  console.log("go");

  var clickFunction = function () {
    console.log("click");
    toDoListItem(document.getElementById("doen").value);
  }

  document.getElementById("submit").addEventListener("click", clickFunction);

  var toDoListItem = function (item) {
    var _toDoList = document.getElementById("todolijst");
    var liItem = document.createElement("li");
    liItem.value = item;
    liItem.innerHTML = item;
    _toDoList.appendChild(liItem);

    document.body.appendChild(_toDoList);


  }
}


