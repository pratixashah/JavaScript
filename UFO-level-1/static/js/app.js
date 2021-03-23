//from data.js
var tableData = data;
//console.log(tableData)

var table_ufo = d3.select("#ufo-table")
//console.log(table_ufo)

let thead_ufo = table_ufo.select("thead tr").selectAll(".table-head")

// console.log(thead_ufo)


var tbody = table_ufo.select("tbody")

data.forEach((item) => {

  // Append one table row per record
  var row = tbody.append("tr");

  // append one cell for each column
  row.append("td").text(item.datetime);
  row.append("td").text(item.city);
  row.append("td").text(item.state);
  row.append("td").text(item.country);
  row.append("td").text(item.shape);
  row.append("td").text(item.durationMinutes);
  row.append("td").text(item.comments);
});

let button = d3.select("#filter-btn")

button.on("click", function(){
    let date = d3.select("#datetime");
    console.log(date._groups[0][0].value);
});
