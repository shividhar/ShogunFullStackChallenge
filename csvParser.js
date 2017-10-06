var fs = require("fs");

exports.processCSV = function(filePath) {
  var contents = fs.readFileSync(filePath, 'utf8');

  var rowData = contents.split("\n");

  var csv = []; 

  for(var x in rowData){
    if(rowData[x].length > 0){
      csv.push(rowData[x].split(",")) 
    }
  }


  var csvJSON = [];

  if(csv.length > 0){
    var columnNames = csv[0];

    for(var x in csv){
      if(x > 0){
        var rowObj = {};
        for(var y in columnNames){
          rowObj[columnNames[y]] = csv[x][y];
        } 
        csvJSON.push(rowObj)
      } 
    }
  }
  return csvJSON;
}
