(this.webpackJsonpprojetfinalreact=this.webpackJsonpprojetfinalreact||[]).push([[0],{53:function(e,t,a){},56:function(e,t,a){},67:function(e,t,a){e.exports=a(95)},72:function(e,t,a){},73:function(e,t,a){},79:function(e,t,a){e.exports=a.p+"static/media/coccinelle.5ad5bf0a.jpg"},80:function(e,t,a){e.exports=a.p+"static/media/pieds.c7fe3a9d.jpg"},81:function(e,t,a){e.exports=a.p+"static/media/camion.30586d39.jpg"},82:function(e,t,a){e.exports=a.p+"static/media/plaque.1a5ebf5d.png"},83:function(e,t,a){e.exports=a.p+"static/media/vintage.9b29d18f.jpg"},87:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){e.exports=a.p+"static/media/rue.f0c4a98e.jpg"},92:function(e,t,a){e.exports=a.p+"static/media/voiture_orange.39e416b1.jpg"},93:function(e,t,a){e.exports=a.p+"static/media/10.ac0814dc.jpg"},95:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(19),i=a.n(l),o=(a(72),a(73),a(7)),c=a.n(o),s=a(12),u=a(34),m=a(35),d=a(36),p=a(43),E=a(41),f=a(99),g=a(100),v=a(57),b=a(98),h=a(101),y=a(14),x=a(8);var I=function(e){return n.a.createElement(n.a.Fragment,null,Object.keys(e.photosAttrait).map((function(t,a){return n.a.createElement(v.a,{sm:"4",className:"my-4"},n.a.createElement(b.a,{height:"100%",width:"100%",src:e.photosAttrait[t].image_attrait}))})))},j="https://crudcrud.com/api/f00dd6de8e2e40918bd1e7cf612725c1/roadtrips/",w=["Bas-Saint-Laurent","Saguenay\u2013Lac-Saint-Jean","Capitale-Nationale","Mauricie","Estrie","Montr\xe9al","Outaouais","Abitibi-T\xe9miscamingue","C\xf4te-Nord","Nord-du-Qu\xe9bec","Gasp\xe9sie\u2013\xceles-de-la-Madeleine","Chaudi\xe8re-Appalaches","Laval","Lanaudi\xe8re","Laurentides","Centre-du-Qu\xe9bec"];var N=function(){var e=Object(r.useState)([]),t=Object(x.a)(e,2),a=t[0],l=t[1];function i(){return(i=Object(s.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(j);case 3:return t=e.sent,e.next=6,t.json();case 6:if(a=e.sent,l(a),t.ok){e.next=10;break}throw Error(t.statusText);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]),n.a.createElement(f.a,null,n.a.createElement("h2",null,"Tout ce que vous pouvez voir"),n.a.createElement(g.a,{className:"affichagePhoto"},a.map((function(e){return n.a.createElement(I,{photosAttrait:e.attraits,className:"haut-5"})}))))},_=a(65),q=Object(_.a)(),O=a(28),A=a.n(O);var D=function(e){function t(){return(t=Object(s.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(j,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nom:"Un voyage en auto m\xe9morable dans les Cantons de l\u2019Est",image1:"https://img.ev.mu/images/attractions/573/960x640/3175.jpg",image2:"https://www.tourismecoaticook.ca/img/banner-3.jpg",description:"Prenez la route panoramique vers North Hatley (75 minutes \xe0 l\u2019est de Montr\xe9al) pour vous rendre au Manoir Hovey, membre de l\u2019Association Relais & Ch\xe2teaux, sugg\xe8re Patricia Gajo, journaliste de mode et chroniqueuse voyage \xe9tablie \xe0 Montr\xe9al.\n\n\xab Le Manoir Hovey est sans contredit la plus luxueuse escapade dans les Cantons de l\u2019Est pour les couples : jacuzzi, vue imprenable sur l\u2019eau, champagne et resto gastronomique. Sur la route, vous verrez de superbes kiosques o\xf9 l\u2019on peut acheter des produits locaux directement des agriculteurs, comme du ma\xefs, des framboises, des pommes, et j\u2019en passe \xbb, pr\xe9cise Patricia Gajo.\n\nIl faut aussi visiter l\u2019Abbaye de Saint-Beno\xeet du Lac, un monast\xe8re b\xe9n\xe9dictin. \xab Il faut absolument revenir \xe0 l\u2019automne pour cueillir des pommes dans leur verger. \xc0 certaines heures de la journ\xe9e, vous pourrez m\xeame entendre leurs chants gr\xe9goriens \xbb, t\xe9moigne la journaliste.\n\n\xab Nous sommes all\xe9s au Domaine Pinnacle, dont le b\xe2timent principal est un ancien bureau des douanes pench\xe9 sur les \xc9tats-Unis \xe0 l\u2019horizon. Plus pr\xe8s de la fronti\xe8re canado-am\xe9ricaine, un th\xe9\xe2tre unique a \xe9t\xe9 construit \xe0 cheval sur les deux pays. \xbb\n\nLes Cantons-de-l\u2019Est sont aussi r\xe9put\xe9s pour leur incontournable route des vins: profitez-en pour d\xe9couvrir les meilleurs vignobles qu\xe9b\xe9cois!",region:"Estrie",attraits:[{nom_attrait:"Manoir Hatley",ville:"North Hatley",image_attrait:"https://d1xyolhen8fnqh.cloudfront.net/media/hotels/slideshow_images_staged/large/1178190.jpg",description_attrait:"R\xe9sidence priv\xe9e, \xe0 l\u2019abri des regards depuis 1900, le Manoir Hovey est une propri\xe9t\xe9 5 \xe9toiles, Relais & Ch\xe2teaux, que les critiques ont d\xe9crite comme la \u201cquintessence de la vill\xe9giature anglo-saxonne\u201d c\xe9l\xe9brant \u201cun art de vivre qu\xe9b\xe9cois, hymne \xe9picurien et ludique \xe0 la nature, aux produits du terroir et \xe0 la convivialit\xe9.\u201d"},{nom_attrait:"L\u2019Abbaye Saint-Beno\xeet-du-Lac",ville:"Saint-Beno\xeet-du-Lac",image_attrait:"https://www.lerefletdulac.com/wp-content/uploads/sites/29/2019/02/abbaye-saint-benoit-du-lac-2651864.jpg",description_attrait:"Notre communaut\xe9 b\xe9n\xe9dictine, fond\xe9e en 1912 par des moines venus de France, se r\xe9clame d\u2019une restauration monastique inaugur\xe9e en 1833, \xe0 Solesmes, en France, par Dom Prosper Gu\xe9ranger. \xc9tablie sur une presqu\u2019\xeele du vaste lac Memphr\xe9magog, elle a commenc\xe9 petitement. Les b\xe2timents qui l\u2019abritent ont \xe9t\xe9 construits \xe0 partir de 1938, et le monast\xe8re a \xe9t\xe9 \xe9lev\xe9 au rang d\u2019Abbaye en 1952. Sa devise \u2013 Dans la beaut\xe9 de la paix \u2013 refl\xe8te bien la beaut\xe9 de son site et sa vocation de lieu de pri\xe8re et de paix."},{nom_attrait:"Le Domaine Pinnacle",ville:"Frelighsburg",image_attrait:"https://www.cantonsdelest.com/files/membermedia/870/6/aef9660e.jpg",description_attrait:"Gr\xe2ce \xe0 la passion qu\u2019il met \xe0 produire des cidres qui plaisent aux amateurs, le Domaine Pinnacle s\u2019est forg\xe9 une r\xe9putation internationale, notamment gr\xe2ce \xe0 son cidre de glace qu\u2019on retrouve d\xe9sormais sur les plus grandes tables. D\u2019ailleurs, au cours des derni\xe8res ann\xe9es, l\u2019entreprise a remport\xe9 les honneurs lors de nombreuses comp\xe9titions, raflant \xe0 maintes reprises des m\xe9dailles d\u2019or."}]})});case 3:return t=e.sent,e.next=6,fetch(j,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nom:"La route des Baleines, sur la C\xf4te-Nord du Qu\xe9bec: un road trip majestueux",image1:"https://media1.ledevoir.com/images_galerie/nwd_547674_402215/image.jpg",image2:"https://www.voyagevoyage.ca/image/policy:1.12705500:1592227358/Cote-Nord.jpg?w=1000&$p$w=56507c4",description:"Un road trip sur la \xab route des Baleines \xbb offre une vue spectaculaire o\xf9 il est possible d\u2019observer 13 esp\xe8ces diff\xe9rentes de baleines. Cette route compte 1 730 km et s\u2019\xe9tend de Tadoussac \xe0 Blanc-Sablon, sur la route 138 qui longe la rive nord du fleuve Saint-Laurent. Plus au nord, entre Sept-\xceles et Natashquan, cinq heures de paysages magnifiques vous attendent. Vous pourrez aussi y observer la richesse de la v\xe9g\xe9tation qui \xe9volue tout au long de la route, alors que vous monterez de plus en plus vers le nord. Mammif\xe8re remarquable, la baleine grise fait partie des16 esp\xe8ces menac\xe9es qui ont \xe9chapp\xe9 \xe0 l\u2019extinction.",region:"C\xf4te-Nord",attraits:[{nom_attrait:"R\xe9serve de parc national de l'Archipel-de-Mingan",ville:"Havre-Saint-Pierre",image_attrait:"https://images.radio-canada.ca/q_auto,w_1250/v1/ici-info/16x9/minganie-iles-mingan.jpg",description_attrait:"Avec ses g\xe9ants de calcaire qui semblent surgir d\u2019un autre monde, l\u2019archipel de Mingan envo\xfbte d\xe8s le premier regard. Alors, qu\u2019\xe0 l\u2019horizon, baleines et phoques batifolent dans l\u2019immensit\xe9 bleue, les quelque mille \xeeles et \xeelots fascinent tant par leur flore unique qu\u2019\xe0 cause des colonies d\u2019oiseaux marins qui les peuplent. Profitez pleinement de ce d\xe9cor intemporel en prenant part \xe0 une exp\xe9dition en mer ou en explorant les \xeeles!"},{nom_attrait:"Centre d'Interpr\xe9tation des Mammif\xe8res Marins",ville:"Tadoussac",image_attrait:"https://www.bonjourquebec.com/fiche/images/800x600/f93813ef-60c9-49ef-ab58-5c95fd756393/centre-dinterpretation-des-mammiferes-marins-cimm-exterieur.jpg",description_attrait:"Rencontrez un cachalot de 13 m et explorez l'univers des baleines. Vid\xe9os in\xe9dits, univers sonore, jeux et collection de squelettes, film exclusif dans une salle climatis\xe9e : une exp\xe9rience incontournable et compl\xe9mentaire aux excursions. Les sp\xe9cialistes sur place r\xe9pondront \xe0 vos questions et vos achats \xe0 la boutique contribueront \xe0 aider les baleines. Promenez-vous dans le Jardin de la Gr\xe8ve pour admirer la flore de la C\xf4te-Nord et les sculptures de cinq b\xe9lugas grandeur nature. Participez \xe0 un cours de chants de baleines et venez rencontrer nos chercheurs!"}]})});case 6:if(e.sent,!t.ok){e.next=12;break}return e.next=10,t.json();case 10:return a=e.sent,e.abrupt("return",a);case 12:throw new Error("Request failed!");case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})))).apply(this,arguments)}return n.a.createElement(h.a,{onClick:function(){return t.apply(this,arguments)}},"Ajouter la bd")},k=(a(53),{coccinelle:a(79),pieds:a(80),camion:a(81),plaque:a(82),vintage:a(83)}),C=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(e){var r;return Object(u.a)(this,a),(r=t.call(this,e)).componentDidMount=function(){q.reveal(r.refs.box1,{origin:"right",duration:1e3,delay:150,distance:"500px",scale:1,easing:"ease"}),q.reveal(r.refs.box2,{duration:5e3,delay:500}),q.reveal(r.refs.box3,{duration:5e3,delay:1e3}),q.reveal(r.refs.box4,{duration:5e3,delay:2e3}),q.reveal(r.refs.box5,{duration:5e3,delay:3e3}),q.reveal(r.refs.box6,{duration:5e3,delay:4e3}),q.reveal(r.refs.box7,{duration:5e3,delay:5e3})},r.remove=r.remove.bind(Object(d.a)(r)),r}return Object(m.a)(a,[{key:"remove",value:function(){var e=Object(s.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(j+"5f6cb996d899cd03e8b4e7b9",{method:"delete"});case 3:if(!(t=e.sent).ok){e.next=7;break}return console.log("SUPPRESSION!"),e.abrupt("return",t);case 7:throw new Error("Request failed!");case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return n.a.createElement(f.a,{fluid:!0,className:"px-0",id:"accueil"},n.a.createElement(g.a,null,n.a.createElement(f.a,{fluid:!0,id:"pageAccueil",className:"border border-dark"},n.a.createElement(g.a,{className:"text-center haut-40"},n.a.createElement(v.a,{md:5,className:"px-0 border border-dark"},n.a.createElement(A.a,{left:!0},n.a.createElement(b.a,{fluid:!0,className:"accueilImg",src:k.coccinelle}))),n.a.createElement(v.a,{md:2,className:"px-1 my-auto"},n.a.createElement("p",{className:"font-medium p-2"},"\xab Rien ne d\xe9veloppe l\u2019intelligence comme les voyages. \xbb")),n.a.createElement(v.a,{md:5,className:"px-0 border border-dark"},n.a.createElement(A.a,{right:!0},n.a.createElement(b.a,{fluid:!0,className:"accueilImg",src:k.camion,rounded:!0})))),n.a.createElement(g.a,{className:"text-center haut-40"},n.a.createElement(v.a,{md:3,className:"px-1 my-auto"},n.a.createElement("p",{className:"font-medium p-2"},"\xab Lorsqu\u2019elle s\u2019enfuit, la route est la seule amante qui vaille la peine d\u2019\xeatre suivie. \xbb")),n.a.createElement(v.a,{md:6,className:"px-0 border border-dark"},n.a.createElement(A.a,{down:!0},n.a.createElement(b.a,{fluid:!0,className:"mh-100",src:k.pieds,rounded:!0}))),n.a.createElement(v.a,{md:3,className:"px-0 my-auto"},n.a.createElement(b.a,{fluid:!0,className:"p-5",src:k.plaque,rounded:!0}))))),n.a.createElement(g.a,{className:"my-5"},n.a.createElement(v.a,{sm:12},n.a.createElement("h2",{className:"font-xlarge"},"Vous \xeates pr\xeat \xe0 partir..."))),n.a.createElement(g.a,{className:"haut-25 text-center"},n.a.createElement(v.a,{sm:6},n.a.createElement("h2",{className:"font-large my-4",ref:"box2"},"Quand?"),n.a.createElement("h2",{className:"font-large my-4",ref:"box4"},"O\xf9?"),n.a.createElement("h2",{className:"font-large my-4",ref:"box6"},"Comment?")),n.a.createElement(v.a,{sm:6},n.a.createElement("h2",{className:"font-large my-4",ref:"box3"},"Maintenant"),n.a.createElement("h2",{className:"font-large my-4",ref:"box5"},"N'importe o\xf9"),n.a.createElement("h2",{className:"font-large my-4",ref:"box7"},"En voiture... bien s\xfbr!"))),n.a.createElement(g.a,{className:"text-center"},n.a.createElement(v.a,null,n.a.createElement(y.b,{to:"/listetrips"},n.a.createElement("h1",{className:"font-xlarge"},"Nos RoadTrips")))),n.a.createElement(g.a,{className:"my-5 haut-50"},n.a.createElement(f.a,null,n.a.createElement("h2",null,"\xc0 propos de nous..."),n.a.createElement(g.a,null,n.a.createElement(v.a,{md:{span:4,offset:1}},n.a.createElement(b.a,{fluid:!0,src:k.vintage,rounded:!0})),n.a.createElement(v.a,{md:{span:6,offset:1}},n.a.createElement("p",{className:"p-4"},'"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"'))))),n.a.createElement(g.a,null,n.a.createElement(N,null)),n.a.createElement(h.a,{variant:"primary",type:"submit",onClick:this.remove},"supprimer"),n.a.createElement(D,null))}}]),a}(n.a.Component),B=a(49),S=a(103),L=a(102),T=a(24);a(56);function P(e){var t=Object(r.useState)(!1),a=Object(x.a)(t,2),l=a[0],i=a[1],o=Object(r.useState)([]),u=Object(x.a)(o,2),m=u[0],d=(u[1],Object(r.useState)("Bas Saint-Laurent")),p=Object(x.a)(d,2),E=p[0],y=p[1],I=Object(r.useState)(""),N=Object(x.a)(I,2),_=N[0],q=N[1],O=Object(r.useState)(""),A=Object(x.a)(O,2),D=A[0],k=A[1],C=function(){return i(!1)};function P(){return(P=Object(s.a)(c.a.mark((function t(a,r,n,l){var i,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(j,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nom:n,image1:a,image2:r,description:l,region:E,attraits:m})});case 3:if(!(i=t.sent).ok){t.next=12;break}return t.next=7,i.json();case 7:return o=t.sent,e.history.push("/listetrips"),Object(T.b)("Ajout du nouveau road trip "+n),console.log("modification du trip r\xe9ussi"),t.abrupt("return",o);case 12:throw new Error("Request failed!");case 15:t.prev=15,t.t0=t.catch(0),console.log(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))).apply(this,arguments)}return n.a.createElement(f.a,{fluid:!0,id:"formAjout"},n.a.createElement(f.a,null,n.a.createElement(g.a,null,n.a.createElement(v.a,null,n.a.createElement("h1",{className:"my-5 text-center"},"Enregistrement d'un nouveau road trip"))),n.a.createElement(g.a,null,n.a.createElement(v.a,null,n.a.createElement(S.a,null,n.a.createElement(S.a.Group,{controlId:"urlPhoto1"},n.a.createElement(S.a.Label,{className:"font-medium mt-3"},"Entrer l'url de la premi\xe8re image"),n.a.createElement(S.a.Control,Object(B.a)({type:"text",onBlur:function(){return q(document.getElementById("urlPhoto1").value)}},"type","text")),""!==_&&n.a.createElement(b.a,{src:_,rounded:!0,width:"125"})),n.a.createElement(S.a.Group,{controlId:"urlPhoto2"},n.a.createElement(S.a.Label,{className:"font-medium mt-3"},"Entrer l'url de la deuxi\xe8me image"),n.a.createElement(S.a.Control,Object(B.a)({type:"text",onBlur:function(){return k(document.getElementById("urlPhoto2").value)}},"type","text")),""!==D&&n.a.createElement(b.a,{src:D,rounded:!0,width:"125"})),n.a.createElement(S.a.Group,{controlId:"nomDuTripID"},n.a.createElement(S.a.Label,{className:"font-medium mt-3"},"Entrer le nom du trip"),n.a.createElement(S.a.Control,{type:"text"})),n.a.createElement(S.a.Group,{controlId:"descriptionTripID"},n.a.createElement(S.a.Label,{className:"font-medium mt-3"},"Description du road trip"),n.a.createElement(S.a.Control,{as:"textarea",rows:"8"})),n.a.createElement(S.a.Group,null,n.a.createElement(S.a.Label,{className:"font-medium mt-3 mr-2"},"R\xe9gion"),n.a.createElement("select",{onChange:function(e){console.log("Region Selected!!"),y(e.target.value)}},w.map((function(e){return n.a.createElement("option",{key:"region"+e,value:e},e)}))))))),m.length<4?n.a.createElement(g.a,null,n.a.createElement(v.a,{sm:8},n.a.createElement(h.a,{id:"ajoutAttrait",type:"submit",onClick:function(){return i(!0)}},"Ajouter un nouvel attrait touristique")),n.a.createElement(v.a,{sm:8},n.a.createElement("p",null,"Ajout de ",m.length," attraits"))):null,n.a.createElement(g.a,null,n.a.createElement(v.a,null,n.a.createElement(h.a,{variant:"primary",type:"submit",onClick:function(e){e.preventDefault();var t=document.getElementById("urlPhoto1").value,a=document.getElementById("urlPhoto2").value,r=document.getElementById("descriptionTripID").value,n=document.getElementById("nomDuTripID").value;if(m.length<4)for(var l=m.length;l<4;l++)m.push({nom_attrait:"",ville:"",image_attrait:"",description_attrait:""});!function(e,t,a,r){P.apply(this,arguments)}(t,a,n,r)}},"Ajouter un Road trip")))),n.a.createElement(L.a,{show:l,onHide:C},n.a.createElement(L.a.Header,{closeButton:!0},n.a.createElement(L.a.Title,null,"Modal heading")),n.a.createElement(L.a.Body,null,n.a.createElement(S.a.Group,{controlId:"nomAttraitID"},n.a.createElement(S.a.Label,null,"Entrer le nom de l'attrait touristique"),n.a.createElement(S.a.Control,{type:"text"})),n.a.createElement(S.a.Group,{controlId:"endroitAttraitID"},n.a.createElement(S.a.Label,null,"Entrer la ville de l'attrait touristique"),n.a.createElement(S.a.Control,{type:"text"})),n.a.createElement(S.a.Group,{controlId:"imageAttraitID"},n.a.createElement(S.a.Label,null,"Entrer l'url d'une image de l'attrait touristique"),n.a.createElement(S.a.Control,{type:"text"}),n.a.createElement(S.a.Text,{className:"text-muted"},"ajouter une validation")),n.a.createElement(S.a.Group,{controlId:"descriptionAttraitID"},n.a.createElement(S.a.Label,null,"Entrer la description de l'attrait touristique"),n.a.createElement(S.a.Control,{as:"textarea",row:"3",type:"text"}))),n.a.createElement(L.a.Footer,null,n.a.createElement(h.a,{variant:"secondary",onClick:C},"Close"),n.a.createElement(h.a,{variant:"primary",onClick:function(){var e=document.getElementById("nomAttraitID").value,t=document.getElementById("endroitAttraitID").value,a=document.getElementById("imageAttraitID").value,r=document.getElementById("descriptionAttraitID").value;m.push({nom_attrait:e,ville:t,image_attrait:a,description_attrait:r}),C(),console.log(m)}},"Save Changes"))))}P.defaultProps={history:"/listetrips"};var G=P;function R(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(G,{history:e.history}))}R.defaultProps={history:"/listetrips"};var V=R,M=a(105),z=a(106),F=a(66);var U=function(e){return n.a.createElement(v.a,{sm:4,className:"my-5 d-flex flex-wrap align-content-start justify-content-start"},n.a.createElement(A.a,{left:!0,cascade:!0},n.a.createElement(M.a,{style:{width:"28rem"}},n.a.createElement(M.a.Img,{variant:"top",src:e.picture1}),n.a.createElement(M.a.Body,null,n.a.createElement(M.a.Title,null,n.a.createElement(y.b,{to:"trip/"+e.nameTrip+"?id="+e.id},n.a.createElement("h2",null,e.nameTrip))),n.a.createElement(M.a.Text,null,e.regionTrip)),n.a.createElement(M.a.Header,null,n.a.createElement("h3",null,"Attraits touristiques")),n.a.createElement(z.a,{className:"list-group-flush"},Object.keys(e.attraitsTrip).map((function(t,a){return""!==e.attraitsTrip[t].nom_attrait?n.a.createElement(F.a,{key:"liste"+a},e.attraitsTrip[t].nom_attrait):null}))))))};var H=function(){return n.a.createElement(g.a,null,n.a.createElement(v.a,{className:"text-right"},n.a.createElement(y.b,{to:"/ajoutertrip",className:"btn btn-primary"},"Ajouter un Road Trip")))};a(87);var J=function(){var e=Object(r.useState)([]),t=Object(x.a)(e,2),a=t[0],l=t[1];function i(){return(i=Object(s.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(j);case 3:return t=e.sent,e.next=6,t.json();case 6:if(a=e.sent,l(a),t.ok){e.next=10;break}throw Error(t.statusText);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){i.apply(this,arguments)}()}),[]),n.a.createElement(f.a,{fluid:!0,className:"my-5 ",id:"liste"},n.a.createElement("h1",{className:"font-xlarge text-center"},"Liste des road trips"),n.a.createElement(g.a,{id:"listCards",className:"p-5"},a.map((function(e,t){return n.a.createElement(U,{picture1:e.image1,nameTrip:e.nom,descriptionTrip:e.description,regionTrip:e.region,attraitsTrip:e.attraits,key:"manage"+t,id:e._id})}))),n.a.createElement(g.a,null,n.a.createElement(v.a,null,n.a.createElement(H,null))))};function W(e){var t=Object(r.useState)({nom:"",image1:"",image2:"",description:"",region:"",attraits:[{nom_attrait:"",ville:"",image_attrait:"",description_attrait:""},{nom_attrait:"",ville:"",image_attrait:"",description_attrait:""},{nom_attrait:"",ville:"",image_attrait:"",description_attrait:""},{nom_attrait:"",ville:"",image_attrait:"",description_attrait:""}]}),a=Object(x.a)(t,2),l=a[0],i=a[1],o=Object(r.useState)(""),u=Object(x.a)(o,2),m=u[0],d=u[1],p=Object(r.useState)([]),E=Object(x.a)(p,2),y=E[0],I=(E[1],Object(r.useState)({})),N=Object(x.a)(I,2),_=(N[0],N[1]),q=e.location.search.substring(4,e.location.search.length),O=Object(r.useState)(""),A=Object(x.a)(O,2),D=A[0],k=A[1],C=Object(r.useState)(""),B=Object(x.a)(C,2),L=B[0],P=B[1],G=Object(r.useState)(""),R=Object(x.a)(G,2),V=R[0],M=R[1],z=Object(r.useState)(""),F=Object(x.a)(z,2),U=F[0],H=F[1],J=Object(r.useState)(""),W=Object(x.a)(J,2),Q=W[0],$=W[1],K=Object(r.useState)(""),X=Object(x.a)(K,2),Y=X[0],Z=X[1];function ee(){return(ee=Object(s.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(j+q);case 3:return t=e.sent,e.next=6,t.json();case 6:if(a=e.sent,i(a),d(a.region),_(a.attraits),t.ok){e.next=12;break}throw Error(t.statusText);case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}function te(){return(te=Object(s.a)(c.a.mark((function t(a,r,n,i){var o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(j+q,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({nom:n,image1:a,image2:r,description:i,region:m,attraits:y})});case 3:if(!(o=t.sent).ok){t.next=7;break}return e.history.push("/trip/"+l.nom+"?id="+l._id),t.abrupt("return",o);case 7:throw new Error("Request failed!");case 10:t.prev=10,t.t0=t.catch(0),console.log(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}function ae(){return(ae=Object(s.a)(c.a.mark((function t(){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(j+q,{method:"delete"});case 3:if(!(a=t.sent).ok){t.next=9;break}return console.log("SUPPRESSION!"),e.history.push("/listetrips"),T.b.error("Supression du road trip:  "+l.nom),t.abrupt("return",a);case 9:throw new Error("Request failed!");case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){ee.apply(this,arguments)}()}),[]),n.a.createElement(f.a,{fluid:!0,id:"formEdit"},n.a.createElement(f.a,null,n.a.createElement(g.a,null,n.a.createElement(v.a,null,n.a.createElement("h1",{className:"my-5 text-center"},"Modification du road trip"))),n.a.createElement(g.a,null,n.a.createElement(v.a,null,n.a.createElement(S.a,null,n.a.createElement(S.a.Group,{controlId:"nametripID"},n.a.createElement(S.a.Label,null,"Titre du road trip"),n.a.createElement(S.a.Control,{type:"text",defaultValue:l.nom})),n.a.createElement(S.a.Group,{controlId:"pictureID1"},n.a.createElement(S.a.Label,null,"Image 1"),n.a.createElement(S.a.Control,{onBlur:function(){return k(document.getElementById("pictureID1").value)},type:"text",placeholder:"Entrer une URL valide",defaultValue:l.image1}),""!==D?n.a.createElement(b.a,{src:D,rounded:!0,width:"125"}):n.a.createElement(b.a,{src:l.image1,rounded:!0,width:"125"})),n.a.createElement(S.a.Group,{controlId:"pictureID2"},n.a.createElement(S.a.Label,null,"Image 2"),n.a.createElement(S.a.Control,{onBlur:function(){return P(document.getElementById("pictureID2").value)},type:"text",placeholder:"Entrer une URL valide",defaultValue:l.image2}),""!==L?n.a.createElement(b.a,{src:L,rounded:!0,width:"125"}):n.a.createElement(b.a,{src:l.image2,rounded:!0,width:"125"})),n.a.createElement(S.a.Group,{controlId:"descriptionTripID"},n.a.createElement(S.a.Label,null,"Description du road trip"),n.a.createElement(S.a.Control,{as:"textarea",rows:"8",defaultValue:l.description})),n.a.createElement(S.a.Group,null,n.a.createElement("select",{id:"selectRegion",onChange:function(e){console.log("Region Selected!!"),d(e.target.value)},defaultValue:l.region},n.a.createElement("option",{selected:!0},l.region),w.map((function(e){return n.a.createElement("option",{key:e,value:e},e)}))))),n.a.createElement(S.a,null,n.a.createElement("h2",null,"Attrait #1"),n.a.createElement(S.a.Group,null,n.a.createElement(S.a.Label,null,"Nom de l'attrait 1"),n.a.createElement(S.a.Control,{id:"nomAttrait1ID",type:"text",defaultValue:l.attraits[0].nom_attrait})),n.a.createElement(S.a.Group,null,n.a.createElement(S.a.Label,null,"Endroit de l'attrait attrait 1"),n.a.createElement(S.a.Control,{id:"villeAttrait1ID",type:"text",defaultValue:l.attraits[0].ville})),n.a.createElement(S.a.Group,null,n.a.createElement(S.a.Label,null,"Image de l'attrait 1"),n.a.createElement(S.a.Control,{onBlur:function(){return M(document.getElementById("imageAttrait1ID").value)},id:"imageAttrait1ID",type:"text",defaultValue:l.attraits[0].image_attrait}),""!==V?n.a.createElement(b.a,{src:V,rounded:!0,width:"125"}):n.a.createElement(b.a,{src:l.attraits[0].image_attrait,rounded:!0,width:"125"})),n.a.createElement(S.a.Group,null,n.a.createElement(S.a.Label,null,"Description de l'attrait 1"),n.a.createElement(S.a.Control,{id:"descriptionAttrait1ID",as:"textarea",rows:"8",defaultValue:l.attraits[0].description_attrait}))),n.a.createElement(S.a,null,n.a.createElement("h2",null,"Attrait #2"),n.a.createElement(S.a.Group,null,n.a.createElement(S.a.Label,null,"Nom de l'attrait 2"),n.a.createElement(S.a.Control,{id:"nomAttrait2ID",type:"text",defaultValue:l.attraits[1].nom_attrait})),n.a.createElement(S.a.Group,null,n.a.createElement(S.a.Label,null,"Endroit de l'attrait attrait 2"),n.a.createElement(S.a.Control,{id:"villeAttrait2ID",type:"text",defaultValue:l.attraits[1].ville})),n.a.createElement(S.a.Group,null,n.a.createElement(S.a.Label,null,"Image de l'attrait 2"),n.a.createElement(S.a.Control,{onBlur:function(){return H(document.getElementById("imageAttrait2ID").value)},id:"imageAttrait2ID",type:"text",defaultValue:l.attraits[1].image_attrait}),""!==U?n.a.createElement(b.a,{src:U,rounded:!0,width:"125"}):n.a.createElement(b.a,{src:l.attraits[1].image_attrait,rounded:!0,width:"125"})),n.a.createElement(S.a.Group,null,n.a.createElement(S.a.Label,null,"Description de l'attrait 2"),n.a.createElement(S.a.Control,{id:"descriptionAttrait2ID",as:"textarea",rows:"8",defaultValue:l.attraits[1].description_attrait}))),n.a.createElement(S.a,null,n.a.createElement("h2",null,"Attrait #3"),n.a.createElement(S.a.Group,null,n.a.createElement(S.a.Label,null,"Nom de l'attrait 3"),n.a.createElement(S.a.Control,{id:"nomAttrait3ID",type:"text",defaultValue:l.attraits[2].nom_attrait})),n.a.createElement(S.a.Group,null,n.a.createElement(S.a.Label,null,"Endroit de l'attrait attrait 3"),n.a.createElement(S.a.Control,{id:"villeAttrait3ID",type:"text",defaultValue:l.attraits[2].ville})),n.a.createElement(S.a.Group,null,n.a.createElement(S.a.Label,null,"Image de l'attrait 3"),n.a.createElement(S.a.Control,{onBlur:function(){return $(document.getElementById("imageAttrait3ID").value)},id:"imageAttrait3ID",type:"text",defaultValue:l.attraits[2].image_attrait}),""!==Q?n.a.createElement(b.a,{src:Q,rounded:!0,width:"125"}):n.a.createElement(b.a,{src:l.attraits[2].image_attrait,rounded:!0,width:"125"})),n.a.createElement(S.a.Group,null,n.a.createElement(S.a.Label,null,"Description de l'attrait 3"),n.a.createElement(S.a.Control,{id:"descriptionAttrait3ID",as:"textarea",rows:"8",defaultValue:l.attraits[2].description_attrait}))),n.a.createElement(S.a,null,n.a.createElement("h2",null,"Attrait #4"),n.a.createElement(S.a.Group,null,n.a.createElement(S.a.Label,null,"Nom de l'attrait 4"),n.a.createElement(S.a.Control,{id:"nomAttrait4ID",type:"text",defaultValue:l.attraits[3].nom_attrait})),n.a.createElement(S.a.Group,null,n.a.createElement(S.a.Label,null,"Endroit de l'attrait attrait 4"),n.a.createElement(S.a.Control,{id:"villeAttrait4ID",type:"text",defaultValue:l.attraits[3].ville})),n.a.createElement(S.a.Group,null,n.a.createElement(S.a.Label,null,"Image de l'attrait 4"),n.a.createElement(S.a.Control,{onBlur:function(){return Z(document.getElementById("imageAttrait4ID").value)},id:"imageAttrait4ID",type:"text",defaultValue:l.attraits[3].image_attrait}),""!==Y?n.a.createElement(b.a,{src:Y,rounded:!0,width:"125"}):n.a.createElement(b.a,{src:l.attraits[3].image_attrait,rounded:!0,width:"125"})),n.a.createElement(S.a.Group,null,n.a.createElement(S.a.Label,null,"Description de l'attrait 4"),n.a.createElement(S.a.Control,{id:"descriptionAttrait4ID",as:"textarea",rows:"8",defaultValue:l.attraits[3].description_attrait}))),n.a.createElement(h.a,{variant:"primary",type:"submit",onClick:function(e){e.preventDefault(),function(){T.b.dark("Sauvegarde des donn\xe9es");var e=document.getElementById("nomAttrait1ID").value,t=document.getElementById("imageAttrait1ID").value,a=document.getElementById("villeAttrait1ID").value,r=document.getElementById("descriptionAttrait1ID").value;y.push({nom_attrait:e,image_attrait:t,ville:a,description_attrait:r});var n=document.getElementById("nomAttrait2ID").value,l=document.getElementById("imageAttrait2ID").value,i=document.getElementById("villeAttrait2ID").value,o=document.getElementById("descriptionAttrait2ID").value;y.push({nom_attrait:n,image_attrait:l,ville:i,description_attrait:o});var c=document.getElementById("nomAttrait3ID").value,s=document.getElementById("imageAttrait3ID").value,u=document.getElementById("villeAttrait3ID").value,m=document.getElementById("descriptionAttrait3ID").value;y.push({nom_attrait:c,image_attrait:s,ville:u,description_attrait:m});var d=document.getElementById("nomAttrait4ID").value,p=document.getElementById("imageAttrait4ID").value,E=document.getElementById("villeAttrait4ID").value,f=document.getElementById("descriptionAttrait4ID").value;y.push({nom_attrait:d,image_attrait:p,ville:E,description_attrait:f})}(),function(e,t,a,r){te.apply(this,arguments)}(document.getElementById("pictureID1").value,document.getElementById("pictureID2").value,document.getElementById("nametripID").value,document.getElementById("descriptionTripID").value)}},"Enregistrer"),n.a.createElement(h.a,{className:"btn btn-danger ml-3 mt-3",onClick:function(){return ae.apply(this,arguments)}},"Supprimer le road trip")))))}W.defaultProps={history:"/listetrips"};var Q=W;var $=function(){return n.a.createElement(g.a,null,n.a.createElement(v.a,{className:"text-right"},n.a.createElement(y.b,{to:"/",className:"btn btn-primary"},"Retour \xe0 l'accueil")))};var K=function(){return n.a.createElement(g.a,null,n.a.createElement(v.a,{className:"text-right"},n.a.createElement(y.b,{to:"/listetrips",className:"btn btn-primary"},"Retour \xe0 la liste des road trips")))},X=a(9),Y=(a(88),a(104)),Z=a(64);a(90);var ee=function(e){var t=a(91),l=a(92),i=a(93),o=Object(r.useState)({_id:"",nom:"",image1:"",image2:"",image3:"",description:"",attraits:["",""]}),u=Object(x.a)(o,2),m=u[0],d=u[1],p=e.location.search.substring(4,e.location.search.length);function E(){return(E=Object(s.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(j+p);case 3:return t=e.sent,e.next=6,t.json();case 6:if(a=e.sent,d(a),t.ok){e.next=10;break}throw Error(t.statusText);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){E.apply(this,arguments)}()}),[]),new Z.a({parent:document.querySelector(".my-div"),intensity1:.1,intensity2:.1,angle2:Math.PI/2,image1:t,image2:l,displacementImage:i}),n.a.createElement(n.a.Fragment,null,n.a.createElement(f.a,{id:"details"},n.a.createElement(g.a,{className:"mb-5"},n.a.createElement(v.a,{sm:12},n.a.createElement("div",{className:"my-div"},n.a.createElement("h1",{className:"animText m-5 font-xlarge"},"Vous \xeates enfin pr\xeat!")))),n.a.createElement(g.a,null,n.a.createElement(v.a,null,n.a.createElement("div",{className:"my-div h-100"}))),n.a.createElement(g.a,null,n.a.createElement(g.a,null,n.a.createElement(v.a,{className:"mb-5",sm:12},n.a.createElement(y.b,{to:"edit/"+m.nom+"?id="+m._id},n.a.createElement("h2",{className:"mt-5 font-xlarge"},m.nom)))),n.a.createElement(g.a,null,n.a.createElement(v.a,{className:"mb-5",sm:12},n.a.createElement("p",{className:"mt-5 font-medium"},m.description),n.a.createElement("h4",{className:"mt-5 font-small"},m.region))),n.a.createElement(v.a,{className:"h-50 mb-5",sm:12},n.a.createElement(Y.a,{id:"myCarousel"},n.a.createElement(Y.a.Item,null,n.a.createElement(b.a,{className:"d-block w-100",src:m.image1,alt:"First slide"})),n.a.createElement(Y.a.Item,null,n.a.createElement(b.a,{className:"d-block w-100",src:m.image2,alt:"Third slide"}))))),Object.keys(m.attraits).map((function(e,t){return""!==m.attraits[e].nom_attrait?Number.isInteger([e]/2)?n.a.createElement(g.a,{key:"details"+t,className:"mt-5 detailsText "},n.a.createElement(v.a,{className:"my-4",md:4},n.a.createElement(b.a,{fluid:!0,src:m.attraits[e].image_attrait})),n.a.createElement(v.a,{className:"my-4 p-2",md:8},n.a.createElement("h3",null,m.attraits[e].nom_attrait),n.a.createElement("p",{className:"font-small"},m.attraits[e].description_attrait),n.a.createElement("p",null,m.attraits[e].ville))):n.a.createElement(g.a,{key:"details"+t,className:"mt-5 detailsText"},n.a.createElement(v.a,{className:"my-4 p-2",md:8},n.a.createElement("h3",null,m.attraits[e].nom_attrait),n.a.createElement("p",{className:"font-small"},m.attraits[e].description_attrait),n.a.createElement("p",null,m.attraits[e].ville)),n.a.createElement(v.a,{className:"my-4",md:4},n.a.createElement(b.a,{fluid:!0,src:m.attraits[e].image_attrait}))):null}))))},te=function(e){Object(p.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(u.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).componentDidMount=function(){q.reveal(e.refs.box1,{origin:"right",duration:1e3,delay:150,distance:"500px",scale:1,easing:"ease"})},e}return Object(m.a)(a,[{key:"render",value:function(){return n.a.createElement(g.a,{id:"titre"},n.a.createElement(v.a,{sm:8},n.a.createElement("h1",{className:"rouge",ref:"box1"},"La trotteuse")),n.a.createElement(v.a,{sm:2},n.a.createElement(h.a,{variant:"secondary",size:"sm",block:!0,id:"boutonInstall"},"Installer l'application")))}}]),a}(n.a.Component);var ae=function(){var e=Object(X.f)();return n.a.createElement(n.a.Fragment,null,n.a.createElement(T.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),n.a.createElement(T.a,null),n.a.createElement(te,null),n.a.createElement(X.c,null,n.a.createElement(X.a,{path:"/",exact:!0,component:C}),n.a.createElement(X.a,{path:"/listetrips",component:J}),n.a.createElement(X.a,{path:"/ajoutertrip",component:V}),n.a.createElement(X.a,{path:"/trip/edit/:titre",component:Q}),n.a.createElement(X.a,{path:"/trip/:titre",component:ee})),"/"!==e.pathname&&n.a.createElement($,null),"trip/"!==e.pathname&&"/"!==e.pathname&&"/listetrips"!==e.pathname&&n.a.createElement(K,null))},re=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ne(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(94);i.a.render(n.a.createElement(y.a,{basename:"/AEC_Front_End/Programmation2/projetfinalreact/build"},n.a.createElement(ae,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/AEC_Front_End/Programmation2/projetfinalreact/build",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/AEC_Front_End/Programmation2/projetfinalreact/build","/service-worker.js");re?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var r=a.headers.get("content-type");404===a.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ne(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):ne(t,e)}))}}()}},[[67,1,2]]]);
//# sourceMappingURL=main.af021cf9.chunk.js.map