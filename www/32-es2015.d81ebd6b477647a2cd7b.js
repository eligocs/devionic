(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{F4UR:function(e,t,o){"use strict";o.r(t),o.d(t,"LoginPageModule",(function(){return g}));var s=o("ofXK"),i=o("3Pt+"),n=o("TEn/"),r=o("tyNb"),a=o("fXoL"),l=o("PLH8"),b=o("e8h1"),c=o("59pt"),d=o("WXJI");const h=[{path:"",component:(()=>{class e{constructor(e,t,o,s,i,n,r){this.navCtrl=e,this.modalController=t,this.keyboard=o,this.storage=s,this.faio=i,this.platform=n,this.provider=r,this.username="",this.password="",this.clsaa="",this.clsaa2="",this.isUsernameValid=!0,this.isPasswordValid=!0}ngOnInit(){this.platform.backButton.subscribe(()=>{console.log("Another handler was called!"),this.navCtrl.navigateRoot("login")}),navigator.onLine?"/forgot"==window.location.pathname?this.navCtrl.navigateRoot("/forgot"):this.storage.get("offline-user").then(e=>{e?(this.provider.presentLoading(),this.provider.UserLogin(e.username,e.password).subscribe(e=>{this.LoginReponse=e,this.LoginReponse&&this.faio.isAvailable().then(e=>{this.faio.show({title:"Fingerprint Authentication"}).then(e=>{this.provider.SetHeader(this.LoginReponse.token,this.LoginReponse.user_id),this.navCtrl.navigateRoot("/dashboard/home")}).catch(e=>console.log(e))})},e=>{this.provider.presentToastWithOptions("There are some technical issue please try again!")})):this.navCtrl.navigateRoot("/login")}):(this.provider.presentToastWithOptions("Its look like you are offline!"),this.navCtrl.navigateRoot("/login"))}doLogin(){this.validate()&&(this.provider.presentLoading(),this.provider.UserLogin(this.username,this.password).subscribe(e=>{console.log("data",e),this.LoginReponse=e,this.provider.SetHeader(this.LoginReponse.token,this.LoginReponse.user_id),this.storage.set("offline-user",{username:this.username,password:this.password}),this.provider.UserPanel().subscribe(e=>{let t=this.provider.User_details(e);console.log(t),this.storage.set("current_member",t.current_member)}),this.storage.get("offline-user").then(e=>{console.log("User Details",e)}),this.navCtrl.navigateRoot("/dashboard/home")},e=>{this.provider.presentToastWithOptions("Some technical problem there please try again later!")}))}validate(){return this.isUsernameValid=!0,this.isPasswordValid=!0,this.username&&0!=this.username.length||(this.isUsernameValid=!1,this.provider.presentToastWithOptions("Username is blank")),this.password&&0!=this.password.length||(this.isPasswordValid=!1,this.provider.presentToastWithOptions("Password is blank")),this.isPasswordValid&&this.isUsernameValid}ForgotPass(){this.navCtrl.navigateRoot("forgot")}focusInput(e){this.clsaa="pushup",this.clsaa2="bottom_part1",window.addEventListener("keyboardDidHide",()=>{var e=document.getElementById("log_card"),t=document.getElementById("bot_part");e.classList.remove("pushup"),t.classList.remove("bottom_part1")})}focusOut(e){this.clsaa="",this.clsaa2=""}showFingerprintAuthDlg(){}}return e.\u0275fac=function(t){return new(t||e)(a.Kb(n.O),a.Kb(n.N),a.Kb(l.a),a.Kb(b.b),a.Kb(c.a),a.Kb(n.R),a.Kb(d.a))},e.\u0275cmp=a.Eb({type:e,selectors:[["page-login"]],decls:41,vars:9,consts:[["rel","stylesheet","href","/src/assets/css/bootstrap.min.css"],["href","https://fonts.googleapis.com/css2?family=Montserrat&family=Open+Sans&display=swap","rel","stylesheet"],["href","https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto&display=swap","rel","stylesheet"],[1,"ion-justify-content-center","ion-align-items-center",3,"fullscreen"],[1,"main_container"],[1,"header-sub"],[1,"logo-area"],[1,"logo_img","ion-margin","ion-text-center"],["width","100","src","../../assets/imgs/logo.png","alt",""],[1,"header-text"],["id","log_card"],[1,"ion-text-center","login_title"],["form","ngForm"],["name","name","type","text","placeholder","Username","ngModel","","required","",3,"ngModel","ionFocus","ionBlur","ngModelChange"],["name","password","type","password","placeholder","Password","ngModel","","required","",3,"ngModel","ionFocus","ionBlur","ngModelChange"],[1,"btn_cover","ion-text-center"],[1,"ion-margin","ion-align-center","btn","login_btn",3,"click"],["id","bot_part"],[1,"bottom_left"],[1,"form-group","remember"],["type","radio",1,"form-control"],[1,"bottom_right"],[1,"forgot"],[1,"forget-password",3,"click"],["routerLink","forgot"]],template:function(e,t){1&e&&(a.Lb(0,"link",0),a.Lb(1,"link",1),a.Lb(2,"link",2),a.Nb(3,"ion-content",3),a.Nb(4,"div",4),a.Nb(5,"ion-grid",5),a.Nb(6,"ion-row"),a.Nb(7,"ion-col"),a.Nb(8,"div",6),a.Nb(9,"div",7),a.Lb(10,"img",8),a.Mb(),a.Nb(11,"div",9),a.Nb(12,"h1"),a.nc(13,"Welcome to "),a.Lb(14,"br"),a.nc(15," Dev Rising Nidhi Ltd."),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Nb(16,"ion-card",10),a.Nb(17,"ion-card-header"),a.Nb(18,"ion-card-title",11),a.nc(19,"Login"),a.Mb(),a.Mb(),a.Nb(20,"form",null,12),a.Nb(22,"ion-item"),a.Nb(23,"ion-input",13),a.Vb("ionFocus",(function(e){return t.focusInput(e)}))("ionBlur",(function(e){return t.focusOut(e)}))("ngModelChange",(function(e){return t.username=e})),a.Mb(),a.Mb(),a.Nb(24,"ion-item"),a.Nb(25,"ion-input",14),a.Vb("ionFocus",(function(e){return t.focusInput(e)}))("ionBlur",(function(e){return t.focusOut(e)}))("ngModelChange",(function(e){return t.password=e})),a.Mb(),a.Mb(),a.Nb(26,"div",15),a.Nb(27,"button",16),a.Vb("click",(function(){return t.doLogin()})),a.nc(28,"Login"),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Nb(29,"ion-grid"),a.Nb(30,"ion-row",17),a.Nb(31,"ion-col",18),a.Nb(32,"div",19),a.Lb(33,"input",20),a.Nb(34,"span"),a.nc(35,"Remember Me"),a.Mb(),a.Mb(),a.Mb(),a.Nb(36,"ion-col",21),a.Nb(37,"div",22),a.Nb(38,"p",23),a.Vb("click",(function(){return t.ForgotPass()})),a.Nb(39,"a",24),a.nc(40,"Forgot Password"),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb(),a.Mb()),2&e&&(a.zb(3),a.ec("fullscreen",!0),a.zb(13),a.Bb("login_card ",t.clsaa,""),a.zb(7),a.ec("ngModel",t.username),a.zb(2),a.ec("ngModel",t.password),a.zb(5),a.Bb("bottom_part ",t.clsaa2,""))},directives:[n.j,n.l,n.B,n.i,n.f,n.g,n.h,i.k,i.f,i.g,n.q,n.p,n.V,i.e,i.h,i.j,r.h,n.T],styles:[".login_btn[_ngcontent-%COMP%]{color:#fff;border-radius:80px}"]}),e})()}];let p=(()=>{class e{}return e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({factory:function(t){return new(t||e)},imports:[[r.i.forChild(h)],r.i]}),e})(),g=(()=>{class e{}return e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({factory:function(t){return new(t||e)},imports:[[s.b,i.a,n.L,p]]}),e})()}}]);