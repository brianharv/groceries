$(document).ready(function() {
  $("#form0ne").submit(function(event){
    event.preventDefault();
    //$("button#submit").click(function() {
    //$("ul").prepend();
    
    
    let myListItem1 = $("input#item1").val();
    let myListItem2 = $("input#item2").val();
    let myListItem3 = $("input#item3").val();
    let myListItem4 = $("input#item4").val();
    let myListItem5 = $("input#item5").val();
    
    let myArray = [myListItem1, myListItem2, myListItem3, myListItem4, myListItem5];
    
    myArray.sort();
    
    $("#output").text(myArray);

    $("#form0ne").hide();

  });
});

/*

 //("#output2").text(myNewList);

let myNewList = [myArray];
    [myArray](function(word) {
      word.toUpperCase();
    });
    */
