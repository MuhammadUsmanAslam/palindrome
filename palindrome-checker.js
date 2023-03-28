module.exports = function (str) {
  str = str.replace(/[^a-zA-Z0-9 ]/g, '');
  str = str.replace(/\s/g, '');
  str = str.toLowerCase();
  temp = str;
  str = str.split("");
  str = str.reverse();
  str = str.join("");
  return str===temp;
}
