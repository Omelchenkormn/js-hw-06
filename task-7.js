import users from "./users.js";


const calculateTotalBalance = users => users.reduce((total, user) => total + user.balance, 0);
  // твой код
// const likes = tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

console.log(calculateTotalBalance(users)); // 20916