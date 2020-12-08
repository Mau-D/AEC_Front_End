//Composant Vue , affichage d'un formulaire sur les voitures

Vue.component("composant-voiture", {
  template: `<div>
        <h3>Je suis le composant Voiture</h3>
        <form>
            <label for="type">Type de véhicule:</label><br>
            <input type="text" id="type" name="type"><br>
            <label for="transmission">Automatique ou manuelle:</label><br>
            <input type="text" id="transmission" name="transmission"><br>
            <label for="chevaux">Nombre de chevaux:</label><br>
            <input type="text" id="chevaux" name="chevaux"><br>
            <label for="essence">Consommation d'essence:</label><br>
            <input type="text" id="essence" name="essence"><br>
            <input type="submit" value="Valider">
        </form> 
    </div> `,
});
