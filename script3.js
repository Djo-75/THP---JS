

let star = "*";
let dot = " ";

nombre=parseInt(prompt("Combien veux-tu d'étages ?"));


for(var count = 1; count <= nombre; count++)

{
  let multistar = star.repeat(count)

  let multispace = dot.repeat(nombre - count);
  
  console.log(multispace + multistar)
}

