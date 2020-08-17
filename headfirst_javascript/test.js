function final(x) {
  function addnum(num) {
    return num + x;
  }
  return final(addnum);
}
final(5);
addnum(3);
