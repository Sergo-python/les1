/*1) a) let element = document.getElementById ('content');
console.log (element);

b) let element = document.getElementById ('rules');
console.log (element1);

c)content.innerText = 'I dont know how to do that sorry';
d)rules.innerText = 'Я думал innerText для чогось другого,крч не додумався что так все просто,сидел мучался через JSON проганял';



e)content.style.backgroundColor = 'red'; // Найс в задания сказано каждому элементу поменять цвет, но класс какой или див , или айди не сказано.
rules.style.backgroundColor = 'red';

f)content.style.color = 'blue';
rules.style.color = 'blue';*/

/*i)let elements = document.getElementsByClassName('fc_rules');
console.log(elements);

for (i of elements) {
i.style.color = 'red';
}*/

/*i) Такого fc_rules нету а если даже прописать как в html то пробелы ж нельзя и оно их не считает.Найс домашка блять.

/*

let users = [{
  name: 'vasya',
  age: 31,
  status: false,
  address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
  name: 'petya',
  age: 30,
  status: true,
  address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
  name: 'kolya',
  age: 29,
  status: true,
  address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
  name: 'olya',
  age: 28,
  status: false,
  address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
  name: 'max',
  age: 30,
  status: true,
  address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
  name: 'anya',
  age: 31,
  status: false,
  address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
  name: 'oleg',
  age: 28,
  status: false,
  address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
  name: 'andrey',
  age: 29,
  status: true,
  address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
  name: 'masha',
  age: 30,
  status: true,
  address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
  name: 'olya',
  age: 31,
  status: false,
  address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
  name: 'max',
  age: 31,
  status: true,
  address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];

*/
/*for (let i = 0 ; i < users.length ; i++ ) {
let user = users[i];
let userDiv = document.createElement ('div');
let s = JSON.stringify (user);
console.log(s);
console.log(user);
userDiv.innerText = s;
document.body.appendChild(userDiv);
}*/


/*

for (let i = 0; i < users.length; i++) {
let user = users[i];
let userDiv = document.createElement ('div');
let addressDiv = document.createElement ('div');
let s = JSON.stringify (user);
let r = JSON.stringify (user.address);
userDiv.innerText = s;
addressDiv.innerText = r;
document.body.appendChild(userDiv);
document.body.appendChild(addressDiv);
}*/


/*
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [];
for (let i = 0; i < usersWithId.length; i++ ) {
    for (let s = 0; s < citiesWithId.length; s++) {
        if (usersWithId[i].id == citiesWithId[s].user_id ) {
            usersWithId[i].address = citiesWithId[s];

        }

    }
}
console.log (usersWithId);*/
