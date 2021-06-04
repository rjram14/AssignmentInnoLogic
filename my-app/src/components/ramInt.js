function getval(arr) {
  let UniqueArr = [];
  for (let i of arr) {
    if (UniqueArr.indexOf(i) === -1) {
      UniqueArr.push(i);
    }
  }
  console.log(UniqueArr);
}

const array = [1, 2, 2, 3, 6, 6, 7, 6, 8];
getval(array);
