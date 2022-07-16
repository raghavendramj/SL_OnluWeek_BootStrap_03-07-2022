var four_val = 12;
topFunction();
function topFunction() {
  var three_val = 10;
  innerFunction();
  function innerFunction() {
    var two_val = 8;
    lastInnerFunction();
    function lastInnerFunction() {
      var one_val = 6;
      console.log("one_val -> ", one_val, "two_val -> ", two_val);
      console.log("three_val -> ", three_val, "four_val -> ", four_val);
    }
  }
}
