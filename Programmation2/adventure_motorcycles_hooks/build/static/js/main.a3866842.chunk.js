(this.webpackJsonpadventure_motorcycles=this.webpackJsonpadventure_motorcycles||[]).push([[0],{31:function(e,t,a){e.exports=a(48)},36:function(e,t,a){},43:function(e,t,a){e.exports=a.p+"static/media/404motorcycle.3e78af66.png"},46:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),c=a.n(o),l=(a(36),a(6)),s=a(7),u=a(9),i=a(8),m=a(51),d=a(52),p=a(29),h=a(12),f=a.n(h),E=a(18),b=a(55),v=a(17),y=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,{sm:3,className:"mt-5"},r.a.createElement(b.a,{style:{width:"28rem"}},r.a.createElement(b.a.Img,{variant:"top",src:this.props.photo}),r.a.createElement(b.a.Body,null,r.a.createElement(b.a.Title,null,r.a.createElement(v.b,{to:"Motorcycle/"+this.props.model+"?id="+this.props.id},r.a.createElement("h2",null,this.props.model))),r.a.createElement(b.a.Subtitle,{className:"mb-2 text-muted"},this.props.factory),r.a.createElement(b.a.Text,null,this.props.description),r.a.createElement(b.a.Text,null,this.props.prix))))}}]),a}(r.a.Component),x=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={donneesRecues:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:3001/adventuremotorcycles");case 3:return t=e.sent,e.next=6,t.json();case 6:if(a=e.sent,this.setState({donneesRecues:a}),t.ok){e.next=10;break}throw Error(t.statusText);case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,this,[[0,12]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log(this.state.donneesRecues),r.a.createElement(m.a,{fluid:!0},r.a.createElement("h1",null,"Affichage de la liste des motos"),r.a.createElement(d.a,null,this.state.donneesRecues.map((function(e,t){return r.a.createElement(y,{photo:e.photo,model:e.modele,factory:e.fabricant,key:e.modele+e.id,description:e.specifications[0].description,prix:e.specifications[1].prix,id:e.id})}))))}}]),a}(r.a.Component),j=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(m.a,{fluid:!0},r.a.createElement(d.a,{className:"text-center"},r.a.createElement(p.a,null,r.a.createElement(x,null))))}}]),a}(r.a.Component),O=a(53),g=function(e){Object(u.a)(n,e);var t=Object(i.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(d.a,{className:"text-center"},r.a.createElement(p.a,null,r.a.createElement("h1",null,"Page introuvable"),r.a.createElement(O.a,{className:"d-inline-block",src:a(43),alt:"Page introuvable erreur 404"}),r.a.createElement("p",null,"Nous serons bient\xf4t l\xe0...revenez un peu plus tard")))}}]),n}(r.a.Component),k=a(15),M=a(54),w=a(56),I=a(21),C=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={photo:""},n.handlePhoto=n.handlePhoto.bind(Object(k.a)(n)),n.handleAdd=n.handleAdd.bind(Object(k.a)(n)),n.addMoto=n.addMoto.bind(Object(k.a)(n)),n}return Object(s.a)(a,[{key:"addMoto",value:function(){var e=Object(E.a)(f.a.mark((function e(t,a,n,r,o){var c,l,s;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.getID();case 3:return c=e.sent,e.next=6,fetch("http://localhost:3001/adventuremotorcycles/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:c,modele:a,fabricant:n,photo:t,specifications:[{description:r},{prix:o}]})});case 6:if(!(l=e.sent).ok){e.next=14;break}return e.next=10,l.json();case 10:return s=e.sent,this.props.history.push("/"),I.b.success("Ajout de la moto, mod\xe8le:  "+a),e.abrupt("return",s);case 14:throw new Error("Request failed!");case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,this,[[0,17]])})));return function(t,a,n,r,o){return e.apply(this,arguments)}}()},{key:"getID",value:function(){var e=Object(E.a)(f.a.mark((function e(){var t,a,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=0,e.next=4,fetch("http://localhost:3001/adventuremotorcycles/");case 4:return a=e.sent,e.next=7,a.json();case 7:for(n=e.sent,r=0;r<n.length;r++)n[r].id>t&&(t=n[r].id);if(a.ok){e.next=11;break}throw Error(a.statusText);case 11:return e.abrupt("return",t+1);case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}()},{key:"handleAdd",value:function(e){e.preventDefault();var t=document.getElementById("urlPhoto").value,a=document.getElementById("nomModele").value,n=document.getElementById("nomFabricant").value,r=document.getElementById("texteDescription").value,o=document.getElementById("valeurPrix").value;this.addMoto(t,a,n,r,o)}},{key:"handlePhoto",value:function(){var e=document.getElementById("urlPhoto").value;this.setState({photo:e})}},{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement("h1",null,"Formulaire d'enregistrement d'une nouvelle moto"),r.a.createElement(M.a,null,r.a.createElement(M.a.Group,{controlId:"urlPhoto"},r.a.createElement(M.a.Label,null,"Entrer l'url de l'image"),r.a.createElement(M.a.Control,{onBlur:this.handlePhoto,type:"text"}),""!==this.state.photo&&r.a.createElement(O.a,{src:this.state.photo,rounded:!0,width:"125"})),r.a.createElement(M.a.Group,{controlId:"nomModele"},r.a.createElement(M.a.Label,null,"Entrer le mod\xe8le de la moto"),r.a.createElement(M.a.Control,{type:"text",placeholder:"exemple: 790 ADVENTURE R"}),r.a.createElement(M.a.Text,{className:"text-muted"},"ajouter une validation")),r.a.createElement(M.a.Group,{controlId:"nomFabricant"},r.a.createElement(M.a.Label,null,"Entrer le nom du fabricant"),r.a.createElement(M.a.Control,{type:"text",placeholder:"exemple: KTM"})),r.a.createElement(M.a.Text,{className:"text-muted"},"Faire un menu d\xe9roulant"),r.a.createElement(M.a.Group,{controlId:"texteDescription"},r.a.createElement(M.a.Label,null,"Description de la moto"),r.a.createElement(M.a.Control,{type:"text"})),r.a.createElement(M.a.Group,{controlId:"valeurPrix"},r.a.createElement(M.a.Label,null,"Entrer le prix co\xfbtant"),r.a.createElement(M.a.Control,{type:"text"})),r.a.createElement(w.a,{variant:"primary",type:"submit",onClick:this.handleAdd},"Ajouter une moto")))))}}]),a}(r.a.Component);C.defaultProps={history:"/"};var R=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,{history:this.props.history}))}}]),a}(r.a.Component);R.defaultProps={history:"/"};var P=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(p.a,{className:"text-right"},r.a.createElement(v.b,{to:"/ajouterMoto",className:"btn btn-primary"},"Ajouter une moto")))}}]),a}(r.a.Component),B=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(p.a,{className:"text-right"},r.a.createElement(v.b,{to:"/",className:"btn btn-primary"},"Retour \xe0 l'accueil")))}}]),a}(r.a.Component),N=function(e){Object(u.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={donneesRecues:{modele:"",fabricant:"",photo:"",specifications:["",""]},setErrors:{}},n.handleEdit=n.handleEdit.bind(Object(k.a)(n)),n.editMoto=n.editMoto.bind(Object(k.a)(n)),n.handlePhoto=n.handlePhoto.bind(Object(k.a)(n)),n.removeMoto=n.removeMoto.bind(Object(k.a)(n)),n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=Object(E.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.setState({motoID:this.props.location.search.substring(4,this.props.location.search.length)});case 3:return e.next=5,console.log(this.state.motoID);case 5:return e.next=7,fetch("http://localhost:3001/adventuremotorcycles/"+this.state.motoID);case 7:return t=e.sent,e.next=10,t.json();case 10:if(a=e.sent,this.setState({donneesRecues:a}),console.log(this.state.donneesRecues),t.ok){e.next=15;break}throw Error(t.statusText);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,this,[[0,17]])})));return function(){return e.apply(this,arguments)}}()},{key:"editMoto",value:function(){var e=Object(E.a)(f.a.mark((function e(t,a,n,r,o){var c,l;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:3001/adventuremotorcycles/"+this.state.motoID,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:this.state.motoID,modele:a,fabricant:n,photo:t,specifications:[{description:r},{prix:o}]})});case 3:if(!(c=e.sent).ok){e.next=11;break}return e.next=7,c.json();case 7:return l=e.sent,this.props.history.push("/"),I.b.warning("Modification de la moto, mod\xe8le:  "+a),e.abrupt("return",l);case 11:throw new Error("Request failed!");case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,this,[[0,14]])})));return function(t,a,n,r,o){return e.apply(this,arguments)}}()},{key:"handleEdit",value:function(e){e.preventDefault();var t=document.getElementById("photoMoto").value,a=document.getElementById("modeleMoto").value,n=document.getElementById("fabricantMoto").value,r=document.getElementById("descriptionMoto").value,o=document.getElementById("prixMoto").value;this.editMoto(t,a,n,r,o)}},{key:"removeMoto",value:function(){var e=Object(E.a)(f.a.mark((function e(){var t,a;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:3001/adventuremotorcycles/"+this.state.motoID,{method:"delete"});case 3:if(!(t=e.sent).ok){e.next=12;break}return e.next=7,t.json();case 7:return a=e.sent,console.log("SUPPRESSION!"),this.props.history.push("/"),I.b.error("Supression de la moto "),e.abrupt("return",a);case 12:throw new Error("Request failed!");case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,this,[[0,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"handlePhoto",value:function(e){var t=document.getElementById("photoMoto").value;this.setState((function(e){return{donneesRecues:Object.assign({},e.donneesRecues,{photo:t})}}))}},{key:"render",value:function(){return console.log(this.state.donneesRecues.photo),r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(d.a,null,r.a.createElement(p.a,null,r.a.createElement(M.a,null,r.a.createElement(M.a.Group,{controlId:"modeleMoto"},r.a.createElement(M.a.Label,null,"Mod\xe8le de la moto"),r.a.createElement(M.a.Control,{type:"text",defaultValue:this.state.donneesRecues.modele})),r.a.createElement(M.a.Group,{controlId:"fabricantMoto"},r.a.createElement(M.a.Label,null,"Fabricant de la moto"),r.a.createElement(M.a.Control,{type:"text",defaultValue:this.state.donneesRecues.fabricant})),r.a.createElement(M.a.Group,{controlId:"photoMoto"},r.a.createElement(M.a.Label,null,"URL d'une photo de la moto"),r.a.createElement(M.a.Control,{type:"text",placeholder:"Entrer une URL valide",onBlur:this.handlePhoto,defaultValue:this.state.donneesRecues.photo}),""!==this.state.donneesRecues.photo&&r.a.createElement(O.a,{src:this.state.donneesRecues.photo,rounded:!0,width:"125"})),r.a.createElement(M.a.Group,{controlId:"descriptionMoto"},r.a.createElement(M.a.Label,null,"Courte description de la moto"),r.a.createElement(M.a.Control,{type:"text",defaultValue:this.state.donneesRecues.specifications[0].description})),r.a.createElement(M.a.Group,{controlId:"prixMoto"},r.a.createElement(M.a.Label,null,"Prix de la moto"),r.a.createElement(M.a.Control,{type:"text",defaultValue:this.state.donneesRecues.specifications[1].prix})),r.a.createElement(w.a,{variant:"primary",type:"submit",onClick:this.handleEdit},"Enregistrer"),r.a.createElement("p",{className:"btn btn-danger ml-3 mt-3",onClick:this.removeMoto},"Supprimer la Moto"))))))}}]),a}(r.a.Component),D=a(5);a(45),a(46);var S=function(){var e=Object(D.f)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(I.a,{autoClose:3e3,hideProgressBar:!0}),"/ajouterMoto"!==e.pathname&&!e.pathname.startsWith("/Motorcycle")&&r.a.createElement(P,null),r.a.createElement(D.c,null,r.a.createElement(D.a,{path:"/",exact:!0,component:j}),r.a.createElement(D.a,{path:"/ajouterMoto",component:R}),r.a.createElement(D.a,{path:"/Motorcycle/:modele",component:N}),r.a.createElement(D.a,{component:g})),"/"!==e.pathname&&r.a.createElement(B,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(47);c.a.render(r.a.createElement(v.a,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.a3866842.chunk.js.map