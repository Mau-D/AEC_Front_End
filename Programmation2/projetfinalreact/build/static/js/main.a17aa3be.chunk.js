(this.webpackJsonpprojetfinalreact=this.webpackJsonpprojetfinalreact||[]).push([[0],{48:function(e,t,a){},57:function(e,t,a){e.exports=a(79)},62:function(e,t,a){},63:function(e,t,a){},68:function(e,t,a){e.exports=a.p+"static/media/coccinelle.5ad5bf0a.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/pieds.c7fe3a9d.jpg"},70:function(e,t,a){e.exports=a.p+"static/media/camion.30586d39.jpg"},77:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(18),o=a.n(l),c=(a(62),a(63),a(31)),i=a(32),u=a(37),s=a(36),m=a(82),d=a(83),p=a(84),E=a(50),f=a(85),h=a(10),b=a(55),v=Object(b.a)(),g=a(26),y=a.n(g),x=(a(48),{coccinelle:a(68),pieds:a(69),camion:a(70)}),j=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).componentDidMount=function(){v.reveal(e.refs.box1,{origin:"right",duration:1e3,delay:150,distance:"500px",scale:1,easing:"ease"}),v.reveal(e.refs.box2,{duration:5e3,delay:500}),v.reveal(e.refs.box3,{duration:5e3,delay:1e3}),v.reveal(e.refs.box4,{duration:5e3,delay:2e3}),v.reveal(e.refs.box5,{duration:5e3,delay:3e3}),v.reveal(e.refs.box6,{duration:5e3,delay:4e3}),v.reveal(e.refs.box7,{duration:5e3,delay:5e3})},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(m.a,{fluid:!0},n.a.createElement(d.a,{variant:"primary",size:"lg",block:!0,id:"boutonInstall"},"Installer l'application"),n.a.createElement(p.a,null,n.a.createElement(E.a,{sm:12},n.a.createElement("h2",null,"Vous \xeates pr\xeat \xe0 partir..."))),n.a.createElement(p.a,null,n.a.createElement(E.a,{sm:6},n.a.createElement("h2",{ref:"box2"},"Quand?"),n.a.createElement("h2",{ref:"box4"},"O\xf9?"),n.a.createElement("h2",{ref:"box6"},"Comment?")),n.a.createElement(E.a,{sm:6},n.a.createElement("h2",{ref:"box3"},"Maintenant"),n.a.createElement("h2",{ref:"box5"},"N'importe o\xf9"),n.a.createElement("h2",{ref:"box7"},"En voiture... bien s\xfbr!"))),n.a.createElement(p.a,null,n.a.createElement(E.a,null,n.a.createElement(h.b,{to:"/listetrips"},"Voir tous les road trips..."))),n.a.createElement(m.a,{fluid:!0,id:"pageAccueil"},n.a.createElement(p.a,{className:"text-center"},n.a.createElement(E.a,{md:5,className:"px-0 border border-dark"},n.a.createElement(y.a,{left:!0},n.a.createElement(f.a,{fluid:!0,src:x.coccinelle,rounded:!0}))),n.a.createElement(E.a,{md:2,className:"px-0 border border-dark"},n.a.createElement("p",null,"TEXTE")),n.a.createElement(E.a,{md:5,className:"px-0 border border-dark"},n.a.createElement(y.a,{right:!0},n.a.createElement(f.a,{fluid:!0,className:"",src:x.camion,rounded:!0})))),n.a.createElement(p.a,null,n.a.createElement(E.a,{md:3,className:"px-0 border border-dark"},n.a.createElement("p",null,"TEXTE")),n.a.createElement(E.a,{md:6,className:"px-0 border border-dark"},n.a.createElement(y.a,{down:!0},n.a.createElement(f.a,{fluid:!0,src:x.pieds,rounded:!0}))),n.a.createElement(E.a,{md:3,className:"px-0 border border-dark"},n.a.createElement("p",null,"TEXTE")))),n.a.createElement(m.a,null,n.a.createElement(p.a,null,n.a.createElement(E.a,{md:12},n.a.createElement("p",null,'"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"')))))}}]),a}(n.a.Component),w=a(8),I=a.n(w),k=a(38),O=a(13),C=a(14),T=a(87),N=a(86),q="https://crudcrud.com/api/f00dd6de8e2e40918bd1e7cf612725c1/roadtrips/",A="https://crudcrud.com/api/f00dd6de8e2e40918bd1e7cf612725c1/attraits/",D=a(21);function L(e){var t=Object(r.useState)(!1),a=Object(C.a)(t,2),l=a[0],o=a[1],c=Object(r.useState)([]),i=Object(C.a)(c,2),u=i[0],s=(i[1],Object(r.useState)([])),f=Object(C.a)(s,2),h=(f[0],f[1],function(){return o(!1)});function b(){return(b=Object(O.a)(I.a.mark((function t(a,r,n,l,o){var c,i,s;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u.map((function(e){return v(e)})),t.prev=1,t.next=4,fetch(q,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify((c={nom:l,image1:a,image2:r},Object(k.a)(c,"image2",n),Object(k.a)(c,"description",o),Object(k.a)(c,"attraits",u),c))});case 4:if(!(i=t.sent).ok){t.next=13;break}return t.next=8,i.json();case 8:return s=t.sent,e.history.push("/listetrips"),Object(D.b)("Ajout du nouveau road trip "+l),console.log("ajout du trip r\xe9ussi"),t.abrupt("return",s);case 13:throw new Error("Request failed!");case 16:t.prev=16,t.t0=t.catch(1),console.log(t.t0);case 19:case"end":return t.stop()}}),t,null,[[1,16]])})))).apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return(g=Object(O.a)(I.a.mark((function e(t){var a,r;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("je suis dans addAttraits"),console.log(u),e.prev=2,e.next=5,fetch(A,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({nom_attrait:t.nom_attrait,endroit_attrait:t.ville})});case 5:if(!(a=e.sent).ok){e.next=12;break}return e.next=9,a.json();case 9:return r=e.sent,console.log("ajout des attraits r\xe9ussi"),e.abrupt("return",r);case 12:throw new Error("Request failed!");case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})))).apply(this,arguments)}function y(){return(y=Object(O.a)(I.a.mark((function e(){var t;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(A+"5f5ab2c1d899cd03e8b4e14f",{method:"delete"});case 3:if(!(t=e.sent).ok){e.next=7;break}return console.log("SUPPRESSION!"),e.abrupt("return",t);case 7:throw new Error("Request failed!");case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement(p.a,null,n.a.createElement(E.a,null,n.a.createElement("h1",null,"Formulaire d'enregistrement d'un nouveau road trip"),n.a.createElement(T.a,null,n.a.createElement(T.a.Group,{controlId:"urlPhoto1"},n.a.createElement(T.a.Label,null,"Entrer l'url de la premi\xe8re image"),n.a.createElement(T.a.Control,{type:"text"})),n.a.createElement(T.a.Group,{controlId:"urlPhoto2"},n.a.createElement(T.a.Label,null,"Entrer l'url de la deuxi\xe8me image"),n.a.createElement(T.a.Control,{type:"text"})),n.a.createElement(T.a.Group,{controlId:"urlPhoto3"},n.a.createElement(T.a.Label,null,"Entrer l'url de la troisi\xe8me image"),n.a.createElement(T.a.Control,{type:"text"})),n.a.createElement(T.a.Group,{controlId:"nomDuTrip"},n.a.createElement(T.a.Label,null,"Entrer le nom du trip"),n.a.createElement(T.a.Control,{type:"text"}),n.a.createElement(T.a.Text,{className:"text-muted"},"ajouter une validation")),n.a.createElement(T.a.Group,{controlId:"descriptionTrip"},n.a.createElement(T.a.Label,null,"Description du road trip"),n.a.createElement(T.a.Control,{as:"textarea",rows:"3"})),n.a.createElement(T.a.Group,{controlId:"nomDeLAttrait"},n.a.createElement(T.a.Label,null,"Entrer le nom de l'attrait principal"),n.a.createElement(T.a.Control,{type:"text"})),n.a.createElement(T.a.Group,{controlId:"endroitDeLAttrait"},n.a.createElement(T.a.Label,null,"Endroit"),n.a.createElement(T.a.Control,{type:"text"}))))),n.a.createElement("div",null,n.a.createElement(d.a,{type:"submit",onClick:function(){return o(!0)}},"Enregistrer nouvel attrait touristique"),n.a.createElement(d.a,{variant:"primary",type:"submit",onClick:function(){return y.apply(this,arguments)}},"supprimer"),n.a.createElement(N.a,{show:l,onHide:h},n.a.createElement(N.a.Header,{closeButton:!0},n.a.createElement(N.a.Title,null,"Modal heading")),n.a.createElement(N.a.Body,null,n.a.createElement(T.a.Group,{controlId:"nomAttraitID"},n.a.createElement(T.a.Label,null,"Entrer le nom de l'attrait touristique"),n.a.createElement(T.a.Control,{type:"text"}),n.a.createElement(T.a.Text,{className:"text-muted"},"ajouter une validation")),n.a.createElement(T.a.Group,{controlId:"endroitAttraitID"},n.a.createElement(T.a.Label,null,"Entrer le nom de l'attrait touristique"),n.a.createElement(T.a.Control,{type:"text"}),n.a.createElement(T.a.Text,{className:"text-muted"},"ajouter une validation"))),n.a.createElement(N.a.Footer,null,n.a.createElement(d.a,{variant:"secondary",onClick:h},"Close"),n.a.createElement(d.a,{variant:"primary",onClick:function(){var e=document.getElementById("nomAttraitID").value,t=document.getElementById("endroitAttraitID").value;u.push({nom_attrait:e,ville:t}),h(),console.log(u)}},"Save Changes")))),n.a.createElement(d.a,{variant:"primary",type:"submit",onClick:function(e){e.preventDefault();var t=document.getElementById("urlPhoto1").value,a=document.getElementById("urlPhoto2").value,r=document.getElementById("urlPhoto3").value,n=document.getElementById("descriptionTrip").value;!function(e,t,a,r,n){b.apply(this,arguments)}(t,a,r,document.getElementById("nomDuTrip").value,n,document.getElementById("nomDeLAttrait").value,document.getElementById("endroitDeLAttrait").value)}},"Ajouter un Road trip")))}L.defaultProps={history:"/listetrips"};var S=L;function B(e){return n.a.createElement(n.a.Fragment,null,n.a.createElement(S,{history:e.history}))}B.defaultProps={history:"/listetrips"};var P=B,R=a(89);var G=function(e){return console.log(e.nameAttrait),n.a.createElement(E.a,{sm:3,className:"mt-5"},n.a.createElement(y.a,{left:!0,cascade:!0},n.a.createElement(R.a,{style:{width:"28rem"}},n.a.createElement(R.a.Img,{variant:"top",src:e.picture}),n.a.createElement(R.a.Body,null,n.a.createElement(R.a.Title,null,n.a.createElement(h.b,{to:"trip/"+e.nameTrip+"?id="+e.id},n.a.createElement("h2",null,e.nameTrip))),n.a.createElement(R.a.Text,null,e.nameAttrait),n.a.createElement(R.a.Text,null,"endroit: ",e.cityAttrait)))))};var _=function(){return n.a.createElement(p.a,null,n.a.createElement(E.a,{className:"text-right"},n.a.createElement(h.b,{to:"/ajoutertrip",className:"btn btn-primary"},"Ajouter un Road Trip")))};var F=function(){var e=Object(r.useState)([]),t=Object(C.a)(e,2),a=t[0],l=t[1];function o(){return(o=Object(O.a)(I.a.mark((function e(){var t,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(q);case 3:return t=e.sent,e.next=6,t.json();case 6:if(a=e.sent,l(a),t.ok){e.next=10;break}throw Error(t.statusText);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[]),n.a.createElement(m.a,{fluid:!0},n.a.createElement("h1",null,"Affichage de la liste des road trips"),n.a.createElement(p.a,null,a.map((function(e,t){return n.a.createElement(G,{picture:e.image1,nameTrip:e.nom,nameAttrait:e.attraits.nom_attrait,cityAttrait:e.attraits.ville,id:e._id})}))),n.a.createElement(p.a,null,n.a.createElement(E.a,null,n.a.createElement(_,null))))};function U(e){var t=Object(r.useState)({nom:"",image1:"",image2:"",image3:"",description:"",attraits:["",""]}),a=Object(C.a)(t,2),l=a[0],o=a[1],c=Object(r.useState)(e.location.search.substring(4,e.location.search.length)),i=Object(C.a)(c,2),u=i[0];i[1];function s(){return(s=Object(O.a)(I.a.mark((function e(){var t,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(q+u);case 3:return t=e.sent,e.next=6,t.json();case 6:if(a=e.sent,o(a),t.ok){e.next=10;break}throw Error(t.statusText);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}function h(){return(h=Object(O.a)(I.a.mark((function t(a,r,n,o,c,i,s){var m;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(q+u,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({nom:o,image1:a,image2:r,image3:n,description:c,attraits:[{nomAttrait:i},{endroit:s}]})});case 3:if(!(m=t.sent).ok){t.next=8;break}return e.history.push("/trip/"+l.nom+"?id="+l._id),D.b.dark("Modification du road trip:  "+l.nom),t.abrupt("return",m);case 8:throw new Error("Request failed!");case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function b(){return(b=Object(O.a)(I.a.mark((function t(){var a;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(q+u,{method:"delete"});case 3:if(!(a=t.sent).ok){t.next=9;break}return console.log("SUPPRESSION!"),e.history.push("/listetrips"),D.b.error("Supression du road trip:  "+l.nom),t.abrupt("return",a);case 9:throw new Error("Request failed!");case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement(p.a,null,n.a.createElement(E.a,null,n.a.createElement(T.a,null,n.a.createElement(T.a.Group,{controlId:"nametripID"},n.a.createElement(T.a.Label,null,"Titre du road trip"),n.a.createElement(T.a.Control,{type:"text",defaultValue:l.nom})),n.a.createElement(T.a.Group,{controlId:"pictureID1"},n.a.createElement(T.a.Label,null,"Image 1"),n.a.createElement(T.a.Control,{type:"text",placeholder:"Entrer une URL valide",defaultValue:l.image1}),""!==l.photo&&n.a.createElement(f.a,{src:l.image1,rounded:!0,width:"125"})),n.a.createElement(T.a.Group,{controlId:"pictureID2"},n.a.createElement(T.a.Label,null,"Image 2"),n.a.createElement(T.a.Control,{type:"text",placeholder:"Entrer une URL valide",defaultValue:l.image2}),""!==l.photo&&n.a.createElement(f.a,{src:l.image2,rounded:!0,width:"125"})),n.a.createElement(T.a.Group,{controlId:"pictureID3"},n.a.createElement(T.a.Label,null,"Image 3"),n.a.createElement(T.a.Control,{type:"text",placeholder:"Entrer une URL valide",defaultValue:l.image3}),""!==l.photo&&n.a.createElement(f.a,{src:l.image3,rounded:!0,width:"125"})),n.a.createElement(T.a.Group,{controlId:"descriptionTripID"},n.a.createElement(T.a.Label,null,"Description du road trip"),n.a.createElement(T.a.Control,{as:"textarea",rows:"3"})),n.a.createElement(T.a.Group,{controlId:"nameactivityID"},n.a.createElement(T.a.Label,null,"Attrait principal"),n.a.createElement(T.a.Control,{type:"text",defaultValue:l.attraits[0].nomAttrait})),n.a.createElement(T.a.Group,{controlId:"placeID"},n.a.createElement(T.a.Label,null,"endroit"),n.a.createElement(T.a.Control,{type:"text",defaultValue:l.attraits[1].endroit})),n.a.createElement(d.a,{variant:"primary",type:"submit",onClick:function(e){e.preventDefault(),function(e,t,a,r,n,l,o){h.apply(this,arguments)}(document.getElementById("pictureID1").value,document.getElementById("pictureID2").value,document.getElementById("pictureID3").value,document.getElementById("nametripID").value,document.getElementById("descriptionTripID").value,document.getElementById("nameactivityID").value,document.getElementById("placeID").value)}},"Enregistrer"),n.a.createElement("p",{className:"btn btn-danger ml-3 mt-3",onClick:function(){return b.apply(this,arguments)}},"Supprimer le road trip"))))))}U.defaultProps={history:"/listetrips"};var V=U;var W=function(){return n.a.createElement(p.a,null,n.a.createElement(E.a,{className:"text-right"},n.a.createElement(h.b,{to:"/",className:"btn btn-primary"},"Retour \xe0 l'accueil")))};var J=function(){return n.a.createElement(p.a,null,n.a.createElement(E.a,{className:"text-right"},n.a.createElement(h.b,{to:"/listetrips",className:"btn btn-primary"},"Retour \xe0 la liste des road trips")))},M=a(6),H=(a(76),a(88));a(77);var X=function(e){var t=Object(r.useState)({_id:"",nom:"",image1:"",image2:"",image3:"",description:"",attraits:["",""]}),a=Object(C.a)(t,2),l=a[0],o=a[1],c=Object(r.useState)(e.location.search.substring(4,e.location.search.length)),i=Object(C.a)(c,2),u=i[0];function s(){return(s=Object(O.a)(I.a.mark((function e(){var t,a;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(q+u);case 3:return t=e.sent,e.next=6,t.json();case 6:if(a=e.sent,o(a),t.ok){e.next=10;break}throw Error(t.statusText);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))).apply(this,arguments)}return i[1],Object(r.useEffect)((function(){!function(){s.apply(this,arguments)}()}),[]),n.a.createElement(m.a,null,n.a.createElement("h1",null,"Affichage d\xe9taill\xe9e du road trip"),n.a.createElement(p.a,null,n.a.createElement(E.a,{className:"h-50",sm:12},n.a.createElement(f.a,{src:l.image}),n.a.createElement(H.a,{id:"myCarousel"},n.a.createElement(H.a.Item,null,n.a.createElement(f.a,{className:"d-block w-100",src:l.image1,alt:"First slide"})),n.a.createElement(H.a.Item,null,n.a.createElement(f.a,{className:"d-block w-100",src:l.image2,alt:"Third slide"})),n.a.createElement(H.a.Item,null,n.a.createElement(f.a,{className:"d-block w-100",src:l.image3,alt:"Third slide"}))))),n.a.createElement(p.a,null,n.a.createElement(E.a,{class:!0,sm:12},n.a.createElement(h.b,{to:"edit/"+l.nom+"?id="+l._id},n.a.createElement("h2",null,"Nom du road trip: ",l.nom)))),n.a.createElement(p.a,null,n.a.createElement(E.a,{class:!0,sm:12},n.a.createElement("p",null,l.description))),n.a.createElement(p.a,null,n.a.createElement(E.a,{class:!0,sm:12},n.a.createElement("h1",null,l.attraits.nom_attrait),n.a.createElement("h1",null,l.attraits.ville))))},Q=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).componentDidMount=function(){v.reveal(e.refs.box1,{origin:"right",duration:1e3,delay:150,distance:"500px",scale:1,easing:"ease"})},e}return Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(p.a,null,n.a.createElement(E.a,{sm:12},n.a.createElement("h2",{className:"rouge",ref:"box1"},"La trotteuse")))}}]),a}(n.a.Component);var z=function(){var e=Object(M.f)();return n.a.createElement(n.a.Fragment,null,n.a.createElement(D.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),n.a.createElement(D.a,null),n.a.createElement(m.a,{fluid:!0},n.a.createElement(Q,null),n.a.createElement(M.c,null,n.a.createElement(M.a,{path:"/",exact:!0,component:j}),n.a.createElement(M.a,{path:"/listetrips",component:F}),n.a.createElement(M.a,{path:"/ajoutertrip",component:P}),n.a.createElement(M.a,{path:"/trip/edit/:titre",component:V}),n.a.createElement(M.a,{path:"/trip/:titre",component:X}))),"/"!==e.pathname&&n.a.createElement(W,null),"trip/"!==e.pathname&&"/"!==e.pathname&&"/listetrips"!==e.pathname&&n.a.createElement(J,null))},$=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(78);o.a.render(n.a.createElement(h.a,{basename:"/AEC_Front_End/Programmation2/projetfinalreact/build"},n.a.createElement(z,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/AEC_Front_End/Programmation2/projetfinalreact/build",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/AEC_Front_End/Programmation2/projetfinalreact/build","/service-worker.js");$?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var r=a.headers.get("content-type");404===a.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):K(t,e)}))}}()}},[[57,1,2]]]);
//# sourceMappingURL=main.a17aa3be.chunk.js.map