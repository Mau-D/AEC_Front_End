<!--Exercice 2, Utilitaire dans votre application VueJS-->
<!--Affichage d'un modal-->
<!--Composant contenant le modal-->
<template id="modal-app">

    <div>
        <button type="submit" v-directiveshowmodal="'JE SUIS LE MESSAGE DANS LEMODAL'" >Ouvrir le modal</button>
   <!-- Modal avec transition pour l'affichage -->
       <p ref="fermeture"></p>
        <transition name="slide">
            <div class="modal" ref='modal'>
                <h1>Modal contrôlé par une directive personnalisée: <span ref="texte"></span></h1>
                <button class="button" v-directivehidemodal="'Le modal est fermé avec la directive'">
                    Fermer
                </button>
            </div>
        </transition>
    </div>
</template>

<script>


    export default {
        name: 'composant-modal',
       
        directives:{
            directiveshowmodal: function(el,binding, vnode) {
                el.addEventListener('click', () => {
                vnode.context.$refs["modal"].style.display = 'block';
                vnode.context.$refs["modal"].style.background = 'green';
                vnode.context.$refs["texte"].innerHTML= binding.value;
                });
            },
            directivehidemodal: function(el,binding, vnode) {
                el.addEventListener('click', () => {
                vnode.context.$refs["modal"].style.display = 'none';
                vnode.context.$refs["fermeture"].innerHTML= binding.value;
            });
            }
        }     
    }
</script>
<style scoped>
 /*Transition pour le modal*/
        .modal-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 98;
            background-color: rgba(0, 0, 0, 0.3);
        }

        .modal {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 99;
            width: 100%;
            max-width: 400px;
            background-color: #fff;
            border-radius: 16px;
            padding: 25px;
        }

        .fade-enter-active,
        .fade-leave-active {
            transition: opacity 0.5s;
        }

        .fade-enter,
        .fade-leave-to {
            opacity: 0;
        }

        .slide-enter-active,
        .slide-leave-active {
            transition: transform 0.5s;
        }

        .slide-enter,
        .slide-leave-to {
            transform: translateY(-50%) translateX(100vw);
        }
        
</style>