import users from "./users.js";


// const getUsersWithGender = (users, gender) =>
//     users.filter(user => user.gender === gender);
//   // твой код

// console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]





const getUsersWithGender = (users, gender) => {
    const genderMale = users.filter(user => user.gender === gender);
    return genderMale.map(user => user.name)};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]