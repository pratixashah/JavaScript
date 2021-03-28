//data from data.js

var table_ufo = d3.select("#ufo-table")
//console.log(table_ufo)

let thead_ufo = table_ufo.select("thead tr").selectAll(".table-head")
// console.log(thead_ufo)

console.log(`Total numbers of records: ${data.length}`);

// To create table
function create_table(data)
{
  var tbody = table_ufo.select("tbody")

  //To clear table
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

  // To display message
  let lblMessage = d3.select("#lblmessage")
  lblMessage.text(`${data.length} records found.`);
  console.log(`Total numbers of records: ${data.length}`);
}

create_table(data)

// To add event on click button
let button = d3.select("#filter-btn")

button.on("click", function()
  {
    // To get date entered by user
    let user_date = d3.select("#datetime").property("value");

    // If user has entered date
    if(user_date.length != 0)
    {
      // Filter data
      let selected_data = data.filter((row) => row.datetime === user_date);

      console.log(`${selected_data.length} records found for date: ${user_date}`);
      console.log(selected_data);

      // Create table with filtered data
      create_table(selected_data)
    }
    else
    {
      // Create table with all data by detault
      create_table(data);
    }

});
