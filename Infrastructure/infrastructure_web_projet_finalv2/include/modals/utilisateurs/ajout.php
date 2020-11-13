<!-- Formulaire d'inscription -->
  <div class="modal" id="modalInscription" name="modalInscription" tabindex="-1" role="dialog">
    <form class="needs-validation" novalidate method="POST">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Connexion</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-row">
              <div class="offset-md-2 col-md-8 mb-3">
                <label for="code_utilisateur">Nom utilisateur *</label>
                <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                <input type="text" class="form-control" id="code_utilisateur" name="code_utilisateur" required minlength="2" maxlength="100">
                <div class="invalid-feedback">
                  Le nom d'utilisateur doit comporter entre 2 à 100 caractères. 
                </div>
              </div> 
            </div>
            <div class="form-row">
              <div class="offset-md-2 col-md-8 mb-3">
                <label for="mot_de_passe">Mot de passe *</label>
                <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                <input type="text" class="form-control" id="mot_de_passe" name="mot_de_passe" required minlength="2" maxlength="60">
                <div class="invalid-feedback">
                  Le mot de passe doit comporter entre 2 à 60 caractères. 
                </div>
              </div> 
            </div>
            <div class="form-row">
              <div class="offset-md-2 col-md-8 mb-3">
                <label for="courriel">Courriel *</label>
                <!-- Attention! Vos validations doivent être cohérentes avec le champ correspondant dans la BD! -->
                <input type="text" class="form-control" id="courriel" name="courriel" required minlength="2" maxlength="255">
                <div class="invalid-feedback">
                  Le courriel doit comporter entre 2 à 255 caractères. 
                </div>
              </div> 
            </div>
          </div>     
          <div class="modal-footer">         
            <button type="submit" class="btn btn-primary" name="nouvel_utilisateurSubmit">Inscription</button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Fermer</button>
          </div>
        </div>
      </div>
    </form>
  </div>
