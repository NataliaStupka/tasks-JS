// тест на знание JS
// -----------------------------------// -----------------------------------
// цыкл while
    // let clientCounter = 18;
    // const maxClients = 25;

    // while (clientCounter < maxClients) {
    //   console.log(clientCounter);
    //   clientCounter += 1;
    // }
    //18, 19, 20, 21, 22, 23, 24
// -----------------------------------// -----------------------------------

// метод (reduce)
// const sum = (...numbers) => numbers.reduce((acc, number) => acc + number, 2);
// const answer = sum(1, 5, 20, 10);
// console.log(answer); //38 (2+1=3+5=8+20=28+10=38)
// -----------------------------------// -----------------------------------

// const name = 'bob';
// const age = 20;
// const obj = { name, age };

// console.log(obj);     // {name: 'bob', age: 20}
// -----------------------------------// -----------------------------------


// .split
// const [first, , third] = 'hello sweet world'.split(' '); // ['hello', empty, 'world']
// console.log(first, third);   // hello world
// -----------------------------------// -----------------------------------

// const dog = { name: 'Poly' };

// function showDogName() {
//   console.log(this.name);
// }

// const boundShowDogName = showDogName.bind(dog);

// boundShowDogName();  //Poly
// -----------------------------------// -----------------------------------

// const fn = (arr, val) => arr.filter(el => el > val); //arr - это array

// console.log(fn([1, 2, 3, 4, 5], 3)); // [4, 5]
// -----------------------------------// -----------------------------------

// const fn = arr => arr.map(el => {
//   const item = document.createElement('div');
//   item.textContent = el;

//   return item;
//  });

// console.log(fn(['html', 'css', 'js', 'react']));
// -----------------------------------// -----------------------------------
const person = {
  age: 10,
  setAge(newAge) {
    this.age = newAge;
  },
  refreshAge(userId) {
    fetchAgeFromDb(function(newAge) {
      this.setAge(newAge);
    });
  },
};

function fetchAgeFromDb(cb) {
 cb(20);
}

person.refreshAge();
console.log(person.age);





