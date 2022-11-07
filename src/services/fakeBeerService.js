const beers = [
    {
      _id: "1",
      brewery: "Athletic Brewing",
      name: "Run Wild",
      type: 'IPA',
      numberInStock: 6,
      price: 2.5,
      liked: true
    },
    {
        _id: "2",
        brewery: "Athletic Brewing",
        name: "Upside Dawn",
        type: 'Golden',
        numberInStock: 4,
        price: 3,
        liked: true
  
    },
    {
        _id: "3",
      brewery: "Athletic Brewing",
      name: "Free Wave",
      type: 'Hazy IPA',
      numberInStock: 10,
      price: 4,
      liked: true
    },
    {
        _id: "4",
        brewery: "St Pauli Girl",
        name: "NA Brew",
        type: 'Hefe',
        numberInStock: 2,
        price: 5,
        liked: true
  
    },
    {
        _id: "5",
        brewery: "Busch",
        name: "Non-alc Brew",
        type: 'Lager',
        numberInStock: 12,
        price: 2,
        liked: true
    },
    {
        _id: "6",
      brewery: "O'Doul's",
      name: "Non-alc brew",
      type: 'Lager',
      numberInStock: 0,
      price: 2.5,
      liked: true
  
    },
    {
        _id: "7",
        brewery: "Lagunitas",
        name: "IPNA",
        type: 'IPA',
        numberInStock: 7,
        price: 5,
        liked: true
  
    }
  ];
  
  export function getBeers() {
    return beers;
  }
  
  export function getBeer(id) {
    return beers.find(b => b._id === id);
  }
  