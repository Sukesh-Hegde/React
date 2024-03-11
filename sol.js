function main() {
    const array = [2, 4, 6, 2, 7, 8];
    const mappingFn = square;
    customMap(array, mappingFn);
  function customMap(array, mappingFn) {
    const mappedArray = [];

    for (let i = 0; i < array.length; i++) {
      const mappedValue = mappingFn(array[i]);
      mappedArray.push(mappedValue);
    }
  console.log(mappedArray);
  }

  console.log(customMap);
}
