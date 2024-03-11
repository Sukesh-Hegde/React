function mapContactsToCompanies(contacts) {
  return contacts.reduce(function (obj, contact) {
    if (obj[contact.company] == undefined) obj[contact.company] = [];
    obj[contact.company].push(contact.name);
    return obj;
  }, {});
}
const contacts = [
  { name: "Alice", company: "ABC Inc." },
  { name: "Bob", company: "XYZ Corp." },
  { name: "Charlie", company: "ABC Inc." },
];

const ans = mapContactsToCompanies(contacts);

console.log(JSON.stringify(ans, null, 2));

