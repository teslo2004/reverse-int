module.exports = function reverse (n) {
    var num = n.toString().split("").reverse();
    if (num[num.length-1] == "-"){
      var res = num.slice(0,-1);
      return +res.join("")
    }
    return +num.join("");
  }