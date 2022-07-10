function objectExample() {
  var person = {
    firstName: "John",
    lastName: "Doe",
    age: 27,
    getFullName: function () {
      return this.firstName + " " + this.lastName;
    },
    address: {
      building: "Villa Apartments",
      road: "Rue La Roi",
      city: "Paris",
    },
  };

  console.log(person);
  console.log("person.firstName :- ", person.firstName);
  console.log("person['lastName'] :- ", person["lastName"]);

  for (var prop in person) {
    console.log("FOR IN :- Key:-", prop, " -> Value:-", person[prop]);
  }
}
// objectExample();

function question() {
  var music = {
    rock: "guitar",
    classical: "violin",
  };

  var classical = "rock"; 
  console.log("music.classical :- ", music.classical);
  console.log("music[classical] :- ", music[classical]);
}

question();
