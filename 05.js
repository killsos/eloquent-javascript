var scope = "global";

function checkScope(){
  var scope = "local";
  function f(){
    console.log(scope);
    return this;
  }
  return f;
}


var test = checkScope();

console.log(test());
