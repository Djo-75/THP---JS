const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

const between = entrepreneurs.filter(element => {
return element.year >= 1970 && element.year < 1980;
})

let statement1 = `Filtre 70s`;
console.log(statement1);
console.log(between);


const entrepreneursWithoutYear = entrepreneurs.map(obj => ({ 
  first: obj.first, last: obj.last }))

let statement2 = `Annee en moins`;
console.log(statement2);
console.log(entrepreneursWithoutYear)

const currentYear = new Date().getFullYear(); // get the current year

const entrepreneursWithAge = entrepreneurs.map(obj => {
    const age = currentYear - obj.year;
    return { first: obj.first, last: obj.last, year: obj.year, age }; // équivaut à { ...obj, age} 
});

let statement3 = `Age en plus`;
console.log(statement3);
console.log(entrepreneursWithAge)



const sort = entrepreneurs.sort(function(a,b) {
  let fa = a.last.toLowerCase(),
  fb = b.last.toLowerCase();

if (fa < fb) {
  return -1;
}
if (fa > fb) {
  return 1;
}
return 0;
});

let statement4 = `Tri alphab`;
console.log(statement4);
console.log(sort);