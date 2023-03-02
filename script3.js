nombre=parseInt(prompt("Combien veux-tu d'étages ?"));

for(var count_star = 1; count_star <= nombre; count_star++)

{
  let str = "*";
  let multiStr = str.repeat(count_star);

  console.log(multiStr);
}

for(var count_dot = nombre; count_dot > 0; count_dot--)

{
  let dot = "*";
  let multidot = dot.repeat(count_dot);

  console.log(multidot);
}



















// function pyramid(n) {

 

//   for(let i=1; i<= n; i++){

//     let str = ' '.repeat(n-i);

//     let str2 = '*'. repeat(i*2 -1)

 

//     console.log(str + str2 + str);

//   }

// }

// pyramid(5);
