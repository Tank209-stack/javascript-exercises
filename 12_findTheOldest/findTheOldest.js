const people =[
    {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  }, 
  {
    name :"Tanweer",
    yearOfBirth : 1020,
  },
]

const findTheOldest = function(persons) {
   let currentYear = new Date().getFullYear() 

   let olderPerson =  persons.reduce(( oldest,current)=>{
      let currentAge = (current.yearOfDeath || currentYear) - current.yearOfBirth;
      let oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;

        return currentAge > oldestAge ? current : oldest
    })
    return olderPerson
};
console.log(findTheOldest(people))
// Do not edit below this line
module.exports = findTheOldest;
