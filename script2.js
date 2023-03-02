

var fact=1,nombre,i;

nombre=parseInt(prompt("Donnez un nombre entier :"));

if(nombre==0)
{
console.log("0!=1");
}
if(nombre>=1)

{
for(i=1;i<=nombre;i++)
{
fact=fact*i;
}
console.log(nombre+"!"+"="+fact);
}

let statement = `Le résultat est : ${fact}`;
console.log(statement);

/*  fact = va stocker la valeur factorielle du "nombre" de l'user 
    nombre = initialise l'input user
    i = l'itérateur, le compteur quoi
*/