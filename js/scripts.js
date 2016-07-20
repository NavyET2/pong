//business logic
var outputNumbers = [];
//main array

function pingPong(input) { //creating function pingPong. input is a variable that will be fully defined later in the user form "game"
  for (var list=1; list <= input; list+=1) { //var list create, var input to define list size
    if(list % 15 === 0) { //pushing/changing "pingpong" instead of values (intergers) divisible by 15
      outputNumbers.push("pingpong");
    } else if (list % 3 === 0) { //pushing/changing ping instead of values (intergers) divisible by 3 that do not satify pingPong "if"
      outputNumbers.push("ping");
    } else if (list % 5 === 0) { //pushing/changing pong instead of values (intergers) divisible by 5 that do not satify pingPong "if"
      outputNumbers.push("pong");
    } else { //else is a catch-all. it is used if no other parameter is satisfied. in this case it showing an integer.
      outputNumbers.push(list); //if no paramter (via if/else if) for pingPong, ping, or pong is met, the value (integer) is unchanged in the list
    }
  }
}

$(document).ready(function() {
  $("form#game").submit(function(event) { //calls upon form "game" in index.html. activated with submit function from game form
    event.preventDefault(); //stops the page from refreshing after form submit execution
    var input = parseInt($("input#userInput").val()); //sets the variable input to that of the integer inputted from input id userInput in index.html
    pingPong(input); //variable input from user input in game form is executed while calling upon the the function pingPong from the business logic

    for (var list = 0; list < outputNumbers.length; list ++) { //calls upon length of string outputNumbers, increment
      $("ul#outputNumbers").append("<ul>" + outputNumbers[list] + "</ul>"); //outputNumbers overrides list in array sections where pingpong, ping and pong are present
    } //appends list into the unordered list id outputNumbers in index.html

    console.log(outputNumbers); //outputs array in console log. added for troubleshooting purposes
    // alert(outputNumbers); //only if you want to see it unformatted and ugly in an alert
  });
});
