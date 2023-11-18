"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[552],{552:(X,m,s)=>{s.r(m),s.d(m,{DashboardModule:()=>k});var r=s(6814),v=s(95),f=s(9252),Z=s(1122),y=s(9552),x=s(707),T=s(1913),b=s(74),g=s(2129),S=s(4664),t=s(4769),A=s(5887),_=s(3859),C=s(8424),c=s(3737),d=s(2574),h=s.n(d),U=s(553);const M=["mapDiv"];let q=(()=>{class n{constructor(e,i){this.placesServices=e,this.mapService=i}ngAfterViewInit(){if(!this.placesServices.userLocation)throw Error("No hay placesServices.userLocation)");h().accessToken=U.N.apiKey;const o=new(h().Map)({container:this.mapDivElement.nativeElement,style:"mapbox://styles/mapbox/streets-v12?optimize=true",center:[-15.42785,28.14093],zoom:13,bearing:200,pitch:15});o.on("style.load",()=>{o.setFog({color:"rgb(240, 247, 249)","high-color":"rgb(36, 92, 223)","horizon-blend":.3}),o.addSource("mapbox-dem",{type:"raster-dem",url:"mapbox://mapbox.terrain-rgb"}),o.setTerrain({source:"mapbox-dem",exaggeration:1.5})}),o.flyTo({center:[-15.42785,28.14093],zoom:14.6,bearing:80,pitch:78,duration:8e3,essential:!0});const a=(new d.Popup).setHTML("\n        <h6>Usted esta aqu\xed</h6>");new d.Marker({color:"red"}).setLngLat(this.placesServices.userLocation).setPopup(a).addTo(o),this.mapService.setMap(o)}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(c.E),t.Y36(c.S))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-map-view"]],viewQuery:function(i,o){if(1&i&&t.Gf(M,5),2&i){let a;t.iGM(a=t.CRH())&&(o.mapDivElement=a.first)}},decls:2,vars:0,consts:[[1,"map-container"],["mapDiv",""]],template:function(i,o){1&i&&t._UZ(0,"div",0,1)},styles:[".map-container[_ngcontent-%COMP%]{position:fixed;top:0;right:0;width:100vw;height:100vh}"]})}return n})(),L=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-loading"]],decls:6,vars:0,consts:[[1,"loading-map","d-flex","justify-content-center","align-items-center"],[1,"text-center"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3"),t._uU(3,"Espere por favor"),t.qZA(),t.TgZ(4,"span"),t._uU(5,"Localizando..."),t.qZA()()())},styles:[".loading-map[_ngcontent-%COMP%]{background-color:#000c;color:#fff;height:100vh;position:fixed;right:0;top:0;width:100vw}"]})}return n})(),w=(()=>{class n{constructor(e,i){this.mapService=e,this.placesService=i}goToMyLocation(){if(!this.placesService.isUserLocationReady)throw Error("No hay ubicaci\xf3n de usuario");if(!this.mapService)throw Error("No hay mapa disponible");this.mapService.flyTo(this.placesService.userLocation)}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(c.S),t.Y36(c.E))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-btn-my-location"]],decls:2,vars:0,consts:[[1,"btn","btn-primary",3,"click"]],template:function(i,o){1&i&&(t.TgZ(0,"button",0),t.NdJ("click",function(){return o.goToMyLocation()}),t._uU(1," Mi Ubicaci\xf3n\n"),t.qZA())},styles:["button[_ngcontent-%COMP%]{position:fixed;top:20px;right:20px}"]})}return n})();var D=s(302);function I(n,l){1&n&&(t.TgZ(0,"div",2)(1,"h6"),t._uU(2,"Cargando"),t.qZA(),t.TgZ(3,"span"),t._uU(4,"Espere por favor"),t.qZA()())}function P(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"li",5),t.NdJ("click",function(){const a=t.CHM(e).$implicit,u=t.oxw(2);return t.KtG(u.flyTo(a))}),t.TgZ(1,"h6"),t._uU(2),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA(),t.TgZ(5,"button",6),t.NdJ("click",function(){const a=t.CHM(e).$implicit,u=t.oxw(2);return t.KtG(u.getDireccions(a))}),t._uU(6," Direcciones "),t.qZA()()}if(2&n){const e=l.$implicit,i=t.oxw(2);t.ekj("active",e.id==i.selectedId),t.xp6(2),t.Oqu(e.text_es),t.xp6(2),t.hij(" ",e.place_name," "),t.xp6(1),t.Q6J("ngClass",e.id===i.selectedId?"btn-outline-light":"btn-outline-primary")}}function B(n,l){if(1&n&&(t.TgZ(0,"ul",3),t.YNc(1,P,7,5,"li",4),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.places)}}let E=(()=>{class n{constructor(e,i){this.placesService=e,this.mapService=i,this.selectedId=""}get isLoadingPlaces(){return this.placesService.isLoadingPlaces}get places(){return this.placesService.places}flyTo(e){this.selectedId=e.id;const[i,o]=e.center;this.mapService.flyTo([i,o])}getDireccions(e){if(!this.placesService.isUserLocationReady)throw Error("No hay userLication");this.placesService.deletePlaces(),this.mapService.getRouteBetweenPoints(this.placesService.userLocation,e.center)}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(D.E),t.Y36(c.S))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-search-results"]],decls:2,vars:2,consts:[["class","alert alert-primary mt-2 text-center ",4,"ngIf"],["class","list-group mt-2 ",4,"ngIf"],[1,"alert","alert-primary","mt-2","text-center"],[1,"list-group","mt-2"],["class","list-group-item  list-group-item-action pointer",3,"active","click",4,"ngFor","ngForOf"],[1,"list-group-item","list-group-item-action","pointer",3,"click"],[1,"btn","btn-sm",3,"ngClass","click"]],template:function(i,o){1&i&&(t.YNc(0,I,5,0,"div",0),t.YNc(1,B,2,1,"ul",1)),2&i&&(t.Q6J("ngIf",o.isLoadingPlaces),t.xp6(1),t.Q6J("ngIf",o.places.length>0))},dependencies:[r.mk,r.sg,r.O5],styles:[".pointer[_ngcontent-%COMP%]{cursor:pointer}p[_ngcontent-%COMP%]{font-size:12px}"]})}return n})(),O=(()=>{class n{constructor(e){this.placesServices=e}onQueryChanged(e=""){}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(c.E))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-search-bar"]],decls:4,vars:0,consts:[[1,"search-container"],["type","text","placeholder","Buscar lugar...",1,"form-control",3,"keyup"],["txtQuery",""]],template:function(i,o){if(1&i){const a=t.EpF();t.TgZ(0,"div",0)(1,"input",1,2),t.NdJ("keyup",function(){t.CHM(a);const V=t.MAs(2);return t.KtG(o.onQueryChanged(V.value))}),t.qZA(),t._UZ(3,"app-search-results"),t.qZA()}},dependencies:[E],styles:[".search-container[_ngcontent-%COMP%]{position:fixed;top:20px;left:20px;width:270px;background-color:#fff;padding:5px;box-shadow:0 10px 10px #0000004d;border-radius:5px;border:1px solid rgba(0,0,0,.1)}"]})}return n})();function F(n,l){1&n&&t._UZ(0,"app-loading")}function J(n,l){1&n&&t._UZ(0,"app-map-view")(1,"app-btn-my-location")(2,"app-search-bar")}let N=(()=>{class n{constructor(e){this.placesService=e}get isUserLocationReady(){return this.placesService.isUserLocationReady}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(c.E))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-map-screen"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["mapReady",""]],template:function(i,o){if(1&i&&(t.YNc(0,F,1,0,"app-loading",0),t.YNc(1,J,3,0,"ng-template",null,1,t.W1O)),2&i){const a=t.MAs(2);t.Q6J("ngIf",!o.isUserLocationReady)("ngIfElse",a)}},dependencies:[r.O5,q,L,w,O]})}return n})();function Y(n,l){1&n&&(t.TgZ(0,"mat-grid-list",19)(1,"mat-grid-tile"),t._UZ(2,"mat-spinner"),t.qZA()())}const p=function(){return{width:"2.5rem",height:"2.5rem"}};function R(n,l){if(1&n&&(t.TgZ(0,"div",2)(1,"div",3)(2,"div",4)(3,"div")(4,"span",5),t._uU(5,"Meteorolog\xeda"),t.qZA(),t.TgZ(6,"div",6),t._uU(7),t.qZA()(),t.TgZ(8,"div",20),t._UZ(9,"i",21),t.qZA()(),t.TgZ(10,"div")(11,"span",10),t._uU(12,"Precipitaciones: "),t.qZA(),t.TgZ(13,"span",9),t._uU(14),t.qZA()(),t.TgZ(15,"div")(16,"span",10),t._uU(17,"Humedad: "),t.qZA(),t.TgZ(18,"span",9),t._uU(19),t.qZA()(),t.TgZ(20,"div")(21,"span",10),t._uU(22,"Viento: "),t.qZA(),t.TgZ(23,"span",9),t._uU(24),t.qZA()()()()),2&n){const e=t.oxw();t.xp6(7),t.hij(" ",e.meteoInfo.ta," \xbaC"),t.xp6(1),t.Q6J("ngStyle",t.DdM(5,p)),t.xp6(6),t.hij("",e.meteoInfo.prec,"%"),t.xp6(5),t.hij("",e.meteoInfo.hr,"%"),t.xp6(5),t.hij("",e.meteoInfo.vv," km/h")}}let j=(()=>{class n{constructor(e,i,o){this.productService=e,this.layoutService=i,this.aemetService=o,this.subscription=this.layoutService.configUpdate$.subscribe(()=>{this.initChart()})}ngOnInit(){this.initChart(),this.productService.getProductsSmall().then(e=>this.products=e),this.items=[{label:"Add New",icon:"pi pi-fw pi-plus"},{label:"Remove",icon:"pi pi-fw pi-minus"}],this.initMeteo()}initMeteo(){this.aemetService.getUrlAcceso().pipe((0,S.w)(({datos:e})=>this.aemetService.getInfoMeteo(e))).subscribe(e=>{this.meteoInfo=e[0]})}initChart(){const e=getComputedStyle(document.documentElement),i=e.getPropertyValue("--text-color"),o=e.getPropertyValue("--text-color-secondary"),a=e.getPropertyValue("--surface-border");this.chartData={labels:["January","February","March","April","May","June","July"],datasets:[{label:"First Dataset",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:e.getPropertyValue("--bluegray-700"),borderColor:e.getPropertyValue("--bluegray-700"),tension:.4},{label:"Second Dataset",data:[28,48,40,19,86,27,90],fill:!1,backgroundColor:e.getPropertyValue("--green-600"),borderColor:e.getPropertyValue("--green-600"),tension:.4}]},this.chartOptions={plugins:{legend:{labels:{color:i}}},scales:{x:{ticks:{color:o},grid:{color:a,drawBorder:!1}},y:{ticks:{color:o},grid:{color:a,drawBorder:!1}}}}}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(A.M),t.Y36(_.P),t.Y36(C.L))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:83,vars:8,consts:[["divLoading",""],[1,"grid"],[1,"hidden","md:block","col-12","lg:col-6","xl:col-3","z-1"],[1,"card","mb-0"],[1,"flex","justify-content-between","mb-3"],[1,"block","text-500","font-medium","mb-3"],[1,"text-900","font-medium","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-blue-100","border-round",3,"ngStyle"],[1,"pi","pi-user","text-blue-500","text-xl"],[1,"text-green-500","font-medium"],[1,"text-500"],["class","hidden md:block col-12 lg:col-6 xl:col-3 z-1",4,"ngIf","ngIfElse"],[1,"flex","align-items-center","justify-content-center","bg-cyan-100","border-round",3,"ngStyle"],[1,"pi","pi-inbox","text-cyan-500","text-xl"],[1,"flex","align-items-center","justify-content-center","bg-purple-100","border-round",3,"ngStyle"],[1,"pi","pi-comment","text-purple-500","text-xl"],[1,"col-12","xl:col-12"],[1,"card"],[1,"z-n1","position-absolute"],["cols","1"],[1,"flex","align-items-center","justify-content-center","bg-orange-100","border-round",3,"ngStyle"],[1,"pi","pi-map-marker","text-orange-500","text-xl"]],template:function(i,o){if(1&i&&(t.YNc(0,Y,3,0,"ng-template",null,0,t.W1O),t.TgZ(2,"div",1)(3,"div",2)(4,"div",3)(5,"div",4)(6,"div")(7,"span",5),t._uU(8,"Datos Ocupaci\xf3n"),t.qZA(),t.TgZ(9,"div",6),t._uU(10,"Media"),t.qZA()(),t.TgZ(11,"div",7),t._UZ(12,"i",8),t.qZA()(),t.TgZ(13,"div")(14,"span",9),t._uU(15,"1345 personas "),t.qZA(),t.TgZ(16,"span",10),t._uU(17,"actualmente"),t.qZA()(),t.TgZ(18,"div")(19,"span",9),t._uU(20,"13 personas "),t.qZA(),t.TgZ(21,"span",10),t._uU(22,"nuevas"),t.qZA()(),t.TgZ(23,"div")(24,"span",9),t._uU(25,"150 personas "),t.qZA(),t.TgZ(26,"span",10),t._uU(27,", en 1 hora"),t.qZA()()()(),t.YNc(28,R,25,6,"div",11),t.TgZ(29,"div",2)(30,"div",3)(31,"div",4)(32,"div")(33,"span",5),t._uU(34,"Olas"),t.qZA(),t.TgZ(35,"div",6),t._uU(36,"Marea baja"),t.qZA()(),t.TgZ(37,"div",12),t._UZ(38,"i",13),t.qZA()(),t.TgZ(39,"div")(40,"span",10),t._uU(41,"Direcci\xf3n: "),t.qZA(),t.TgZ(42,"span",9),t._uU(43,"330\xba"),t.qZA()(),t.TgZ(44,"div")(45,"span",10),t._uU(46,"Altura significativa: "),t.qZA(),t.TgZ(47,"span",9),t._uU(48,"1.2 m"),t.qZA()(),t.TgZ(49,"div")(50,"span",10),t._uU(51,"Perido de olas: "),t.qZA(),t.TgZ(52,"span",9),t._uU(53,"12. s"),t.qZA()()()(),t.TgZ(54,"div",2)(55,"div",3)(56,"div",4)(57,"div")(58,"span",5),t._uU(59,"Calidad del Aire"),t.qZA(),t.TgZ(60,"div",6),t._uU(61,"Buena"),t.qZA()(),t.TgZ(62,"div",14),t._UZ(63,"i",15),t.qZA()(),t.TgZ(64,"div")(65,"span",10),t._uU(66,"NO2: "),t.qZA(),t.TgZ(67,"span",9),t._uU(68,"10 \xb5g/m\xb3"),t.qZA()(),t.TgZ(69,"div")(70,"span",10),t._uU(71,"SO2: "),t.qZA(),t.TgZ(72,"span",9),t._uU(73,"60 \xb5g/m\xb3 "),t.qZA()(),t.TgZ(74,"div")(75,"span",10),t._uU(76,"O3: "),t.qZA(),t.TgZ(77,"span",9),t._uU(78,"20 \xb5g/m\xb3"),t.qZA()()()(),t._UZ(79,"app-map-screen"),t.TgZ(80,"div",16)(81,"div",17),t._UZ(82,"app-map-screen",18),t.qZA()()()),2&i){const a=t.MAs(1);t.xp6(11),t.Q6J("ngStyle",t.DdM(5,p)),t.xp6(17),t.Q6J("ngIf",o.meteoInfo)("ngIfElse",a),t.xp6(9),t.Q6J("ngStyle",t.DdM(6,p)),t.xp6(25),t.Q6J("ngStyle",t.DdM(7,p))}},dependencies:[r.O5,r.PC,N],encapsulation:2})}return n})(),Q=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[g.Bz.forChild([{path:"",component:j}]),g.Bz]})}return n})();var z=s(5388);let k=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[r.ez,v.u5,f.S,Z.$9,y.U$,T.l,b.ml,x.hJ,Q,z._]})}return n})()}}]);