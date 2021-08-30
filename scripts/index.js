function generateBlob(blob) {
  const percentage1 = genRandomNum();
  const percentage2 = genRandomNum();
  const percentage3 = genRandomNum();
  const percentage4 = genRandomNum();
  var percentage11 = 100 - percentage1;
  var percentage21 = 100 - percentage2;
  var percentage31 = 100 - percentage3;
  var percentage41 = 100 - percentage4;
  var borderRadius = `${percentage1}% ${percentage2}% ${percentage3}% ${percentage4}%`;
  $(blob).css("border-radius", borderRadius);
}

function genRandomNum() {
  let r;
  while (true) {
    r = Math.floor(Math.random() * 100) + 1;
    if (r > 50 && r < 90) {
      return r;
    }
  }
}
