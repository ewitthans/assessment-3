$("document").ready(function colorFunction() {
  var variable;
  const change = change.Number;

  let result = $("#variable").html();
  variable = +change;
  if (change >= 0) {
    result =
      result + '<div class="positive"> {{ stockData.change }} <div><br />';
  } else {
    result =
      result + '<div class="negative"> {{ stockData.change }} <div><br />';
  }
  $("#variable").html(result);
});
