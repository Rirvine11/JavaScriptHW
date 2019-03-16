var tableData = data;
var tbody = d3.select("tbody");

data.forEach(function(ufoSightings) {

  var row = tbody.append("tr");
  Object.entries(ufoSightings).forEach(function([key, value]) {
    var cell = tbody.append("td");
    cell.text(value);
  });
});

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function(sightingsFiltered) {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  d3.select('#ufo-table').selectAll('td').remove();
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");


  var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
  filteredData.forEach(function(sightingsFiltered) {

    var row = tbody.append("tr");
    Object.entries(sightingsFiltered).forEach(function([key, value]) {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });


});
