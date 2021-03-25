//data from data.js

var table_ufo = d3.select("#ufo-table")
//console.log(table_ufo)

let thead_ufo = table_ufo.select("thead tr").selectAll(".table-head")
// console.log(thead_ufo)

console.log(`Total numbers of records: ${data.length}`);

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
}

create_table(data)

let button = d3.select("#filter-btn")

button.on("click", function()
  {
    let user_date = d3.select("#datetime").property("value");
    let user_city = d3.select("#city").property("value");
    let user_state = d3.select("#state").property("value");
    let user_country = d3.select("#country").property("value");
    let user_shape = d3.select("#shape").property("value");

    if(user_date.length != 0)
    {
      console.log(`Selected User Date: ${user_date}`);
    }
    
    if(user_city.length != 0)
    {
      console.log(`Selected User City: ${user_city}`);
    }

    if(user_state.length != 0)
    {
      console.log(`Selected User State: ${user_state}`);
    }

    if(user_country.length != 0)
    {
      console.log(`Selected User Country: ${user_country}`);
    }

    if(user_shape.length != 0)
    {
      console.log(`Selected User Shape: ${user_shape}`);
    }

    function filterData(row)
    {
      let boolRow = true;

      if(user_date.length != 0 && row.datetime.trim() != user_date.trim())
      {
        boolRow = false;
      }

      if(user_city.length != 0 && row.city.trim().toLowerCase() != user_city.trim().toLowerCase())
      {
        boolRow = false;
      }

      if(user_state.length != 0 && row.state.trim().toLowerCase() != user_state.trim().toLowerCase())
      {
        boolRow = false;
      }

      if(user_country.length != 0 && row.country.trim().toLowerCase() != user_country.trim().toLowerCase())
      {
        boolRow = false;
      }

      if(user_shape.length != 0 && row.shape.trim().toLowerCase() != user_shape.trim().toLowerCase())
      {
        boolRow = false;
      }

      return boolRow;
    }

    let selected_data = data.filter((row) => filterData(row))

    console.log(selected_data);

    create_table(selected_data);

  });

  // Useful comments
  
    // if(user_date.length != 0)
    // {
    //   console.log(`Selected User Date: ${user_date}`);
    //   selected_data = selected_data.filter((row) => row.datetime === user_date);
    // }
    
    // if(user_city.length != 0)
    // {
    //   console.log(`Selected User City: ${user_city}`);
    //   selected_data = selected_data.filter((row) => row.city === user_city);
    // }

    // if(user_state.length != 0)
    // {
    //   console.log(`Selected User State: ${user_state}`);
    //   selected_data = selected_data.filter((row) => row.state === user_state);
    // }

    // if(user_country.length != 0)
    // {
    //   console.log(`Selected User Country: ${user_country}`);
    //   selected_data = selected_data.filter((row) => row.country === user_country);
    // }

    // if(user_shape.length != 0)
    // {
    //   console.log(`Selected User Shape: ${user_shape}`);
    //   selected_data = selected_data.filter((row) => row.shape === user_shape);
    // }

    // let selected_data = data.filter((row) => 
    //   (user_date.length === 0 || row.datetime === user_date) &&
    //   (user_city.length === 0 || row.city === user_city) &&
    //   (user_state.length === 0 || row.state === user_state) &&
    //   (user_country.length === 0 || row.country === user_country) &&
    //   (user_shape.length === 0 || row.shape === user_shape)
    // );

    // console.log(`${selected_data.length} records found for date: ${user_date}`);


