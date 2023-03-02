const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

  let array = Object.values(books)
 
  //Trouve le livre avec l'ID: 873495 ;

    check_book = array.find(item => item.id === 873495);
    console.log(`Le livre avec l'ID 873495 est ${check_book.title}`)

  //Supprime le livre avec l'ID: 133712 

//   remove_book = array.find(item => item.id === 133712);
//   new_array = books.splice(remove_book,1)

//   console.log(new_array)

  let max = Math.max(...array.map(book => book.rented))
  var result_max = books.find(item => item.rented === max)
  
  console.log(`Le bouquin le plus loué est ${result_max.title}`)

  let min = Math.min(...array.map(book => book.rented))
  var result_min = books.find(item => item.rented === min)

  console.log(`Le bouquin le moins loué est ${result_min.title}`)


  const idToDelete = 133712;
  const newBooks = books.filter(book => book.id !== idToDelete);
  console.log(newBooks);

  
  const sort = newBooks.sort(function(a,b) {
    let fa = a.title.toLowerCase(),
    fb = b.title.toLowerCase();
  
  if (fa < fb) {
    return -1;
  }
  if (fa > fb) {
    return 1;
  }
  return 0;
  });
  
  let statement6 = `Tri alphab`;
  console.log(statement6);
  console.log(sort);