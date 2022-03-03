// Build a function that returns an array of integers from n to 1 where n>0.

const reverseSeq = n => {
  i = n
  arr = []
  do  {
    arr.push(i);
    i --;
  }
  while (i > 0);
  return arr
};
