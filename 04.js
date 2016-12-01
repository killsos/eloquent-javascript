var scope = "global";

function checkScope(){
  var scope = "local";
  function f(){
    return scope;
  }

  return f;
}

console.log(checkScope()());;

var test = checkScope();

console.log(test());
