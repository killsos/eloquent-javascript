var top = 1;

var add = function(){
  top++;
};

var addcopy = function(){
  top++;
};

add();

addcopy();

console.log(top);
