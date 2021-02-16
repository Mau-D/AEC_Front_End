//Pour les web services
const express = require("express"); //en js équivalent du vue.use
const app = express(); //créer l'instance du derveur distant, c'est le constructeur qu'on appelle app
const port = 3000; //port utilisé pour le serveur distant, doit être différent du port de l'application(node aplication)

//Exposer un service
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/messages", (req, res) => {
  console.log(req.body);
  messages
    .create(req.body)
    .then((message) => {
      res.json(message);
    })
    .catch((error) => {
      res.status(500);
      res.json(error);
    });
});

//Va lancer le serveur, vérification du serveur avec un console.log
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
