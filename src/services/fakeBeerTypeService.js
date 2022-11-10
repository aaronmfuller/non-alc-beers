export const beerTypes = [
    { _id: "5b21a", name: "IPA" },
    { _id: "5b21b", name: "Lager" },
    { _id: "5b21c", name: "Ale" },
    { _id: "5b21d", name: "Hefeweisen" }
  ];
  
  export function getBeerTypes() {
    return beerTypes.filter(b => b);
  }
  