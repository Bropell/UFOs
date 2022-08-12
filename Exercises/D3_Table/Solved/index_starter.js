// Get a reference to the table body
let tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(data);

// Step 1: Loop Through `data` and console.log each weather report object
data.forEach(function(weatherObject){
    console.log(weatherObject);
});

// Step 2:  Use d3 to append one table row `tr` for each weather report object
// Don't worry about adding cells or text yet, just try appending the `tr` elements.
//data.forEach(function(weatherObject){
    //tbody.append("tr");
//});

// Step 3:  Use `Object.entries` to console.log each weather report value
data.forEach(function(weatherObject){
    console.log(Object.entries(weatherObject));
});

// Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
data.forEach(function(weatherObject){
    var row = tbody.append("tr");
    row.append("td");
});

// Step 5: Use d3 to update each cell's text with
// weather report values (weekday, date, high, low)
data.forEach(function(weatherObject){
    var row = tbody.append("tr");
    var entries = Object.entries(weatherObject);
    for( var i = 0; i < entries.length; i++) {
        var column = row.append("td");
        column.text(entries[i][1]);
    }
});

// BONUS: Refactor to use Arrow Functions!
