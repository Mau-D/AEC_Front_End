/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const mockData = require("./mockData");

const { adventuremotorcycles } = mockData; /*ajouter le nom de la db*/
const data = JSON.stringify({
  adventuremotorcycles,
}); /*ajouter le nom de la db*/
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
