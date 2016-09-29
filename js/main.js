(function(){
  "use strict";

  // console.log(items);
  // ###########################################################

  // 1. Show me how to calculate the average price of all items.
  //    Please console.log the average.

  var allPrices = items.map(function(item){
    return item.price; // return the avg
  });

  var sumPrice = allPrices.reduce(function(prev, current){
    return prev + current;
  });

  var avgPrice = sumPrice / allPrices.length;

  // console.log(allPrices);
  console.log('The average price is', avgPrice);

  // ###########################################################

}());






// ################
// in class demos
// ################

// var furniture = ['sofa', 'desk', 'lamp'];
//
// function forEach(array, callback){
//   for(var i = 0; i < array.length ;i++){
//     callback(array[i], i, array);
//   }
// }
//
// function map(array, callback){
//   var newArray = [];
//
//   for(var i = 0; i < array.length ;i++){
//     newArray.push(callback(array[i], i, array));
//   }
//
//   return newArray;
//
// }
//
// // function buyFurniture(item, index, array){
// //     total = array.length;
// //     console.log('Pick up from the store:', index + 1 + '/' + total, item);
// // }
// //
// // forEach(furniture, buyFurniture);
//
// furniture.forEach(function(item, index, array){
//   total = array.length;
//   console.log('Pick up from the store:', index + 1 + '/' + total, item);
// });
//
// var people = ['Marshall', 'Kaila', 'Martha'];
//
// people.forEach(function(person){
//   console.log(person, "is awesome!");
// });
//
// var peoplePraise = map(people, function(person){
//   return person + ' is awesome!';
// });
//
// console.log(peoplePraise);
//
// var multiplyByThree = map([1, 2, 3,], function(number){
//   return number * 3;
// });
//
// console.log(multiplyByThree);
//
// var multiplyByFour = [1, 2, 3,].map(function(number){
//   return number * 4;
// });
//
// console.log(multiplyByFour);
//
// var sum = [1, 2, 3, 4].reduce(function(previousValue, currentValue){
//   console.log('previousValue', previousValue);
//   console.log('currentValue', currentValue);
//   return previousValue + currentValue;
// }, 5);
//
// console.log(sum);
