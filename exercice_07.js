var http = require("http"); // Importe le module serveur HTTP (inclus avec Node.js)
var fs = require('fs');
var oProvinces;

fs.readFile('exercice_objet.json', 'utf8', function (err, data) {
  if (err) throw err;
  oProvinces = JSON.parse(data);
});



http.createServer(function(request, response) { // Crée le serveur. La fonction anonyme prend ces deux arguments standards.
  response.writeHead(200, {"Content-Type": "text/html; charset=utf8"}); // Le Content-Type change en fonction du type de contenu (exemple : HTML)
  response.write("<h1>Hello World</h1><p><ol>");
  for (province in oProvinces) {
  	response.write("<li>" + oProvinces[province] + "</li>");
  }
  response.write("</ol></p>");
  response.end();
}).listen(3000); // On écoute le serveur