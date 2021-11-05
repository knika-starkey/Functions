let func = [
  function (x) {
    return x * x;
  },
  function (x) {
    return x * x * x;
  },
  Math.cos,
  Math.sin,
];
function printTable(from, to, step, func) {
  if (func === undefined) {
    return;
  }
  from = from;
  to = to;
  step = step || 1;
  document.write("<table border='1' cellspacing='0'>");
  for (var x = from; x <= to; x += step) {
    document.write("<tr>");
    document.write("<td>" + x + "</td>");
    document.write("<td>" + func(x) + "</td>");
    document.write("</tr>");
  }
  document.write("</table>");
}
let num = prompt(" 0 - квадратичная, 1 - степенная, 2 - косинус, 3 - синус");
printTable(-10, 10, 1, func[num]);
