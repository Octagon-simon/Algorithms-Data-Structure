function sumDigits(nums){
  let res = 0;
  const numsTmp = nums.toString();
  const numsSpli = numsTmp.split('');
  numsSpli.forEach(n => {
    res+=Number(n);
  })
  return res;
}

console.log(sumDigits(12345));
console.log(sumDigits(31203));
console.log(sumDigits(2123));