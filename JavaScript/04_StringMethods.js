function indexOfAndSearchMethods() {
  let str = "hi There! How are you?";
  let regEx = /[A-Z]/;
  let index = str.search(regEx);

  console.log("index :- ", index);

  str = "finding substring in string";
  let currIndex = str.indexOf("str");
  console.log("currIndex :- ", currIndex);

  str = "JS indexOf";
  let substr = "js";
  index = str.indexOf(substr);
  console.log("(JS indexOf).indexOf('js') :- ", index);
}

function subStringMethods() {
  var str = "my favorite country is India";
  //first param -> start-index, second -> end-index
  console.log("str.substring(3, 11) -> ", str.substring(3, 11));

  //first param -> start index, second -> length
  console.log("str.substr(3, 11) -> ", str.substr(3, 11));
  console.log("str.substr(3, 8) -> ", str.substr(3, 8));
}
// subStringMethods();

function replaceMethods() {
  var str =
    "my favorite city is bangalore and bangalore is a nice place to hang out!";
  var out = str.replace(/bangalore/, "kolkota"); 
  console.log("replace /bangalore/ :- ", out);

  out = str.replace(/bangalore/g, "kolkota"); 
  console.log("replace /bangalore/g :- ", out);
}
// replaceMethods();


function sliceMethods(){
    var str = "my favorite country is India";
    console.log("str.slice(12, 19) :- ", str.slice(12, 19));
}
sliceMethods();

console.log("----------------------------------------------");
