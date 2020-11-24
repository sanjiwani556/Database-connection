const xlsx = require("xlsx");
const Food = require("./public/array");
const newWB = xlsx.utils.book_new();
const newWS = xlsx.utils.json_to_sheet(Food);
xlsx.utils.book_append_sheet(newWB,newWS,"New Excel Data File");

xlsx.writeFile(newWB,"New Excel Data File.xlsx");