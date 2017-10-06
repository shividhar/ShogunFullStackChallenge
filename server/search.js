var Fuse = require("fuse.js")
var csvParser = require("./csvParser.js");

var fuse;
var csvData = [];

exports.setupSearch = function() {
  csvData = csvParser.processCSV("./data.csv")

  options = {
    shouldSort: true,
    threshold: 0.4,
    location: 0,
    distance: 10,
    minMatchCharLength: 1,
    keys: [
        "ADDRESS"
    ]
  };
  
  fuse = new Fuse(csvData, options);

}

exports.search = function(query){
  if(fuse){
    return fuse.search(query);
  }else{
    return "";
  }
}
