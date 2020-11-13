<div id="modalMAJ" class="modal" tabindex="-1" role="dialog">
  <form class="needs-validation" novalidate method="POST">
    <div class="modal-dialog mw-100 w-50" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modification de la nouvelle</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
            <div class="form-row">
                <div class="col-md-4 mb-3">
                    <label for="titre">Titre *</label>
                    <!-- Input caché pour obtenir le id -->
                    <input type="hidden" id="id_MAJ" name="id" value="<?= $nouvelle["id"] ?>">
                    <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                    <input type="text" class="form-control" id="titre_MAJ" name="titre" value="<?= $nouvelle["titre"] ?>" required maxlength="50">
                    <div class="invalid-feedback">
                        Le titre de la nouvelle est requis et doit comporter moins de 50 caractères. 
                    </div>
                </div>
                <div class="col-md-4 mb-3">
                    <label for="date_nouvelle">Date *</label>
                    <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                    <input type="date" class="form-control" id="date_MAJ" name="date_nouvelle" value="<?= $nouvelle["date_nouvelle"] ?>" pattern="\d{4}-\d{2}-\d{2}" required>
                    <div class="invalid-feedback">
                        La date de la nouvelle est requis dans le format AAAA-MM-JJ
                    </div>
                </div>
            </div>
            <div class="form-row">
                <div class="col-md-8 mb-3">
                    <label for="description_courte">Description courte *</label>
                    <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                    <textarea type="text" class="form-control" id="descriptionCourte_MAJ" name="description_courte" value="<?= $nouvelle["description_courte"] ?>" required rows="3" maxlength="125"></textarea>
                    <div class="invalid-feedback">
                        Une courte description de la nouvelle est requis et doit comporter moins de 125 caractères. 
                    </div>
                </div>
            </div class="form-row">
            <div class="form-row">
                <div class="col-md-8 mb-3">
                    <label for="description_longue">Description longue *</label>
                    <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                    <textarea type="text" class="form-control" id="descriptionLongue_MAJ" name="description_longue" rows="6" value="<?= $nouvelle["description_longue"] ?>" required  maxlength="500"></textarea>
                    <div class="invalid-feedback">
                        Une longue description de la nouvelle est requis et doit comporter moins de 500 caractères. 
                    </div>
                </div>
            </div class="form-row">
            <div class="form-row">
                <div class="col-md-6 mb-3"> 
                    <div class="form-check">
                        <label for="actif">Statut *</label>
                        <select class="form-control" id="actif_MAJ" name="actif" value="<?= $nouvelle["actif"] ?>">
                            <option value="1">Actif</option>
                            <option value="0">Inactif</option>
                        </select>
                    </div>
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
                        echo '<select class="form-control" name="categorieID"  id="categorie_MAJ" value="$nouvelle["categorie"]" required>' ;
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
          <button class="btn btn-primary" type="submit" name="majSubmit">Modifier la nouvelle</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
        </div>
      </div>
    </div>
  </form>
</div>
