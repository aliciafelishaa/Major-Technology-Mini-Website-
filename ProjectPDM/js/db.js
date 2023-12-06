export let db = [
  {
    email: "alicia@gmail.com",
    password: "123",
  },
  {
    email: "joseph@gmail.com",
    password: "999",
  },
];

export function storeData(newData) {
  console.log(newData);
  db.push(newData);
  console.log(db);
}
