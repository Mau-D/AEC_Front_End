import React from "react";
import { Button } from "react-bootstrap";
import { API } from "../constantes";

//Formulaire d'ajout pour implenter la bd
function AjoutBD() {
  /*Envoi les infos dans la bd */
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
      const response2 = await fetch(API, {
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
              nom_attrait: "Centre d'Interprétation des Mammifères Marins",
              ville: "Tadoussac",
              image_attrait:
                "https://www.bonjourquebec.com/fiche/images/800x600/f93813ef-60c9-49ef-ab58-5c95fd756393/centre-dinterpretation-des-mammiferes-marins-cimm-exterieur.jpg",
              description_attrait:
                "Rencontrez un cachalot de 13 m et explorez l'univers des baleines. Vidéos inédits, univers sonore, jeux et collection de squelettes, film exclusif dans une salle climatisée : une expérience incontournable et complémentaire aux excursions. Les spécialistes sur place répondront à vos questions et vos achats à la boutique contribueront à aider les baleines. Promenez-vous dans le Jardin de la Grève pour admirer la flore de la Côte-Nord et les sculptures de cinq bélugas grandeur nature. Participez à un cours de chants de baleines et venez rencontrer nos chercheurs!",
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
      if (response.ok) {
        const jsonResponse = await response2.json();

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
