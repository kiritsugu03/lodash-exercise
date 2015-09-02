var _ = require('lodash');

var people = [
  {'name': 'Corn', 'age': 22, 'active': true},
  {'name': 'Dan', 'age': 25, 'active': true},
  {'name': 'Celine', 'age': 21, 'active': true,},
  {'name': 'Nikkol', 'age':22, 'active': true}
];
//
// function  timesThree(n) {
//   return n * 3;
// }
//
// _.map([1,2], timesThree);
// _.map({'a': 1, 'b': 2}, timesThree);
//
// _.filter(people, 'active', false);
// _.pluck(_.filter(users, 'active', false), 'name');

console.log("_.isEmpty(1): " + _.isEmpty(1));
console.log("_.camelCase(helloworld): " + _.camelCase("helloworld"))
console.log("_.endsWith(abc, b): ", _.endsWith('abc', 'c'));

var string = "hello world";
console.log(string.split(" ").map(_.capitalize).join());

var someData = [
  'abcsdfgh',
  'lkjhgfd',
  'abczxcvbn'
];

console.log("use of partial: " + _.filter(someData, _.partial(_.startsWith,_, "abc", 0, _)));
console.log("use of parseInt: " + _.map(['6', '12', '0909'], _.parseInt));
console.log("use of trim: " + _.trim("-_-v-_-", '-_-'));
console.log("use of trunc: " + _.trunc('hello world what is going on?', {
  'length': 10
}));

console.log("use of words: " + _.words("hello world! I am awesome"));
console.log("use of difference: " + _.difference([1,2,3,4,5,6,], [0,9,8,7,6,5]));
console.log("use of uniq: " + _.uniq([2,12,12,2,12,333,1,5,6,7,8]) );
console.log("use of uniq for issorted: " + _.uniq([1,2,3,4,5,7,0], true));
console.log("use of without: " + _.without([1,2,3,4,5,6,7], 2,3));
console.log("use of isArray: " + _.isArray([1,2,3]));
