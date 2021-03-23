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
    let date = d3.select("#datetime")._groups[0][0].value;

    console.log(date);

    console.log(tbody._groups[0][0]);

    for(let i=0;i<= tbody._groups[0][0].rows.length-1; i++ )
    {
      let table_date = tbody._groups[0][0].rows[i].cells[0].innerHTML
      // console.log(tbody._groups[0][0].rows)

      selected_date_data= []

      // data.forEach((item) => {
      //   if(table_date === item.datetime)
      //   {
      //     selected_date_data.append()
      //   }
      // }
      
      // if(date === table_date)
      // {
      //   table_date.attr("style", "font-family: Courie");
      //   // style("background-color", "red")
      // }
    }
});
