import "./styles.css";
import $ from "jQuery";

var blah = "0123456789";
console.log("String var len: " + blah.length); //10
console.log("String var substring: " + blah.substring(5)); //56789
console.log("String var charAt: " + blah.charAt(5)); //5
console.log(
  "String var substring with indexOf: " + blah.substring(blah.indexOf("5"))
); //56789

var ary = [0, 1, 2, 5, 4, 3, 6, 7, 8, 9];
console.log("Array: " + ary);
console.log("Array len: " + ary.length);
console.log("Reversed Array: " + ary.reverse());
console.log("Sorted Array: " + ary.sort());

var jary = $(ary);
jary.each(function(i) {
  console.log("Array element: " + i);
});

$(document).ready(function() {
  $("h1").css("backgroundColor", "green");
  $("button,input,div#divID1").each(function(idx, el) {
    console.log("Element " + idx + " has the following html: " + $(el).text());
  });
  $("div#divID1").each(function(idx, el) {
    $(el).html("Loaded text for divID1");
  });
  $("div#divID2")
    .first()
    .html("Loaded text for divID2");
  $("button").bind("click", function() {
    $("div#divID1")
      .first()
      .html($("input").val());
  });
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(json =>
      $("div#divID2")
        .first()
        .html("From fetch: " + json.id.toString())
    );
  $.getJSON("https://jsonplaceholder.typicode.com/todos/1", function(
    json,
    statusTxt,
    xhr
  ) {
    if (statusTxt == "success")
      $("div#divID1")
        .first()
        .html("From getJSON: " + json.title);
    if (statusTxt == "error")
      this.html("Error: " + xhr.status + ": " + xhr.statusText);
  });
});
