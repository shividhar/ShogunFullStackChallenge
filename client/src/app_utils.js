export function getTableColumnHeaders(responseData) {
  if(responseData.length > 0) {
    var firstElement = responseData[0];
    var tableColumnsArray = [];

    for (var key in firstElement) {
        tableColumnsArray.push(key);
    }

    return tableColumnsArray;
  }else{
    return [] 
  }
}
