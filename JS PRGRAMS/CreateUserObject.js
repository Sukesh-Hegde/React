function createUserObjects(ids, names, images) {
  const users = ids.map((id, index) => {
    return {
      id: id,
      name: names[index],
      image: images[index],
    };
  });

  return users;
}

const ids = [1, 2, 3];
const names = ["John", "Jane", "Alice"];
const images = ["john.jpg", "jane.jpg", "alice.jpg"];
const ans = createUserObjects(ids, names, images);
console.log(JSON.stringify(ans, null, 2));
