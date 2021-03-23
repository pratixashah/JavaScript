//from data.js
//var tableData = data;
//console.log(tableData)

var table_ufo = d3.select("#ufo-table")
//console.log(table_ufo)

let thead_ufo = table_ufo.select("thead tr").selectAll(".table-head")
// console.log(thead_ufo)

function create_table(data)
{
  var tbody = table_ufo.select("tbody")

  tbody.html("");

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
}

create_table(data)

let button = d3.select("#filter-btn")

button.on("click", function()
  {
    let user_date = d3.select("#datetime")._groups[0][0].value;

    let selected_data = data.filter((row) => row.datetime === user_date);

    create_table(selected_data)
});
