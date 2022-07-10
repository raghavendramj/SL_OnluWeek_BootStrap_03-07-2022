function hoistingTest(){
    console.log(number);
    console.log(a);
    console.log(b);
    var number;
    console.log(number);
    number = 23;
    console.log(number);
    var a = 10;
    var b = 20;
}

hoistingTest();