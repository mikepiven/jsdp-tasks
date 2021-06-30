export const maxItemAssociation = (
  payload: Array<Array<string>>
): Array<string> => {
  return [];
  // [a,b,c]
};

const payload = [
  ["a", "b"],
  ["a", "c"],
  ["d", "e"]
];
console.log(maxItemAssociation(payload));
