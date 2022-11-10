const beers = [
  {
    _id: "1",
    brewery: "Athletic Brewing",
    name: "Run Wild",
    beerType: { _id: "5b21a", name: "IPA" },
    numberInStock: 6,
    price: 2.5,
    liked: true
  },
  {
    _id: "2",
    brewery: "Athletic Brewing",
    name: "Upside Dawn",
    beerType: { _id: "5b21c", name: "Ale" },
    numberInStock: 4,
    price: 3,
    liked: true

  },
  {
    _id: "3",
    brewery: "Athletic Brewing",
    name: "Free Wave",
    beerType: { _id: "5b21a", name: "IPA" },
    numberInStock: 10,
    price: 4,
    liked: true
  },
  {
    _id: "4",
    brewery: "St Pauli Girl",
    name: "NA Brew",
    beerType: { _id: "5b21d", name: "Hefeweisen" },
    numberInStock: 2,
    price: 5,
    liked: true

  },
  {
    _id: "5",
    brewery: "Busch",
    name: "Non-alc Brew",
    beerType: { _id: "5b21b", name: "Lager" },
    numberInStock: 12,
    price: 2,
    liked: true
  },
  {
    _id: "6",
    brewery: "O'Doul's",
    name: "Non-alc brew",
    beerType: { _id: "5b21b", name: "Lager" },
    numberInStock: 0,
    price: 2.5,
    liked: true

  },
  {
    _id: "7",
    brewery: "Lagunitas",
    name: "IPNA",
    beerType: { _id: "5b21a", name: "IPA" },
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
