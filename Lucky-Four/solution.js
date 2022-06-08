function luckyFour(nums){
  let res = 0;
  const numsTmp = nums.toString();
  const numsSpli = numsTmp.split('');
  numsSpli.forEach(n => {
    if(Number(n) === 4){
      res++;
    }
  })
  return res;
}

console.log(luckyFour(447474));
console.log(luckyFour(228));
console.log(luckyFour(6664));
console.log(luckyFour(40));
console.log(luckyFour(81));