// promise :- if you order any food from any site to deliver it to your place that order record will be the  promise.
// Value of the promise :-  food will be the value of that promise.

// Delivered  -> Fulfilled
// In tranist -> Pending
// Cancelled -> Rejected

// const promise = new Promise((resolve,reject) => {....});

const myPromise = (number) => {
  return new Promise((resolve, reject) => {
    if (number > 1) {
      resolve("Hello, I am positive number!");
    } else {
      reject("I failed some times");
    }
  });
};

myPromise(-2).then(
  (success) => console.log(success),
  (error) => console.log(error)
);
