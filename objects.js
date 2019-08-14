// class User {
//     constructor(email, name) {
//         this.name = name;
//         this.email = email;
//         this.score = 0;
//     }
//     login() {
//         console.log(this.email + ' has login');
//         return this;
//     }
//     loggout() {
//         console.log(this.email + 'has logged out');
//         return this;
//     }
//     updateScore() {
//         this.score++;
//         console.log(this.email + ' score is now ' + this.score);
//         return this;
//     }
// }

// class Admin extends User {
//     deleteUser(user) {
//         users = users.filter(u => {
//             return u.email != user.email;
//         })
//     }
// }

// var userOne = new User('Alina','alinaantemir@gmail.com');
// var userTwo = new User('Tom', 'tom@gmail.com'); 
// var userThree = new Admin('Alina2', 'alinaantemir@gmail.com');

// var users = [userOne, userTwo, userThree];

// userThree.deleteUser(userTwo);

// function User(email, name) {
//     this.email = email;
//     this.name = name;
//     this.online = false;
// }

// User.prototype.login = function () {
//     this.online = true;
//     console.log(this.email + ' has logged in');
// }

// User.prototype.logout = function () {
//     this.online = false;
//     console.log(this.email + ' has logged out');
// }

// function Admin (...args) {
//     User.apply(this, args);
//     this.role = 'coder';
// }

// Admin.prototype = Object.create(User.prototype);

// Admin.prototype.deleteUser = function (u) {
//     users = users.filter(users => {
//         return userOne.email != u.email;
//     })
// }

// var userOne = new User('Alina','alinaantemir@gmail.com');
// var userTwo = new User('Tom', 'tom@gmail.com'); 
// var joseph = new Admin('Joseph', 'joseph@gmail.com');


// var users = [userOne, userTwo, joseph];

// console.log(joseph);
// console.log(userOne);
// console.log(userTwo);
// userTwo.login();
// userTwo.logout();
// joseph.login();
// joseph.logout();


