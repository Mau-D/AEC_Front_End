(this.webpackJsonpbottindeclients=this.webpackJsonpbottindeclients||[]).push([[0],{26:function(e,t,a){e.exports=a.p+"static/media/client1.e713506b.jpg"},27:function(e,t,a){e.exports=a.p+"static/media/client2.d465a490.jpg"},28:function(e,t,a){e.exports=a.p+"static/media/client3.be5a4d99.jpg"},29:function(e,t,a){e.exports=a.p+"static/media/client4.7b81feb8.jpg"},30:function(e,t,a){e.exports=a.p+"static/media/client5.f3125fdb.jpg"},31:function(e,t,a){e.exports=a.p+"static/media/client6.d7436c23.jpg"},32:function(e,t,a){e.exports=a.p+"static/media/client7.248a9926.jpg"},33:function(e,t,a){e.exports=a.p+"static/media/client8.42e7e1a1.jpg"},34:function(e,t,a){e.exports=a.p+"static/media/client9.d802d9b4.jpg"},35:function(e,t,a){e.exports=a.p+"static/media/client10.384e7ea4.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/client11.54f82d8d.jpg"},37:function(e,t,a){e.exports=a.p+"static/media/client12.4060be27.jpg"},41:function(e,t,a){e.exports=a(53)},46:function(e,t,a){},47:function(e,t,a){},51:function(e,t,a){var n={"./client1.jpg":26,"./client10.jpg":35,"./client11.jpg":36,"./client12.jpg":37,"./client2.jpg":27,"./client3.jpg":28,"./client4.jpg":29,"./client5.jpg":30,"./client6.jpg":31,"./client7.jpg":32,"./client8.jpg":33,"./client9.jpg":34};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=51},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(38),l=a.n(o),c=(a(46),a(47),a(8)),i=a(9),s=a(5),m=a(11),u=a(10),h=a(12),p=a(7),d=a(17),f=a(14),g=a(19),E=a(40),v=a(18),y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{xs:12,sm:6,md:4,lg:3,xl:2,className:"mt-4"},r.a.createElement(g.a,{className:"mx-auto shadow p-3 mb-5 bg-white rounded",style:{width:"14rem",verticalAlign:"middle"}},r.a.createElement(g.a.Img,{variant:"top",src:this.props.photo,style:{height:"200px"}}),r.a.createElement(g.a.Body,{className:"px-0"},r.a.createElement(g.a.Title,null,this.props.nom),r.a.createElement(g.a.Subtitle,{style:{fontSize:"0.8rem"}},this.props.profession)),r.a.createElement(E.a,{className:"list-group-flush"},r.a.createElement(v.a,{className:"px-0",style:{fontSize:"0.8rem"}},"Courriel: ",this.props.courriel),r.a.createElement(v.a,{className:"px-0",style:{fontSize:"0.8rem"}},"T\xe9l\xe9phone: ",this.props.tel),r.a.createElement(v.a,{className:"px-0",style:{fontSize:"0.8rem"}},"Adresse: ",this.props.adresse))))}}]),a}(r.a.Component),b=a(6),C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(s.a)(n)),n}return Object(i.a)(a,[{key:"handleClick",value:function(){var e=document.getElementById("formSearch").value;this.props.onClick(e),this.props.recherche(!0)}},{key:"render",value:function(){return r.a.createElement(p.a,{md:12,lg:6,className:"mt-5"},r.a.createElement(b.a,null,r.a.createElement(b.a.Group,{controlId:"formSearch"},r.a.createElement(b.a.Control,{type:"search",placeholder:"Rechercher un client"}),r.a.createElement(b.a.Text,{className:"text-muted"},"Appuyer sur le bouton pour afficher les clients")),r.a.createElement(f.a,{className:"silverButton  border-dark",type:"submit",onClick:this.handleClick},"Recherche")))}}]),a}(r.a.Component),k=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(s.a)(n)),n}return Object(i.a)(a,[{key:"handleClick",value:function(){this.props.onClick(!1)}},{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement(p.a,{sm:6,className:"mt-3"},r.a.createElement(f.a,{className:"silverButton  border-dark",onClick:this.handleClick},"Retour au bottin")))}}]),a}(r.a.Component),j=a(16),O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(s.a)(n)),n}return Object(i.a)(a,[{key:"handleClick",value:function(){var e=document.getElementById("photoId").value,t=document.getElementById("nomId").value,a=document.getElementById("profession").value,n=document.getElementById("courriel").value,o=document.getElementById("tel").value,l=document.getElementById("adresse").value;return this.props.onClick({photo:e,nom:t,profession:a,courriel:r.a.createElement("a",{href:"mailto:"+n},n),tel:r.a.createElement("a",{href:"tel:+1-"+o},o),adresse:l}),r.a.createElement(r.a.Fragment,null,console.log("onClick"+this.props.onClick))}},{key:"render",value:function(){return r.a.createElement(d.a,{fluid:!0,className:"bg hauteur100"},r.a.createElement(h.a,{className:"align-content-center"},r.a.createElement(p.a,{md:12,lg:6},r.a.createElement("h2",null,"Enregistrement d'un nouveau client"),r.a.createElement(b.a,null,r.a.createElement(b.a.Group,null,r.a.createElement(j.a,null,"Photo"),r.a.createElement(b.a.Control,{type:"text",placeholder:"num\xe9ro client",id:"photoId"}),r.a.createElement(j.a,null,"Nom complet"),r.a.createElement(b.a.Control,{type:"text",placeholder:"",id:"nomId"}),r.a.createElement(j.a,null,"Profession"),r.a.createElement(b.a.Control,{type:"text",placeholder:"",id:"profession"}),r.a.createElement(j.a,null,"Courriel"),r.a.createElement(b.a.Control,{type:"text",placeholder:"mail@gmail.com",id:"courriel"}),r.a.createElement(j.a,null,"T\xe9l\xe9phone"),r.a.createElement(b.a.Control,{type:"text",placeholder:"555-555-5555",id:"tel"}),r.a.createElement(j.a,null,"Adresse"),r.a.createElement(b.a.Control,{type:"text",placeholder:"No., Nom de la rue",id:"adresse"})),r.a.createElement(f.a,{className:"silverButton  border-dark",type:"",onClick:this.handleClick},"Enregistrer")))))}}]),a}(r.a.Component),x={photoClient1:a(26),photoClient2:a(27),photoClient3:a(28),photoClient4:a(29),photoClient5:a(30),photoClient6:a(31),photoClient7:a(32),photoClient8:a(33),photoClient9:a(34),photoClient10:a(35),photoClient11:a(36),photoClient12:a(37)},N=[{photo:x.photoClient1,nom:"Maud Harvey",profession:"D\xe9veloppeur Front-End",courriel:r.a.createElement("a",{href:"mailto:harveymaud@gmail.com"},"harveymaud@gmail.com "),tel:r.a.createElement("a",{href:"tel:+1-819-523-3737"},"(819) 523-3737"),adresse:"1901 rue Lapointe"},{photo:x.photoClient2,nom:"Melody Harvey",profession:"Technicienne en laboratoires",courriel:r.a.createElement("a",{href:"mailto:harveymaud@gmail.com"},"harveymaud@gmail.com "),tel:r.a.createElement("a",{href:"tel:+1-819-523-3737"},"(819) 523-3737"),adresse:"1902 rue Lapointe"},{photo:x.photoClient3,nom:"Magaly Harvey",profession:"Technicienne en \xe9lectronique",courriel:r.a.createElement("a",{href:"mailto:harveymaud@gmail.com"},"harveymaud@gmail.com "),tel:r.a.createElement("a",{href:"tel:+1-819-523-3737"},"(819) 523-3737"),adresse:"1903 rue Lapointe"},{photo:x.photoClient4,nom:"Caroline Harvey",profession:"Pharmacienne",courriel:r.a.createElement("a",{href:"mailto:harveymaud@gmail.com"},"harveymaud@gmail.com "),tel:r.a.createElement("a",{href:"tel:+1-819-523-3737"},"(819) 523-3737"),adresse:"1904 rue Lapointe"},{photo:x.photoClient5,nom:"Sonia Harvey",profession:"Avocate",courriel:r.a.createElement("a",{href:"mailto:harveymaud@gmail.com"},"harveymaud@gmail.com "),tel:r.a.createElement("a",{href:"tel:+1-819-523-3737"},"(819) 523-3737"),adresse:"1905 rue Lapointe"},{photo:x.photoClient6,nom:"M\xe9lanie Harvey",profession:"Chirurgienne",courriel:r.a.createElement("a",{href:"mailto:harveymaud@gmail.com"},"harveymaud@gmail.com "),tel:r.a.createElement("a",{href:"tel:+1-819-523-3737"},"(819) 523-3737"),adresse:"1906 rue Lapointe"},{photo:x.photoClient7,nom:"Karine Harvey",profession:"Dentiste",courriel:r.a.createElement("a",{href:"mailto:harveymaud@gmail.com"},"harveymaud@gmail.com "),tel:r.a.createElement("a",{href:"tel:+1-819-523-3737"},"(819) 523-3737"),adresse:"1907 rue Lapointe"},{photo:x.photoClient8,nom:"Kim Harvey",profession:"Ing\xe9nieure",courriel:r.a.createElement("a",{href:"mailto:harveymaud@gmail.com"},"harveymaud@gmail.com "),tel:r.a.createElement("a",{href:"tel:+1-819-523-3737"},"(819) 523-3737"),adresse:"1908 rue Lapointe"},{photo:x.photoClient9,nom:"Patricia Harvey",profession:"M\xe9decin",courriel:r.a.createElement("a",{href:"mailto:harveymaud@gmail.com"},"harveymaud@gmail.com "),tel:r.a.createElement("a",{href:"tel:+1-819-523-3737"},"(819) 523-3737"),adresse:"1909 rue Lapointe"},{photo:x.photoClient10,nom:"Louise Harvey",profession:"Agente de voyage",courriel:r.a.createElement("a",{href:"mailto:harveymaud@gmail.com"},"harveymaud@gmail.com "),tel:r.a.createElement("a",{href:"tel:+1-819-523-3737"},"(819) 523-3737"),adresse:"1910 rue Lapointe"},{photo:x.photoClient11,nom:"Audrey Harvey",profession:"Comptable",courriel:r.a.createElement("a",{href:"mailto:harveymaud@gmail.com"},"harveymaud@gmail.com "),tel:r.a.createElement("a",{href:"tel:+1-819-523-3737"},"(819) 523-3737"),adresse:"1911 rue Lapointe"},{photo:x.photoClient12,nom:"Cynthia Harvey",profession:"Secr\xe9taire",courriel:r.a.createElement("a",{href:"mailto:harveymaud@gmail.com"},"harveymaud@gmail.com "),tel:r.a.createElement("a",{href:"tel:+1-819-523-3737"},"(819) 523-3737"),adresse:"1912 rue Lapointe"}],S=function(e){Object(m.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={search:"",modeRecherche:!1,modeInscription:!1,bottin:N},a.changeString=a.changeString.bind(Object(s.a)(a)),a.modeRecherche=a.modeRecherche.bind(Object(s.a)(a)),a.affichageRecherche=a.affichageRecherche.bind(Object(s.a)(a)),a.retourBottin=a.retourBottin.bind(Object(s.a)(a)),a.handleClick=a.handleClick.bind(Object(s.a)(a)),a.enregistrement=a.enregistrement.bind(Object(s.a)(a)),a}return Object(i.a)(n,[{key:"changeString",value:function(e){this.setState({search:e})}},{key:"modeRecherche",value:function(e){this.setState({modeRecherche:e})}},{key:"affichageRecherche",value:function(){console.log("je fais une recherche");var e=this.state.search.toLowerCase();return r.a.createElement(r.a.Fragment,null,this.state.bottin.map((function(t,a){return t.nom.toLowerCase().includes(e)?r.a.createElement(y,{keys:"Client"+a,photo:t.photo,nom:t.nom,profession:t.profession,courriel:t.courriel,tel:t.tel,adresse:t.adresse}):null})))}},{key:"informationsClient",value:function(){return r.a.createElement(r.a.Fragment,null,this.state.bottin.map((function(e,t){return r.a.createElement(y,{keys:"Client"+t,photo:e.photo,nom:e.nom,profession:e.profession,courriel:e.courriel,tel:e.tel,adresse:e.adresse})})))}},{key:"retourBottin",value:function(e){this.setState({modeRecherche:e})}},{key:"handleClick",value:function(){this.setState({modeInscription:!0})}},{key:"enregistrement",value:function(e){var t=a(51)("./client"+e.photo+".jpg");e.photo=t,N=this.state.bottin,this.setState({bottin:N.concat(e)}),this.setState({modeInscription:!1})}},{key:"render",value:function(){return console.log("recherche:"+this.state.modeRecherche),console.log("inscription:"+this.state.modeInscription),console.log("state"+this.state.bottin),this.state.modeRecherche?r.a.createElement(d.a,{fluid:!0,className:"bg hauteur100"},r.a.createElement(k,{onClick:this.retourBottin}),r.a.createElement(h.a,null,this.affichageRecherche())):this.state.modeInscription?r.a.createElement(r.a.Fragment,null,r.a.createElement(O,{onClick:this.enregistrement})):r.a.createElement(d.a,{fluid:!0,className:"bg"},r.a.createElement(h.a,{className:"text-center bgOpaqueBlanc pb-5"},r.a.createElement(C,{onClick:this.changeString,recherche:this.modeRecherche}),r.a.createElement(p.a,{md:12,lg:6,className:"mx-auto mt-5"},r.a.createElement("h3",null,"Inscription d'un nouveau client"),r.a.createElement("h5",null,"Cliquez pour avoir acc\xe8s au formulaire"),r.a.createElement(f.a,{className:"silverButton border-dark",type:"submit",onClick:this.handleClick},"Inscription"))),r.a.createElement(h.a,{className:"mt-3"},this.informationsClient()))}}]),n}(r.a.Component),I=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleClick=n.handleClick.bind(Object(s.a)(n)),n}return Object(i.a)(a,[{key:"handleClick",value:function(){var e=!1;e="Alibaba"===document.getElementById("password").value,this.props.onClick(e)}},{key:"render",value:function(){return r.a.createElement(d.a,{fluid:!0,className:"bg hauteur100"},r.a.createElement(h.a,{className:"mx-auto text-center"},r.a.createElement(p.a,{sm:{span:10,offset:1},md:{span:6,offset:3}},r.a.createElement("h1",{className:"mt-3"},"Bottin de clients"),r.a.createElement("p",null,"Connexion"))),r.a.createElement(h.a,null,r.a.createElement(p.a,{sm:{span:10,offset:1},md:{span:6,offset:3}},r.a.createElement(b.a,null,r.a.createElement(b.a.Group,{controlId:"password"},r.a.createElement(b.a.Label,null,"Mot de passe"),r.a.createElement(b.a.Control,{type:"password",placeholder:"taper Alibaba"}),r.a.createElement(b.a.Text,{className:"text-muted"},"Entrer le mot de passe pour vous connecter"),r.a.createElement(f.a,{className:"silverButton border-dark",type:"",onClick:this.handleClick},"Connexion"))))))}}]),a}(r.a.Component),B=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={connected:!1},n.gestionConnexion=n.gestionConnexion.bind(Object(s.a)(n)),n.changeState=n.changeState.bind(Object(s.a)(n)),n}return Object(i.a)(a,[{key:"changeState",value:function(e){this.setState({connected:e})}},{key:"gestionConnexion",value:function(){return this.state.connected?r.a.createElement(S,null):r.a.createElement(I,{onClick:this.changeState})}},{key:"render",value:function(){return this.gestionConnexion()}}]),a}(r.a.Component);var w=function(){return r.a.createElement(B,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(52);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.a0fbabf6.chunk.js.map