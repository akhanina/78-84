// 78
// let arr = [1, 2, 3, 'a', 'b', 'c'];
// let jsonString = JSON.stringify(arr);
// console.log(jsonString); // Выведет "[1,2,3,"a","b","c"]"


// let obj = {
//     a: 1,
//     b: 2,
//     c: 'eee',
//     d: true,
//   };
//   let jsonString = JSON.stringify(obj);
//   console.log(jsonString); // Выведет '{"a":1,"b":2,"c":"eee","d":true}'

  
//   let obj = {
//     a: ['a', 'b', 'c'],
//     b: '111',
//     c: 'eee'
//   };
//   let jsonString = JSON.stringify(obj);
//   console.log(jsonString); // Выведет '{"a":["a","b","c"],"b":"111","c":"eee"}'

  
// 79
// let json = '[1,2,3,4,5]';
// let arr = JSON.parse(json);
// let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // Выведет 15


// let json = `{
//     "data1": [1,2,3],
//     "data2": [4,5,6],
//     "data3": [7,8,9]
//   }`;
//   let dataObject = JSON.parse(json);
//   let sumData1 = dataObject.data1.reduce((total, num) => total + num, 0);
//   let sumData2 = dataObject.data2.reduce((total, num) => total + num, 0);
//   let sumData3 = dataObject.data3.reduce((total, num) => total + num, 0);
//   let totalSum = sumData1 + sumData2 + sumData3;
  
//   console.log(totalSum); // Выведет 25
  

// let json = '["user1","user2","user3","user4","user5"]';
// let usersArray = JSON.parse(json);
// let userList = document.createElement('ul');
// usersArray.forEach(user => {
//   let listItem = document.createElement('li');
//   listItem.textContent = user;
//   userList.appendChild(listItem);
// });
// document.body.appendChild(userList);


// let json = `[
//     {
//       "name": "user1",
//       "age": 25,
//       "salary": 1000
//     },
//     {
//       "name": "user2",
//       "age": 26,
//       "salary": 2000
//     },
//     {
//       "name": "user3",
//       "age": 27,
//       "salary": 3000
//     }
//   ]`;
//   let workers = JSON.parse(json);
//   let table = document.createElement('table');
//   let headerRow = document.createElement('tr');
//   headerRow.innerHTML = '<th>Name</th><th>Age</th><th>Salary</th>';
//   table.appendChild(headerRow);
//   workers.forEach(worker => {
//     let row = document.createElement('tr');
//     row.innerHTML = `<td>${worker.name}</td><td>${worker.age}</td><td>${worker.salary}</td>`;
//     table.appendChild(row);
//   });
//   document.body.appendChild(table);


//   80
//   let json = ['user1', 'user2', 'user3', 'user4', 'user5'];
// let jsonString = JSON.stringify(json);
// console.log(jsonString); // Выведет '["user1","user2","user3","user4","user5"]'


// function getCitiesAsJson() {
//     let cities = document.querySelectorAll('ul > li');
//     let cityArray = Array.from(cities);
//     let jsonString = JSON.stringify(cityArray);
//     console.log(jsonString);
// }


// function getDataAsJson() {
//     let rows = document.getElementById('myTable').rows;
//     let data = [];
//     for (let i = 1; i < rows.length; i++) {
//       let row = rows[i];
//       let item = {};
//       for (let j = 0; j < row.cells.length; j++) {
//         let cell = row.cells[j];
//         switch (j) {
//           case 0: item.surname = cell.innerHTML; break;
//           case 1: item.name = cell.innerHTML; break;
//           case 2: item.patronymic = cell.innerHTML; break;
//         }
//       }
//       data.push(item);
//     }
//     let jsonString = JSON.stringify(data);
//     console.log(jsonString); // Выводим JSON в консоль
//   }


//   81
//   let json = '["user1","user2","user3","user4","user5"]';
//   let arr = JSON.parse(json);
//   arr.push("user6");
//   let res = JSON.stringify(arr);
//   console.log(res);


//   let json = '["user1","user2","user3","user4","user5"]';
//   let arr = JSON.parse(json);
//   arr[1] = "new_user2";
//   let res = JSON.stringify(arr);
//   console.log(res);


//   let json = `[
//     {
//       "name": "user1",
//       "age": 25,
//       "salary": 1000
//     },
//     {
//       "name": "user2",
//       "age": 26,
//       "salary": 2000
//     },
//     {
//       "name": "user3",
//       "age": 27,
//       "salary": 3000
//     }
//   ]`;
//   let arr = JSON.parse(json);
//   arr.push({
//     "name": "user4",
//     "age": 28,
//     "salary": 4000
//   });
//   let res = JSON.stringify(arr);
//   console.log(res);
  

// 84
// Сохранение чисел в локальное хранилище
// localStorage.setItem('number1', '10');
// localStorage.setItem('number2', '20');
// localStorage.setItem('number3', '30');

// let number1 = localStorage.getItem('number1');
// let number2 = localStorage.getItem('number2');
// let number3 = localStorage.getItem('number3');

// let sum = parseInt(number1) + parseInt(number2) + parseInt(number3);

// console.log('Сумма чисел:', sum);
