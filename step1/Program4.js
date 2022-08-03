function totalCount(inputArr, multiArr) {
  let count = 0;
  for (let i = 0; i < multiArr.length; i++) {
    for (let j = 0; j < inputArr.length; j++) {
      if (inputArr[j] % multiArr[i] == 0) {
        count++;
      }
    }
    console.log(multiArr[i] + ":" + count);
    count = 0;
  }
}
totalCount([1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30], [1, 2, 3, 4, 5, 6, 7, 8, 9])