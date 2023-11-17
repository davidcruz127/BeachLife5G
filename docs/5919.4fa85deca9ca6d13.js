"use strict";(self.webpackChunksakai_ng=self.webpackChunksakai_ng||[]).push([[5919],{5919:(h,s,l)=>{l.r(s),l.d(s,{ChartsDemoModule:()=>y});var d=l(6814),n=l(2129),t=l(4769),u=l(3859),p=l(9252);let g=(()=>{class r{constructor(e){this.layoutService=e,this.subscription=this.layoutService.configUpdate$.subscribe(o=>{this.initCharts()})}ngOnInit(){this.initCharts()}initCharts(){const e=getComputedStyle(document.documentElement),o=e.getPropertyValue("--text-color"),a=e.getPropertyValue("--text-color-secondary"),i=e.getPropertyValue("--surface-border");this.barData={labels:["Agosto","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre"],datasets:[{label:"Real",backgroundColor:e.getPropertyValue("--primary-500"),borderColor:e.getPropertyValue("--primary-500"),data:[10065,5900,8e3,8100,5600,5500,4e3]},{label:"Estimaci\xf3n",backgroundColor:e.getPropertyValue("--primary-200"),borderColor:e.getPropertyValue("--primary-200"),data:[2800,4800,4e3,1900,8600,2700,9e3]}]},this.barOptions={plugins:{legend:{labels:{fontColor:o}}},scales:{x:{ticks:{color:a,font:{weight:500}},grid:{display:!1,drawBorder:!1}},y:{ticks:{color:a},grid:{color:i,drawBorder:!1}}}},this.pieData={labels:["Paseo","Arena","Mar"],datasets:[{data:[1240,325,102],backgroundColor:[e.getPropertyValue("--indigo-500"),e.getPropertyValue("--purple-500"),e.getPropertyValue("--teal-500")],hoverBackgroundColor:[e.getPropertyValue("--indigo-400"),e.getPropertyValue("--purple-400"),e.getPropertyValue("--teal-400")]}]},this.locData={labels:["Estatico","Caminando","Corriendo","Nadando"],datasets:[{data:[1240,425,102,50],backgroundColor:[e.getPropertyValue("--indigo-500"),e.getPropertyValue("--purple-500"),e.getPropertyValue("--teal-500"),e.getPropertyValue("--green-500")],hoverBackgroundColor:[e.getPropertyValue("--indigo-400"),e.getPropertyValue("--purple-400"),e.getPropertyValue("--teal-400"),e.getPropertyValue("--green-400")]}]},this.pieOptions={plugins:{legend:{labels:{usePointStyle:!0,color:o}}}},this.lineData={labels:["08:00","10:00","12:00","14:00","16:00","18:00","20:00"],datasets:[{label:"Actual",data:[650,590,800,810,560,550,400],fill:!1,backgroundColor:e.getPropertyValue("--primary-500"),borderColor:e.getPropertyValue("--primary-500"),tension:.4},{label:"Estimaci\xf3n",data:[280,480,600,590,860,270,300],fill:!1,backgroundColor:e.getPropertyValue("--primary-200"),borderColor:e.getPropertyValue("--primary-200"),tension:.4}]},this.lineOptions={plugins:{legend:{labels:{fontColor:o}}},scales:{x:{ticks:{color:a},grid:{color:i,drawBorder:!1}},y:{ticks:{color:a},grid:{color:i,drawBorder:!1}}}},this.polarData={datasets:[{data:[11,16,7,3],backgroundColor:[e.getPropertyValue("--indigo-500"),e.getPropertyValue("--purple-500"),e.getPropertyValue("--teal-500"),e.getPropertyValue("--orange-500")],label:"My dataset"}],labels:["Indigo","Purple","Teal","Orange"]},this.polarOptions={plugins:{legend:{labels:{color:o}}},scales:{r:{grid:{color:i}}}},this.radarData={labels:["Eating","Drinking","Sleeping","Designing","Coding","Cycling","Running"],datasets:[{label:"My First dataset",borderColor:e.getPropertyValue("--indigo-400"),pointBackgroundColor:e.getPropertyValue("--indigo-400"),pointBorderColor:e.getPropertyValue("--indigo-400"),pointHoverBackgroundColor:o,pointHoverBorderColor:e.getPropertyValue("--indigo-400"),data:[65,59,90,81,56,55,40]},{label:"My Second dataset",borderColor:e.getPropertyValue("--purple-400"),pointBackgroundColor:e.getPropertyValue("--purple-400"),pointBorderColor:e.getPropertyValue("--purple-400"),pointHoverBackgroundColor:o,pointHoverBorderColor:e.getPropertyValue("--purple-400"),data:[28,48,40,19,96,27,100]}]},this.radarOptions={plugins:{legend:{labels:{fontColor:o}}},scales:{r:{grid:{color:a}}}}}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}static#e=this.\u0275fac=function(o){return new(o||r)(t.Y36(u.P))};static#t=this.\u0275cmp=t.Xpm({type:r,selectors:[["ng-component"]],decls:19,vars:8,consts:[[1,"grid","p-fluid"],[1,"col-12","lg:col-6"],[1,"card"],["type","line",3,"data","options"],[1,"card","flex","flex-column","align-items-center"],[1,"text-left","w-full"],["type","pie",3,"data","options"],["type","bar",3,"data","options"],["type","doughnut",3,"data","options"]],template:function(o,a){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5"),t._uU(4,"Visitantes"),t.qZA(),t._UZ(5,"p-chart",3),t.qZA(),t.TgZ(6,"div",4)(7,"h5",5),t._uU(8,"Localizaci\xf3n"),t.qZA(),t._UZ(9,"p-chart",6),t.qZA()(),t.TgZ(10,"div",1)(11,"div",2)(12,"h5"),t._uU(13,"Visitas mensuales"),t.qZA(),t._UZ(14,"p-chart",7),t.qZA(),t.TgZ(15,"div",4)(16,"h5",5),t._uU(17,"Tipo de Actividad"),t.qZA(),t._UZ(18,"p-chart",8),t.qZA()()()),2&o&&(t.xp6(5),t.Q6J("data",a.lineData)("options",a.lineOptions),t.xp6(4),t.Q6J("data",a.pieData)("options",a.pieOptions),t.xp6(5),t.Q6J("data",a.barData)("options",a.barOptions),t.xp6(4),t.Q6J("data",a.locData)("options",a.pieOptions))},dependencies:[p.C],encapsulation:2})}return r})(),c=(()=>{class r{static#e=this.\u0275fac=function(o){return new(o||r)};static#t=this.\u0275mod=t.oAB({type:r});static#o=this.\u0275inj=t.cJS({imports:[n.Bz.forChild([{path:"",component:g}]),n.Bz]})}return r})(),y=(()=>{class r{static#e=this.\u0275fac=function(o){return new(o||r)};static#t=this.\u0275mod=t.oAB({type:r});static#o=this.\u0275inj=t.cJS({imports:[d.ez,c,p.S]})}return r})()}}]);