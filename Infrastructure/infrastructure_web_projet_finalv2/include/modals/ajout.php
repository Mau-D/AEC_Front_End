<div id="modalAjout" class="modal" tabindex="-1" role="dialog">
  <form class="needs-validation" novalidate method="POST">
    <div class="modal-dialog mw-100 w-50" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Ajouter une nouvelle</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <div class="form-row">
                <div class="col-md-4 mb-3">
                    <label for="titre">Titre *</label>
                    <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                    <input type="text" class="form-control" id="titre" name="titre" required maxlength="50">
                    <div class="invalid-feedback">
                        Le titre de la nouvelle est requis et doit comporter moins de 50 caractères. 
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <label for="date_nouvelle">Date *</label>
                    <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                    <input type="date" class="form-control" id="date_nouvelle" name="date_nouvelle" pattern="\d{4}-\d{2}-\d{2}" required>
                    <div class="invalid-feedback">
                        La date de la nouvelle est requis dans le format AAAA-MM-JJ
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="col-md-8 mb-3">
                    <label for="description_courte">Description courte *</label>
                    <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                    <textarea type="text" class="form-control" id="description_courte" name="description_courte" required rows="3" maxlength="125"></textarea>
                    <div class="invalid-feedback">
                        Une courte description de la nouvelle est requis et doit comporter moins de 125 caractères. 
                    </div>
                </div>
            </div class="form-row">
            <div class="form-row">
                <div class="col-md-8 mb-3">
                    <label for="description_longue">Description longue *</label>
                    <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                    <textarea type="text" class="form-control" id="description_longue" name="description_longue" rows="6" required  maxlength="500"></textarea>
                    <div class="invalid-feedback">
                        Une longue description de la nouvelle est requis et doit comporter moins de 500 caractères. 
                    </div>
                </div>
            </div class="form-row">
            <div class="form-row">
                <div class="col-md-6 mb-3"> 
                    <label for="actif">Statut *</label>
                    <select class="form-control" id="actif" name="actif">
                        <option value="1">Actif</option>
                        <option value="0">Inactif</option>
                    </select>
                </div>      
                <div class="col-md-6 mb-3">
                    <label for="fk_categorie">Catégorie *</label>
                    <?php
                        $mysqli = new mysqli($host, $username, $password, $database);
                        // Vérifier la connexion
                        if ($mysqli -> connect_errno) {
                        echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
                            exit();
                        }
                        $res = $mysqli->query("SELECT id, categorie FROM categories");
                        echo '<select class="form-control" name="categorieID"  id="categorieID" required>' ;
                        while ($row = $res->fetch_assoc ()) {
                        echo '<option value="' . $row["id"] . '">' . $row["categorie"] .'</option>' ;
                        }
                        echo '</select>' ;
                    ?>
                    <div class="invalid-feedback">
                        Choisir une catégorie
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-primary" type="submit" name="ajoutSubmit">Ajouter la nouvelle</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
        </div>
      </div>
    </div>
  </form>
</div>
<script>
// Disable form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Get the forms we want to add validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
</script>
