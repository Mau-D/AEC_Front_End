import React from "react";
import { Button } from "react-bootstrap";
import { API } from "../constantes";

//Formulaire d'ajout pour implenter la bd
function AjoutBD() {
  /*Envoi les infos dans la bd */
  /*Road trip #1*/
  async function addBD() {
    try {
      const response = await fetch(API, {
        /*Pour un ajout utiliser la méthode POST */
        method: "POST",
        /*Pour un ajout ajouter un headers */
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: "Un voyage en auto mémorable dans les Cantons de l’Est",
          image1: "https://img.ev.mu/images/attractions/573/960x640/3175.jpg",
          image2: "https://www.tourismecoaticook.ca/img/banner-3.jpg",
          description:
            "Prenez la route panoramique vers North Hatley (75 minutes à l’est de Montréal) pour vous rendre au Manoir Hovey, membre de l’Association Relais & Châteaux, suggère Patricia Gajo, journaliste de mode et chroniqueuse voyage établie à Montréal.\n\n« Le Manoir Hovey est sans contredit la plus luxueuse escapade dans les Cantons de l’Est pour les couples : jacuzzi, vue imprenable sur l’eau, champagne et resto gastronomique. Sur la route, vous verrez de superbes kiosques où l’on peut acheter des produits locaux directement des agriculteurs, comme du maïs, des framboises, des pommes, et j’en passe », précise Patricia Gajo.\n\nIl faut aussi visiter l’Abbaye de Saint-Benoît du Lac, un monastère bénédictin. « Il faut absolument revenir à l’automne pour cueillir des pommes dans leur verger. À certaines heures de la journée, vous pourrez même entendre leurs chants grégoriens », témoigne la journaliste.\n\n« Nous sommes allés au Domaine Pinnacle, dont le bâtiment principal est un ancien bureau des douanes penché sur les États-Unis à l’horizon. Plus près de la frontière canado-américaine, un théâtre unique a été construit à cheval sur les deux pays. »\n\nLes Cantons-de-l’Est sont aussi réputés pour leur incontournable route des vins: profitez-en pour découvrir les meilleurs vignobles québécois!",
          region: "Estrie",
          attraits: [
            {
              nom_attrait: "Manoir Hatley",
              ville: "North Hatley",
              image_attrait:
                "https://d1xyolhen8fnqh.cloudfront.net/media/hotels/slideshow_images_staged/large/1178190.jpg",
              description_attrait:
                "Résidence privée, à l’abri des regards depuis 1900, le Manoir Hovey est une propriété 5 étoiles, Relais & Châteaux, que les critiques ont décrite comme la “quintessence de la villégiature anglo-saxonne” célébrant “un art de vivre québécois, hymne épicurien et ludique à la nature, aux produits du terroir et à la convivialité.”",
            },
            {
              nom_attrait: "L’Abbaye Saint-Benoît-du-Lac",
              ville: "Saint-Benoît-du-Lac",
              image_attrait:
                "https://www.lerefletdulac.com/wp-content/uploads/sites/29/2019/02/abbaye-saint-benoit-du-lac-2651864.jpg",
              description_attrait:
                "Notre communauté bénédictine, fondée en 1912 par des moines venus de France, se réclame d’une restauration monastique inaugurée en 1833, à Solesmes, en France, par Dom Prosper Guéranger. Établie sur une presqu’île du vaste lac Memphrémagog, elle a commencé petitement. Les bâtiments qui l’abritent ont été construits à partir de 1938, et le monastère a été élevé au rang d’Abbaye en 1952. Sa devise – Dans la beauté de la paix – reflète bien la beauté de son site et sa vocation de lieu de prière et de paix.",
            },
            {
              nom_attrait: "Le Domaine Pinnacle",
              ville: "Frelighsburg",
              image_attrait:
                "https://www.cantonsdelest.com/files/membermedia/870/6/aef9660e.jpg",
              description_attrait:
                "Grâce à la passion qu’il met à produire des cidres qui plaisent aux amateurs, le Domaine Pinnacle s’est forgé une réputation internationale, notamment grâce à son cidre de glace qu’on retrouve désormais sur les plus grandes tables. D’ailleurs, au cours des dernières années, l’entreprise a remporté les honneurs lors de nombreuses compétitions, raflant à maintes reprises des médailles d’or.",
            },
            {
              nom_attrait: "Centre d'Interprétation des Mammifères Marins",
              ville: "Tadoussac",
              image_attrait:
                "https://www.bonjourquebec.com/fiche/images/800x600/f93813ef-60c9-49ef-ab58-5c95fd756393/centre-dinterpretation-des-mammiferes-marins-cimm-exterieur.jpg",
              description_attrait:
                "Rencontrez un cachalot de 13 m et explorez l'univers des baleines. Vidéos inédits, univers sonore, jeux et collection de squelettes, film exclusif dans une salle climatisée : une expérience incontournable et complémentaire aux excursions. Les spécialistes sur place répondront à vos questions et vos achats à la boutique contribueront à aider les baleines. Promenez-vous dans le Jardin de la Grève pour admirer la flore de la Côte-Nord et les sculptures de cinq bélugas grandeur nature. Participez à un cours de chants de baleines et venez rencontrer nos chercheurs!",
            },
          ],
        }),
      });
      /*Road trip #2*/
      await fetch(API, {
        /*Pour un ajout utiliser la méthode POST */
        method: "POST",
        /*Pour un ajout ajouter un headers */
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom:
            "La route des Baleines, sur la Côte-Nord du Québec: un road trip majestueux",
          image1:
            "https://media1.ledevoir.com/images_galerie/nwd_547674_402215/image.jpg",
          image2:
            "https://www.voyagevoyage.ca/image/policy:1.12705500:1592227358/Cote-Nord.jpg?w=1000&$p$w=56507c4",
          description:
            "Un road trip sur la « route des Baleines » offre une vue spectaculaire où il est possible d’observer 13 espèces différentes de baleines. Cette route compte 1 730 km et s’étend de Tadoussac à Blanc-Sablon, sur la route 138 qui longe la rive nord du fleuve Saint-Laurent. Plus au nord, entre Sept-Îles et Natashquan, cinq heures de paysages magnifiques vous attendent. Vous pourrez aussi y observer la richesse de la végétation qui évolue tout au long de la route, alors que vous monterez de plus en plus vers le nord. Mammifère remarquable, la baleine grise fait partie des16 espèces menacées qui ont échappé à l’extinction.",
          region: "Côte-Nord",
          attraits: [
            {
              nom_attrait: "Réserve de parc national de l'Archipel-de-Mingan",
              ville: "Havre-Saint-Pierre",
              image_attrait:
                "https://images.radio-canada.ca/q_auto,w_1250/v1/ici-info/16x9/minganie-iles-mingan.jpg",
              description_attrait:
                "Avec ses géants de calcaire qui semblent surgir d’un autre monde, l’archipel de Mingan envoûte dès le premier regard. Alors, qu’à l’horizon, baleines et phoques batifolent dans l’immensité bleue, les quelque mille îles et îlots fascinent tant par leur flore unique qu’à cause des colonies d’oiseaux marins qui les peuplent. Profitez pleinement de ce décor intemporel en prenant part à une expédition en mer ou en explorant les îles!",
            },
            {
              nom_attrait: "Centre d'Interprétation des Mammifères Marins",
              ville: "Tadoussac",
              image_attrait:
                "https://www.bonjourquebec.com/fiche/images/800x600/f93813ef-60c9-49ef-ab58-5c95fd756393/centre-dinterpretation-des-mammiferes-marins-cimm-exterieur.jpg",
              description_attrait:
                "Rencontrez un cachalot de 13 m et explorez l'univers des baleines. Vidéos inédits, univers sonore, jeux et collection de squelettes, film exclusif dans une salle climatisée : une expérience incontournable et complémentaire aux excursions. Les spécialistes sur place répondront à vos questions et vos achats à la boutique contribueront à aider les baleines. Promenez-vous dans le Jardin de la Grève pour admirer la flore de la Côte-Nord et les sculptures de cinq bélugas grandeur nature. Participez à un cours de chants de baleines et venez rencontrer nos chercheurs!",
            },
            {
              nom_attrait: "",
              ville: "",
              image_attrait: "",
              description_attrait: "",
            },
            {
              nom_attrait: "",
              ville: "",
              image_attrait: "",
              description_attrait: "",
            },
          ],
        }),
      });
      /*Road trip #3*/
      await fetch(API, {
        /*Pour un ajout utiliser la méthode POST */
        method: "POST",
        /*Pour un ajout ajouter un headers */
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: "Un road trip épique autour de la Gaspésie",
          image1:
            "https://s3.amazonaws.com/rose.vero/wp-content/uploads/2019/08/14152200/Parcouru-Gaspesie-a-pied.jpg",
          image2:
            "https://www.radiogaspesie.ca/wp-content/uploads/Roger_stlaurent_photographe_20180912_0069_T2-scaled.jpg",
          description:
            "Si vous aimez la mer, le vent du large et les paysages montagneux, un road trip autour de la Gaspésie est un incontournable. À partir de La Pocatière, dans le Bas-Saint-Laurent au Québec, la route 132 offre 1235 km qui vous en mettront plein la vue, en vous faisant traverser Rimouski, Percé, Gaspé, Sainte-Anne-des-Monts et Matane. En chemin, vous serez charmé par les splendeurs qu’offre le fleuve Saint-Laurent que vous suivrez tout au long de votre escapade. À la hauteur de Rivière-du-Loup, il est possible d’y faire l’observation des baleines et d’animaux marins. Vous croiserez à la baie des Chaleurs, parmi les plus belles baies du monde, le parc Bonaventure, réputé pour sa pêche au saumon, le fameux rocher Percé, de même que le grand parc national de Forillon.",
          region: "Gaspésie–Îles-de-la-Madeleine",
          attraits: [
            {
              nom_attrait: "Croisières aux baleines",
              ville: "Rivière-du-Loup",
              image_attrait:
                "https://www.bonjourquebec.com/fiche/images/800x600/40443b34-7df5-44e6-a1b0-11048d8e5147/croisiere-aux-baleines-riviere-du-loup-baleine.jpg",
              description_attrait:
                "Le secret le mieux gardé pour l’observation des baleines, à moins de 2h de Québec! Prenez le large avec nous et rencontrez les mammifères marins du Saint-Laurent. Profitez de l'unique point de départ sur la rive sud du Saint-Laurent pour partir à la rencontre des géants de la mer! De juin à septembre 2018, une seule compagnie offre les croisières aux baleines, soit la compagnie AML. Faites le plein d’air pur et rencontrez baleines, phoques et autres mammifères marins. Vous serez conquis par la beauté du littoral jalonné d’îles et de phares.",
            },
            {
              nom_attrait: "Parc Bonaventure",
              ville: "Percé",
              image_attrait:
                "https://www.sepaq.com/resources/images/pq/bon/caroussel/bon-mathieu-dupuis.jpg",
              description_attrait:
                "Le parc national de l'Île-Bonaventure-et-du-Rocher-Percé s'affiche par son riche patrimoine naturel, historique et géologique. Sculpté par le temps et la mer, à l'extrémité de la péninsule gaspésienne, il possède comme forteresse l'île Bonaventure et comme vaisseau de pierre le majestueux rocher Percé, emblème touristique du Québec. Sa flore et sa faune singulières, dont sa célèbre colonie de fous de Bassan, en font une destination incontournable, tout comme le patrimoine bâti de l'île, dernier témoin de la vie des insulaires du siècle dernier.",
            },
            {
              nom_attrait: "Parc Forillon",
              ville: "Gaspé",
              image_attrait:
                "https://www.quebecnature.ca/gestion-qn/upload/RSL_20130909_0184_low.jpg",
              description_attrait:
                "Le parc national Forillon propose une foule d’expériences entre mer, falaises et forêt. Marchez tranquillement sur une plage de galets. Pénétrez dans l’histoire en poussant la porte de la jolie maison jaune qui surplombe la mer. Plongez en apnée pour découvrir une faune et une flore colorées. Tendez l’oreille, vous entendrez le chant des oiseaux marins et peut-être même le souffle des baleines.",
            },
            {
              nom_attrait: "",
              ville: "",
              image_attrait: "",
              description_attrait: "",
            },
          ],
        }),
      });
      /*Road trip #4*/
      await fetch(API, {
        /*Pour un ajout utiliser la méthode POST */
        method: "POST",
        /*Pour un ajout ajouter un headers */
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom:
            "De Shawinigan à La Tuque, un superbe road trip sur la route 155",
          image1:
            "https://img.src.ca/2016/08/10/1250x703/160810_ru3lx_route155-mauricie-latuque_sn1250.jpg",
          image2:
            "https://www.bonjourquebec.com/fiche/images/master/57c29e98-8a13-4c21-bd02-800f46d43983/tourisme-mauricie-plein-air.jpg",
          description:
            "En Mauricie, nous avons la chance d’avoir l’une des plus spectaculaires routes au Québec : l’impressionnante route 155. Du village de Grandes-Piles jusqu’à la ville de La Tuque, cette portion de route panoramique longe la magnifique rivière Saint-Maurice avec son paysage montagneux bordé par des falaises à couper le souffle ! Imaginez en automne, lorsque les couleurs sont au rendez-vous. Saviez-vous que la route 155 est d’ailleurs le # 1 du TOP 5 des plus belles routes du Québec selon Authentik Canada? Rien de moins!",
          region: "Mauricie",
          attraits: [
            {
              nom_attrait: "Parc de la Mauricie",
              ville: "Shawinigan",
              image_attrait:
                "https://images.radio-canada.ca/q_auto,w_1250/v1/ici-info/16x9/parc-national-mauricie-baigneurs.jpg",
              description_attrait:
                "Au-delà des forêts de conifères et de feuillus, vous apercevez quelques touches d’azur : le parc compte plus de 150 lacs aux dimensions variées. Le jour, le cri envoûtant du plongeon huard vous fait peut-être frissonner. À quelques pas, les cascades vous attendent pour une baignade. Le soir venu, ce sont les hululements de la chouette rayée ou du grand duc qui vous accompagnent jusque dans vos rêves.",
            },
            {
              nom_attrait: "",
              ville: "",
              image_attrait: "",
              description_attrait: "",
            },
            {
              nom_attrait: "",
              ville: "",
              image_attrait: "",
              description_attrait: "",
            },
            {
              nom_attrait: "",
              ville: "",
              image_attrait: "",
              description_attrait: "",
            },
          ],
        }),
      });
      /*Road trip #5*/
      await fetch(API, {
        /*Pour un ajout utiliser la méthode POST */
        method: "POST",
        /*Pour un ajout ajouter un headers */
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: "De Baie-Saint-Paul à La Malbaie, un voyage sur la route 362",
          image1:
            "https://www.bonjourquebec.com/fiche/images/800x600/151a2f8f-3d8a-4f9d-b64e-baf0186c1d4e/baie-saint-paul-train-de-charlevoix.jpg",
          image2:
            "https://lh3.googleusercontent.com/proxy/ERj6JWZL_N68uYugolm1J0xKsvWj8bwEg4PqzsnzyGKGcpG_ILKrwkIxDh3OQySWevMfpieILx8O579iHYf7GzUPO8tY_E1PVXPsWEo",
          description:
            "Cette route panoramique ne compte qu’une cinquantaine de kilomètres. Les paysages sont si majestueux que Tourisme Québec l’a nommé officiellement Route du fleuve. Chemin faisant, vous croiserez de magnifiques villages, comme Les Éboulements, Saint-Joseph-de-la-Rive et Sainte-Irénée, qui font tous partie de l’association des plus beaux villages du Québec. Profitez-en pour faire plusieurs arrêts, admirer le charme de chaque village, consommer et acheter local. Rendu au village de La Malbaie, vous pourrez visiter le Casino de Charlevoix et tenter votre chance aux nombreux jeux de hasard qui s’offrent à vous… Soyez sage!",
          region: "Capitale-Nationale",
          attraits: [
            {
              nom_attrait: "Casino de Charlevoix",
              ville: "La Malbaie",
              image_attrait:
                "https://images.radio-canada.ca/q_auto,w_1250/v1/ici-info/16x9/casino-charlevoix.jpg",
              description_attrait:
                "Afin de vous offrir une expérience de divertissement aussi agréable que sécuritaire à la suite de la réouverture de notre établissement, nous avons mis en place plusieurs mesures nous permettant de veiller sur votre santé ainsi que sur celle de nos employés.",
            },
            {
              nom_attrait: "Le Moulin Seigneurial",
              ville: "Les Éboulements",
              image_attrait:
                "https://www.bonjourquebec.com/fiche/images/master/b60fa437-cb10-4db2-8d97-738936b28e48/moulin-seigneurial-des-eboulements-moulin-au-eboulements.jpg",
              description_attrait:
                "Construit en 1790 par le seigneur Jean-François Tremblay sur la rivière du Moulin, au sommet d’une chute d’environ 30 m, le Moulin seigneurial des Éboulements possède toujours son aspect et ses mécanismes d’origine. Avec le manoir seigneurial qui subsiste tout à côté, il représente, au Québec, l’un des derniers ensembles seigneuriaux ayant conservé toute son authenticité à travers le temps.",
            },
            {
              nom_attrait: "Le Musée Maritime de Charlevoix",
              ville: "Saint-Joseph-de-la-Rive",
              image_attrait:
                "https://www.bonjourquebec.com/fiche/images/master/b3014bed-9d9d-499a-8871-78eec43af9d6/musee-maritime-de-charlevoix-goelette-marie-clarisse.jpg",
              description_attrait:
                "outes voiles dehors, dans les installations du chantier maritime de Saint-Joseph-de-la-Rive (1946), le Musée maritime de Charlevoix raconte les goélettes de bois et le cabotage sur le Saint-Laurent dans une toute nouvelle expérience à 360°, de la forêt au fleuve. Le Musée, c’est cinq expositions, quatre bateaux à visiter, un quai, une scierie, 4 km de sentier en montagne, un parc, un parcours d’hébertisme, un labyrinthe végétal, un arboretum, des lieux de contemplation du fleuve et une foule d’activités.",
            },
            {
              nom_attrait: "",
              ville: "",
              image_attrait: "",
              description_attrait: "",
            },
          ],
        }),
      });
      /*Road trip #6*/
      await fetch(API, {
        /*Pour un ajout utiliser la méthode POST */
        method: "POST",
        /*Pour un ajout ajouter un headers */
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: "Sillonner les routes de Kamourask",
          image1:
            "https://lh3.googleusercontent.com/proxy/gdrp8x45S4nuWfShF9238UvEC0CSp5l2RU1dQAnRtCDqoEHPeH47LC65L5dhFm4YnKmIJUvwzxg3X9CMTZOfdTx_",
          image2:
            "https://i.pinimg.com/originals/7c/68/81/7c6881a914b8cf3832a500d65843e4bd.jpg",
          description:
            "Entre La Pocatière et Rivière-du-Loup se situe la magnifique région de Kamouraska. Riche en histoire et en culture, ce bijou de coin de pays est un incontournable. Si vous empruntez la route 132 à partir de La Pocatière, vous longerez le fleuve Saint-Laurent. En passant par des villages comme Saint-Denis, Kamouraska, Saint-Germain ou Saint-André, vous serez imprégné des somptueux paysages marins du fleuve. Kamouraska est aussi reconnu pour ses centres de santé. Plusieurs retraites, spas et centres de soins sont accessibles à quelques minutes en voiture. Si vous voulez passer quelques jours dans la région, on y retrouve également une variété de résidences touristiques.",
          region: "Bas-Saint-Laurent",
          attraits: [
            {
              nom_attrait: "Jardin floral",
              ville: "La Pocatière",
              image_attrait:
                "https://media-cdn.tripadvisor.com/media/photo-m/1280/14/68/fb/cd/jardin-floral-de-la-pocatiere.jpg",
              description_attrait:
                "dmirez les beautés du paysage! Là où s’entremêlent harmonieusement les fleurs, l’eau, les pierres et maintenant, les légumes. Découvrez des jardins et rocailles qui sauront vous charmer. Aires de pique-nique et toilettes. L’entrée est gratuite ou une contribution volontaire.",
            },
            {
              nom_attrait: "Musée régional de Kamouraska",
              ville: "Kamouraska",
              image_attrait:
                "https://www.musees.qc.ca/var/storage/images/musees/guide/musee-regional-de-kamouraska/carrousel/musee-regional-de-kamouraska-01/319644-1-fre-CA/musee-regional-de-kamouraska-01.jpg",
              description_attrait:
                "Fondé en 1977, le Musée régional de Kamouraska s’est développé grâce à la ténacité et au travail passionné de bénévoles, de gens du milieu et de la région. Grâce à la mobilisation du milieu, le musée se donne comme mission de conserver, de mettre en valeur et de diffuser le riche patrimoine historique, ethnologique et culturel de la région. Le Musée régional de Kamouraska occupe le couvent de Kamouraska, un bâtiment patrimonial construit en 1851 et restauré avec soin. Depuis plus de quarante ans, le Musée régional de Kamouraska poursuit sa mission grâce à une riche collection qui regroupe plus de 10 000 objets, des archives et des fonds photographiques importants.",
            },
            {
              nom_attrait: "Le sentier du Cabouron",
              ville: "Saint-Germain",
              image_attrait:
                "https://tourduquebec.ca/assets/uploads/2018/06/4xclavigueur_7766-1200x800.jpg",
              description_attrait:
                "Le sentier du Cabouron fait partie des Cabourons du Kamouraska et serpente sur 4,3 km le cabouron de Saint-Germain. Des enseignes d’interprétation aux entrées du sentier ainsi qu’un belvédère d’observation font connaitre et apprécier sa géologie, sa géographie et la richesse de ses éléments naturels. Par exemple, à son sommet se trouvent des pins gris rabougris âgés d’environ 80 ans, exceptionnels au Bas Saint-Laurent.",
            },
            {
              nom_attrait: "",
              ville: "",
              image_attrait: "",
              description_attrait: "",
            },
          ],
        }),
      });

      if (response.ok) {
        const jsonResponse = await response.json();

        return jsonResponse;
      }
      throw new Error("Request failed!");
    } catch (error) {
      console.log(error);
    }
  }

  return <Button onClick={addBD}>Ajouter la bd</Button>;
}

export default AjoutBD;
