//aPropos.js
//Maud Harvey
//28 décembre 2020
//Composant Vue , page à propos

Vue.component("a-propos", {
  template: `

  <div>
            <transition name="modal"">
                <div class="modal-mask">
                    <div class="modal-wrapper">
                        <div class="modal-dialog" role="document">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title">Surf Spirit</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true" @click="$emit('close')">&times;</span>
                                    </button>
                                </div>
                                <div class="modal-body">
                                    <p>
                                        Cette entreprise à vue le jour par quatre amis amoureux de plein-air et de yoga.
                                        Nous voulions combiner le calme de l'eau et le travail du corps, la pratique de la planche à pagaie est devenu une
                                        passion.
                                        Donc, nous avons eu le désir de faire connaître ce sport accessible à tous.
                                    </p>
                                    <p>

                                        La mission de l'entreprise est de faire connaître les bienfaits du stand-up paddle.
                                        La pratique de la planche à pagaie, est un bon exercice, il fait travailler les muscles stabilisateurs, les muscles des bras et des jambes sont sollicités ce qui en fait un exercice complet.
                                        Cette entraînement peut être comparable à la méditation la coordination, la sensation de glisse sur les hauts nous ancre dans le moment présent.
                                    </p>
                                    <p>
                                        Notre domaine d'activité, est la vente de stand-up paddle de toutes catégories et le services de cours, comme le yoga sur planche, et l'accompagnement technique dans le choix d'une planche à votre mesure.

                                    </p>
                                    <p>
                                        Nous sommes situé au 1900 rue Cabot à Jonquière.
                                        Venez voir notre inventaire de plus de 500 produits.
                                    </p>
                                    <p>
                                        Toutes ces valeurs vous représentent, vous êtes invités à faire partie de notre équipe.
                                        Nous serions heureux de vous rencontrer.
                                        <a href="#">Lien vers la page contact</a>
                                    </p>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" @click="$emit('close')">Fermer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>
    
        `,
});
