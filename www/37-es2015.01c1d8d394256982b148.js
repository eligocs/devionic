(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"8DP1":function(t,n,e){"use strict";e.r(n),e.d(n,"PassbookPageModule",(function(){return O}));var i=e("ofXK"),o=e("3Pt+"),s=e("TEn/"),a=e("tyNb"),c=e("5JmO"),b=e.n(c),r=e("TruH"),l=e.n(r),d=e("wd/R"),u=e("fXoL"),h=e("mrSG"),f=e("C6fG"),p=function(t){function n(){return null!==t&&t.apply(this,arguments)||this}Object(h.c)(n,t),n.prototype.fromURL=function(t,n){return Object(f.cordova)(this,"fromURL",{otherPromise:!0},arguments)},n.prototype.fromData=function(t,n){return Object(f.cordova)(this,"fromData",{otherPromise:!0},arguments)},n.pluginName="PDFGenerator",n.plugin="cordova-pdf-generator",n.pluginRef="cordova.plugins.pdf",n.repo="https://github.com/cesarvr/pdf-generator",n.platforms=["Android","iOS"],n.\u0275fac=function(t){return e(t||n)},n.\u0275prov=u.Gb({token:n,factory:function(t){return n.\u0275fac(t)},providedIn:"root"});var e=u.Pb(n);return n}(f.IonicNativePlugin),g=e("WXJI"),M=e("kwrG"),m=e("h/f7"),v=e("FAH8"),N=e("te5A");function _(t,n){if(1&t){const t=u.Ob();u.Nb(0,"ion-button",24),u.Vb("click",(function(){u.jc(t);const e=n.$implicit;return u.Zb(2).account_click(e.type,e.slug)})),u.nc(1),u.Mb()}if(2&t){const t=n.$implicit;u.zb(1),u.oc(t.account_number)}}function D(t,n){if(1&t&&(u.Nb(0,"ion-list",21),u.Nb(1,"p",22),u.nc(2,"Click on account number to see transactions"),u.Mb(),u.mc(3,_,2,1,"ion-button",23),u.Mb()),2&t){const t=u.Zb();u.zb(3),u.ec("ngForOf",t.Response)}}function k(t,n){1&t&&(u.Nb(0,"div"),u.Nb(1,"h5",21),u.nc(2,"No transactions yet."),u.Mb(),u.Mb())}function w(t,n){1&t&&(u.Nb(0,"button",51),u.nc(1,"Show All"),u.Mb())}function z(t,n){if(1&t&&(u.Nb(0,"ion-row"),u.Nb(1,"ion-col",41),u.Nb(2,"h3",42),u.nc(3),u.Mb(),u.Nb(4,"p",12),u.nc(5),u.Mb(),u.Mb(),u.Nb(6,"ion-col",43),u.Nb(7,"p",12),u.nc(8),u.Mb(),u.Mb(),u.Nb(9,"ion-col",44),u.Nb(10,"p",49),u.nc(11),u.Mb(),u.Mb(),u.mc(12,w,2,0,"button",50),u.Mb()),2&t){const t=n.$implicit,e=n.index,i=u.Zb(3);u.zb(3),u.pc(" ",t.transaction_date," "),u.zb(2),u.pc(" ",t.transaction_type," "),u.zb(3),u.pc(" ",t.payment_mode," "),u.zb(3),u.pc(" ",t.amount," "),u.zb(1),u.ec("ngIf",19==e&&20==i.show)}}function y(t,n){if(1&t){const t=u.Ob();u.Nb(0,"div",52),u.Nb(1,"button",53),u.Vb("click",(function(){return u.jc(t),u.Zb(3).createPdf()})),u.nc(2,"Create Passbook"),u.Mb(),u.Mb()}}function L(t,n){if(1&t){const t=u.Ob();u.Nb(0,"div",28),u.Nb(1,"div",29),u.Nb(2,"div",30),u.nc(3," Date Filter"),u.Mb(),u.Nb(4,"ion-list",31),u.Nb(5,"div",32),u.Nb(6,"div",33),u.nc(7," Start Date "),u.Mb(),u.Nb(8,"div",34),u.Nb(9,"ion-datetime",35),u.Vb("ngModelChange",(function(n){return u.jc(t),u.Zb(2).start_date=n}))("ionChange",(function(){return u.jc(t),u.Zb(2).StartDate()})),u.Mb(),u.Lb(10,"ion-icon",36),u.Mb(),u.Mb(),u.Nb(11,"div",32),u.Nb(12,"div",33),u.nc(13," End Date "),u.Mb(),u.Nb(14,"div",34),u.Nb(15,"ion-datetime",37),u.Vb("ngModelChange",(function(n){return u.jc(t),u.Zb(2).end_date=n}))("ionChange",(function(){return u.jc(t),u.Zb(2).EndDate()})),u.Mb(),u.Nb(16,"ion-icon",38),u.Lb(17,"ion-icon",36),u.Mb(),u.Mb(),u.Mb(),u.Mb(),u.Nb(18,"div",21),u.Nb(19,"a",39),u.Vb("click",(function(){return u.jc(t),u.Zb(2).Apply_Date()})),u.nc(20," Apply Filter "),u.Mb(),u.Mb(),u.Mb(),u.Nb(21,"div",40),u.Nb(22,"ion-row"),u.Nb(23,"ion-col",41),u.Nb(24,"h3",42),u.nc(25," OL Accounts "),u.Mb(),u.Mb(),u.Lb(26,"ion-col",43),u.Nb(27,"ion-col",44),u.Nb(28,"h3",45),u.nc(29," All Details "),u.Lb(30,"ion-icon",46),u.Mb(),u.Mb(),u.Mb(),u.mc(31,z,13,5,"ion-row",47),u.ac(32,"slice"),u.Mb(),u.mc(33,y,3,0,"div",48),u.Mb()}if(2&t){const t=u.Zb(2);u.zb(9),u.ec("ngModel",t.start_date),u.zb(6),u.ec("ngModel",t.end_date),u.zb(16),u.ec("ngForOf",u.bc(32,4,t.Transactions,0,t.show)),u.zb(2),u.ec("ngIf",t.Transactions.length>0)}}function T(t,n){if(1&t&&(u.Nb(0,"div",25),u.mc(1,k,3,0,"div",26),u.mc(2,L,34,8,"div",27),u.Mb()),2&t){const t=u.Zb();u.zb(1),u.ec("ngIf",0==t.Transactions.length||""==t.Transactions),u.zb(1),u.ec("ngIf",0!=t.Transactions.length||""!=t.Transactions)}}b.a.vfs=l.a.pdfMake.vfs;const P=[{path:"",component:(()=>{class t{constructor(t,n,e,i,o,s,a,c,b){this.pdfGenerator=t,this.provider=n,this.navCtrl=e,this.route=i,this.network=o,this.pdfmake=s,this.plt=a,this.file=c,this.fileOpener=b,this.letterObj={trans_type:"",trans_amt:"",text:""},this.pdfObj=null,this.Response=[],this.Transactions=[],this.show=20,this.momentjs=d}createPdf(){this.pdfmake.createPdf(this.Transactions)}ngOnInit(){}showValue(){console.log(this.radioValue),this.provider.Loan(this.radioValue).subscribe(t=>{this.Response=this.provider.Loan_Details(t),this.Response?(this.Response=this.Response.details,this.Transactions=[]):this.Response=[]})}account_click(t,n){this.type=t,this.slug=n,this.provider.Pasbook_Details(t,n).subscribe(t=>{this.Transactions=this.provider.Pasbook_Details_Details(t),this.Transactions=this.Transactions?this.Transactions.transactions:[]})}StartDate(){return this.start_date}EndDate(){return this.end_date}Apply_Date(){if(null==this.start_date||""==this.start_date||null==this.end_date||""==this.end_date)this.provider.Pasbook_Details(this.type,this.slug).subscribe(t=>{this.Transactions=this.provider.Pasbook_Details_Details(t),this.Transactions=this.Transactions?this.Transactions.transactions:[]}),this.provider.presentToastWithOptions("Please select date first!");else{let t=this.momentjs(this.start_date).format("YYYY-MM-DD"),n=this.momentjs(this.end_date).format("YYYY-MM-DD");this.provider.presentLoading(),this.provider.Pasbook_Details(this.type,this.slug).subscribe(e=>{this.Transactions=this.provider.Pasbook_Details_Details(e),0!=this.Transactions.length&&(this.Transactions=this.Transactions.transactions.filter(e=>{let i=new Date(e.transaction_date);return i=this.momentjs(i).format("YYYY-MM-DD"),i>=t&&i<=n}))})}}}return t.\u0275fac=function(n){return new(n||t)(u.Kb(p),u.Kb(g.a),u.Kb(s.O),u.Kb(a.a),u.Kb(M.a),u.Kb(m.a),u.Kb(s.R),u.Kb(v.a),u.Kb(N.a))},t.\u0275cmp=u.Eb({type:t,selectors:[["app-passbook"]],decls:42,vars:3,consts:[[1,"accounts-header"],["size","1"],[1,"back-button"],["defaultHref","dashboard/home","name","chevron-back-outline"],["size","2"],["src","../../assets/imgs/logo.png"],["size","7"],["src","../../assets/icon/bellb.svg"],["size","1",1,"blue-wallet"],["src","../../assets/icon/walletb.svg"],[1,"ion-justify-content-center","ion-align-items-center"],[1,"acoounts-header"],[1,"faded-text"],[1,"acc_passbook"],[3,"ngModel","ngModelChange","ionChange"],["slot","start","selected","","value","saving"],["slot","start","value","rd"],["slot","start","value","fd"],["slot","start","value","ol"],["class","ion-text-center",4,"ngIf"],["class","main_div",4,"ngIf"],[1,"ion-text-center"],[1,"instruction"],["size","small","shape","round",3,"click",4,"ngFor","ngForOf"],["size","small","shape","round",3,"click"],[1,"main_div"],[4,"ngIf"],["class","transaction_div",4,"ngIf"],[1,"transaction_div"],[1,"whole-date-range"],[1,"date-filter-title"],[1,"daterangecolums"],[1,"block-date-items"],[1,"label-date"],[1,"flex-center"],["value","1990-02-19","placeholder","Select Date",1,"actual-time-label",3,"ngModel","ngModelChange","ionChange"],["name","calendar-outline",1,"blue-calender"],["value","1990-02-20","placeholder","Select Date",1,"actual-time-label",3,"ngModel","ngModelChange","ionChange"],["name","calendar-outline"],["id","filter",1,"discover-button","ion-text-center",3,"click"],[1,"transaction-list"],["size","5"],[1,"blue-text"],["size","3"],["size","4"],[1,"blue-text","ion-text-right"],["name","chevron-down-outline"],[4,"ngFor","ngForOf"],["class","btn_cover ion-text-center",4,"ngIf"],[1,"details-green-text"],["class","ion-margin ion-align-center btn login_btn1",4,"ngIf"],[1,"ion-margin","ion-align-center","btn","login_btn1"],[1,"btn_cover","ion-text-center"],["ion-button","","full","",1,"ion-margin","ion-align-center","btn","login_btn",3,"click"]],template:function(t,n){1&t&&(u.Nb(0,"ion-toolbar"),u.Nb(1,"div",0),u.Nb(2,"ion-row"),u.Nb(3,"ion-col",1),u.Nb(4,"div",2),u.Lb(5,"ion-back-button",3),u.Mb(),u.Mb(),u.Nb(6,"ion-col",4),u.Lb(7,"img",5),u.Mb(),u.Lb(8,"ion-col",6),u.Nb(9,"ion-col",1),u.Lb(10,"img",7),u.Mb(),u.Nb(11,"ion-col",8),u.Lb(12,"img",9),u.Mb(),u.Mb(),u.Mb(),u.Mb(),u.Nb(13,"ion-content",10),u.Nb(14,"div",11),u.Nb(15,"h1"),u.nc(16,"Get Your Passbook"),u.Mb(),u.Nb(17,"p",12),u.nc(18," Please select an account"),u.Lb(19,"br"),u.nc(20," from below to get passbook\n"),u.Mb(),u.Mb(),u.Nb(21,"ion-list",13),u.Nb(22,"ion-radio-group",14),u.Vb("ngModelChange",(function(t){return n.radioValue=t}))("ionChange",(function(){return n.showValue()})),u.Nb(23,"ion-item"),u.Nb(24,"ion-label"),u.nc(25,"Saving"),u.Mb(),u.Lb(26,"ion-radio",15),u.Mb(),u.Nb(27,"ion-item"),u.Nb(28,"ion-label"),u.nc(29,"RD/DD"),u.Mb(),u.Lb(30,"ion-radio",16),u.Mb(),u.Nb(31,"ion-item"),u.Nb(32,"ion-label"),u.nc(33,"FD"),u.Mb(),u.Lb(34,"ion-radio",17),u.Mb(),u.Nb(35,"ion-item"),u.Nb(36,"ion-label"),u.nc(37,"OL"),u.Mb(),u.Lb(38,"ion-radio",18),u.Mb(),u.Mb(),u.Mb(),u.Lb(39,"hr"),u.mc(40,D,4,1,"ion-list",19),u.mc(41,T,3,2,"div",20),u.Mb()),2&t&&(u.zb(22),u.ec("ngModel",n.radioValue),u.zb(18),u.ec("ngIf",0!=n.Response.length),u.zb(1),u.ec("ngIf",0!=n.Response.length))},directives:[s.K,s.B,s.i,s.c,s.d,s.j,s.s,s.y,s.U,o.e,o.h,s.q,s.r,s.x,s.S,i.j,i.i,s.e,s.k,s.n],pipes:[i.m],styles:[".headnav[_ngcontent-%COMP%]{background:#fff;text-align:right}"]}),t})()}];let j=(()=>{class t{}return t.\u0275mod=u.Ib({type:t}),t.\u0275inj=u.Hb({factory:function(n){return new(n||t)},imports:[[a.i.forChild(P)],a.i]}),t})(),O=(()=>{class t{}return t.\u0275mod=u.Ib({type:t}),t.\u0275inj=u.Hb({factory:function(n){return new(n||t)},imports:[[i.b,o.a,s.L,j]]}),t})()}}]);