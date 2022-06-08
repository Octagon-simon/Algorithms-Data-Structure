function buyGet(str) {
  const strSpli = str.split('');
  const inpCount = strSpli.length;
  //store jewel with its respective cost
  let count = {};
  //store jewels that has been applied a discount
  let dis = [];
  //store the cost
  let cost = 0;
  //store our discount bool
  let incr = true;

  let i = 0;
  while(i < strSpli.length){
    let n = strSpli[i];
    //check if jewel has been stored
    if(count[n] !== undefined){
      //check if discount has been applied to jewel
      if(dis.includes(n)){
        //leave the value as it is
        count[n] = count[n];
        //discount variable should remove the jewel 
          //so that next discount will be applied to it
        dis = dis.filter((d) => { return (d !== n) });
        //increment counter
        i++;
      }else{
        //jewel's cost should be its original cost + 1 (the discount)
        count[n] = count[n] + 1;
        //store jewel to the discount variable so that we 
          //will know that discont has been applied
        dis.push(n);
      }
    }else{
      //store jewel with its cost
      count[n] = 1;
    }
    i++;
  }
  //calculate all cost and return the value
  for(let key in count){
    cost+=Number(count[key]);
  }
  //return count
  return cost;
}

console.log(buyGet("ssss"));
console.log(buyGet("ssas"));
console.log(buyGet("sa"));
console.log(buyGet("s"));