function print() {
  setTimeout(() => {
    console.log('Welcome');
    setTimeout(() => {
      console.log('to');
      setTimeout(() => {
        console.log('the');
        setTimeout(() => {
          console.log('Joyland!');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

print();

// let text = "  helo world ";
// let Trimmed = text.trim();
// console.log(Trimmed);