import users from "./users.js";

const getSortedUniqueSkills = users =>
    users
        .map(user=>user.skills)
        .reduce((skillsAll, user) => [...skillsAll, ...user], [])
        .filter((elem, index, array) => array
        .indexOf(elem) === index)
        .sort((b, a) => b.localeCompare(a, 'en'));


console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]



