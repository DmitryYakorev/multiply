module.exports = function multiply(first, second) {
  let s="";
s=BigInt(first)*BigInt(second);
s=String(s);
console.log('s=',s);
return s;

}
